// 공개 웹 페이지를 PC·모바일로 캡처해 포트폴리오용 이미지/영상으로 저장합니다.
// 설치된 Chrome을 사용하므로 브라우저를 따로 내려받지 않습니다 (playwright-core).
//
// 사용 예)
//   npm run capture -- --url https://example.com --name sample --full --video
//   npm run capture -- --url https://www.realwolgup.com/proration --name wolgup-pc --only pc --scroll-to "급여 일할 정산" --offset 96
//
// 옵션
//   --url <주소>          캡처할 페이지 (필수)
//   --name <이름>         파일 이름 앞부분 (필수)
//   --out <폴더>          저장 폴더 (기본: capture-out/<오늘 날짜>)
//   --only pc|mo          한쪽만 캡처 (기본: 둘 다)
//   --full                전체 길이(full page) 캡처도 저장
//   --video               위에서 아래로 스크롤하는 녹화 영상(webm)도 저장
//   --scroll-to <텍스트>  이 텍스트가 있는 요소가 화면 위쪽에 오도록 스크롤한 뒤 캡처
//   --offset <px>         --scroll-to 위치에서 위로 남길 여백 (기본 24)
//   --hide-widgets        상담 버튼 같은 떠 있는 위젯 숨김
//   --pc-width <px>       PC 캡처를 WebP로 줄일 최대 너비 (기본 1440)
//   --mo-width <px>       모바일 캡처를 WebP로 줄일 최대 너비 (기본 780)

import { chromium, devices } from "playwright-core";
import { mkdirSync, writeFileSync, renameSync } from "fs";
import { join, resolve } from "path";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const v = args[i + 1];
  return v === undefined || v.startsWith("--") ? true : v;
};

const url = opt("url");
const name = opt("name");
if (!url || !name || url === true || name === true) {
  console.error("사용법: npm run capture -- --url <주소> --name <이름> [--full] [--video] [--only pc|mo]");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const outDir = resolve(opt("out", join("capture-out", today)));
mkdirSync(outDir, { recursive: true });

const only = opt("only");
const scrollTo = opt("scroll-to");
const offset = Number(opt("offset", 24));
const full = Boolean(opt("full", false));
const video = Boolean(opt("video", false));
const hideWidgets = Boolean(opt("hide-widgets", false));
const maxWidth = { pc: Number(opt("pc-width", 1440)), mo: Number(opt("mo-width", 780)) };

const PROFILES = {
  pc: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  // 전체 길이 캡처가 캔버스 한계를 넘지 않도록 모바일은 2배율
  mo: { ...devices["iPhone 13"], viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 },
};

const HIDE_CSS = `
  [class*="chat"], [id*="chat"], [class*="talk"], [id*="talk"],
  [class*="floating"], [class*="quick"], [class*="toast"] { visibility: hidden !important; }
`;

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function prepare(page) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  if (hideWidgets) await page.addStyleTag({ content: HIDE_CSS });
  // 스크롤 애니메이션·지연 로딩 이미지가 모두 뜨도록 끝까지 내렸다가 올라옴
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await wait(1500);
}

// WebP는 한 변이 16,383px을 넘을 수 없어서, 긴 페이지는 이 높이 단위로 나눠 저장
const CHUNK_HEIGHT = 8000;

// PNG 버퍼를 브라우저 canvas로 WebP 변환 (최대 너비로 축소, 길면 여러 조각)
async function toWebp(browser, png, width, quality = 0.82) {
  const page = await browser.newPage();
  const dataUrls = await page.evaluate(
    async ({ src, width, quality, chunk }) => {
      const im = new Image();
      im.src = src;
      await im.decode();
      const scale = Math.min(1, width / im.naturalWidth);
      const outW = Math.round(im.naturalWidth * scale);
      const outH = Math.round(im.naturalHeight * scale);
      const urls = [];
      for (let y = 0; y < outH; y += chunk) {
        const h = Math.min(chunk, outH - y);
        const c = document.createElement("canvas");
        c.width = outW;
        c.height = h;
        const ctx = c.getContext("2d");
        ctx.imageSmoothingQuality = "high";
        // 원본 좌표로 환산해 해당 구간만 그림
        ctx.drawImage(im, 0, y / scale, im.naturalWidth, h / scale, 0, 0, outW, h);
        urls.push(c.toDataURL("image/webp", quality));
      }
      return urls;
    },
    { src: "data:image/png;base64," + png.toString("base64"), width, quality, chunk: CHUNK_HEIGHT }
  );
  await page.close();
  return dataUrls.map((u) => Buffer.from(u.split(",")[1], "base64"));
}

function save(file, buf) {
  writeFileSync(join(outDir, file), buf);
  console.log("저장:", join(outDir, file), `${Math.round(buf.length / 1024)}KB`);
}

// 조각이 하나면 base.webp, 여러 개면 base-1.webp, base-2.webp ...
function saveWebp(base, bufs) {
  if (bufs.length === 1) return save(`${base}.webp`, bufs[0]);
  bufs.forEach((b, i) => save(`${base}-${i + 1}.webp`, b));
}

async function shoot(browser, key) {
  const ctx = await browser.newContext({ ...PROFILES[key], locale: "ko-KR" });
  const page = await ctx.newPage();
  await prepare(page);

  if (scrollTo && scrollTo !== true) {
    // 숨겨진 메뉴 등에 같은 문구가 있을 수 있어 화면에 보이는 요소만 대상으로 함
    const el = page.getByText(scrollTo, { exact: false }).filter({ visible: true }).first();
    await el.evaluate((node, off) => {
      const top = node.getBoundingClientRect().top + window.scrollY - off;
      window.scrollTo(0, Math.max(0, top));
    }, offset);
    await wait(800);
  }

  const shot = await page.screenshot();
  save(`${name}-${key}.png`, shot);
  saveWebp(`${name}-${key}`, await toWebp(browser, shot, maxWidth[key]));

  if (full) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await wait(500);
    // Chrome은 16,384px(기기 픽셀)보다 긴 페이지를 한 번에 찍으면 내용이 반복되므로 구간별로 캡처
    const dsf = PROFILES[key].deviceScaleFactor;
    const { width: vw } = PROFILES[key].viewport;
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    const step = Math.floor(CHUNK_HEIGHT / dsf);
    const parts = [];
    for (let y = 0; y < total; y += step) {
      const height = Math.min(step, total - y);
      parts.push(await page.screenshot({ fullPage: true, clip: { x: 0, y, width: vw, height } }));
    }
    const webps = [];
    for (const [i, part] of parts.entries()) {
      save(parts.length === 1 ? `${name}-${key}-full.png` : `${name}-${key}-full-${i + 1}.png`, part);
      webps.push(...(await toWebp(browser, part, maxWidth[key], 0.78)));
    }
    saveWebp(`${name}-${key}-full`, webps);
  }
  await ctx.close();

  if (video) {
    const vctx = await browser.newContext({
      ...PROFILES[key],
      locale: "ko-KR",
      recordVideo: { dir: outDir, size: PROFILES[key].viewport },
    });
    const vpage = await vctx.newPage();
    await prepare(vpage);
    // 약 12초 동안 일정한 속도로 끝까지 스크롤
    await vpage.evaluate(async () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const steps = 240;
      for (let i = 0; i <= steps; i++) {
        window.scrollTo(0, (max * i) / steps);
        await new Promise((r) => setTimeout(r, 50));
      }
    });
    await wait(800);
    const tmp = await vpage.video().path();
    await vctx.close();
    renameSync(tmp, join(outDir, `${name}-${key}.webm`));
    console.log("저장:", join(outDir, `${name}-${key}.webm`));
  }
}

const browser = await chromium.launch({ channel: "chrome" });
try {
  for (const key of ["pc", "mo"]) {
    if (only && only !== key) continue;
    await shoot(browser, key);
  }
} finally {
  await browser.close();
}
