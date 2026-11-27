
export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  type: "개인 프로젝트" | "팀 프로젝트" | "실무 프로젝트"
  description: string;
  techStack: string[];
  img: string;
  githubUrl?: string;
  demoUrl?: string;
  NotionUrl?: string;
  imgAlt?: string;
  wide?: boolean;                              // 그리드 한 줄 전체를 쓰는 카드
  credit?: string;                             // 역할 분담 표기
  liveLinks?: { label: string; url: string }[]; // 데모 외 공개 페이지 링크
  note?: string;                               // 링크 아래 보조 안내
  mobileImg?: string;                          // 대표 카드에서 폰 프레임으로 겹쳐 보일 모바일 화면
  previewUrl?: string;                         // 대표 카드 브라우저 주소창에 표시할 주소
  archive?: ArchivePage[];                     // 전체 길이 캡처 (페이지가 내려가도 볼 수 있게)
  archivedAt?: string;                         // 캡처한 시점 (예: "2026.11")
  isLive?: boolean;                            // false면 라이브 링크를 숨기고 "프로모션 종료" 표기
}

// 전체 길이 캡처 묶음. 긴 페이지는 여러 조각 이미지로 나뉨
export interface ArchivePage {
  label: string;
  pc: string[];
  mo: string[];
}

// 카드 대신 한 줄로만 남기는 학습용 프로젝트
export interface LearningLog {
  name: string;
  summary: string;
  githubUrl: string;
}


export const projectsData: Project[] = [
  {
    name: "월급의 정석",
    startDate: "26.06.05",
    endDate: "26.06.23",
    type: "개인 프로젝트",
    description: "중간 입·퇴사 일할, 4대보험·소득세, 퇴직금·실업급여·연말정산까지 2026년 기준 계산기 8종. 계산 로직은 UI와 분리한 순수 함수로, 요율과 국세청 간이세액표는 연도별 JSON으로 관리합니다. AI 코딩 도구와 함께 만들고 계산 로직에는 단위 테스트(Vitest)를 붙였으며, 검색 유입 데이터로 실제 수요가 ‘중간 입·퇴사 일할 계산’에 있다는 것을 확인했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vitest", "Vercel"],
    img: "/assets/wolgup-pc.webp",
    imgAlt: "월급의 정석 중간 입·퇴사 급여 일할 계산 화면",
    mobileImg: "/assets/wolgup-mo.webp",
    previewUrl: "realwolgup.com/proration",
    githubUrl: "https://github.com/orinery/wolgup-jeongseok",
    demoUrl: "https://www.realwolgup.com/",
  },
  {
    name: "여행 플랫폼 기획전",
    startDate: "26.02",
    endDate: "현재",
    type: "실무 프로젝트",
    description: "여행 예약 플랫폼의 기획전 페이지. 디자이너 시안을 받아 2~3일 안에 PC·모바일 반응형으로 퍼블리싱하고, Swiper 슬라이드와 스크롤 등장 애니메이션을 구현했습니다. 칭다오 기획전은 국문·영문 페이지를 함께 작업했습니다.",
    techStack: ["HTML", "SCSS", "jQuery", "Swiper", "PHP(Smarty)"],
    img: "/assets/campaigns-mockup.webp",
    imgAlt: "칭다오·겨울 치앙마이 기획전의 PC 화면과 모바일 화면 목업",
    wide: true,
    credit: "디자인 사내 디자이너 · 퍼블리싱 본인",
    liveLinks: [
      { label: "칭다오 KO", url: "https://www.monkeytravel.com/world/ko/curation/curation_list.php?curation_id=212" },
      { label: "칭다오 EN", url: "https://www.monkeytravel.com/world/en/curation/curation_list.php?curation_id=212" },
      { label: "겨울 치앙마이", url: "https://www.monkeytravel.com/th/ko/curation/curation_list.php?curation_id=25" },
    ],
    isLive: true,
    archivedAt: "2026.11",
    archive: [
      {
        label: "칭다오 KO",
        pc: ["/assets/archive/qingdao-ko-pc-full.webp"],
        mo: ["/assets/archive/qingdao-ko-mo-full.webp"],
      },
      {
        label: "칭다오 EN",
        pc: ["/assets/archive/qingdao-en-pc-full.webp"],
        mo: ["/assets/archive/qingdao-en-mo-full.webp"],
      },
      {
        label: "겨울 치앙마이",
        pc: [1, 2, 3].map((n) => `/assets/archive/chiangmai-ko-pc-full-${n}.webp`),
        mo: [1, 2, 3, 4, 5, 6].map((n) => `/assets/archive/chiangmai-ko-mo-full-${n}.webp`),
      },
    ],
  },
  {
    name: "미래엔 디지털 교과서",
    startDate: "24.01.22",
    endDate: "25.01.22",
    type: "팀 프로젝트",
    description: "초등 교사용 디지털 교과서(국어·수학·통합) 개발. 페이지 유형별 프로토타입을 만들고, 국어 과목 PL로 외주 인력 가이드 작성과 결과물 검수를 맡았습니다. 기한 내 납품으로 3·4학년 국어 추가 수주에 기여했습니다.",
    techStack: [ "JavaScript","HTML","CSS","SVN","FTP"],
    img: "/assets/miraeN.png",
    note: "교사 전용 서비스 · 데모 비공개",
  },
  {
    name: "댕누비",
    startDate: "25.04.24",
    endDate: "25.05.20",
    type: "팀 프로젝트",
    description: "반려동물 동반 여행지 사이트. 와이어프레임과 페이지 플로우를 기획하고, 회원가입·로그인 전체(UI, Firebase 인증, 로그인 상태 유지, 상태별 메뉴)와 한국관광공사 API 출력·캐싱, 검색·필터, 상세 페이지 라우팅, Vercel 배포를 맡았습니다.",
    techStack: ["React", "TypeScript","Vite", "Firebase","SCSS", "Vercel"],
    img: "/assets/daengnoobi.png",
    githubUrl: "https://github.com/robam1108/Daeng-noo-bi",
    demoUrl: "https://daeng-noo-bi.vercel.app/",
    NotionUrl:"https://www.notion.so/Daeng-Noo-bi-1df07f340efa8014b73dd0463e528c67?source=copy_link",
  },
]

export const learningLogs: LearningLog[] = [
  {
    name: "감정 일기장",
    summary: "React 일기 CRUD · 로컬스토리지 · 월별 필터",
    githubUrl: "https://github.com/orinery/2025_emotionDiary",
  },
  {
    name: "투두리스트",
    summary: "React 컴포넌트 분리 · 상태 관리 기초",
    githubUrl: "https://github.com/orinery/2025_todoList",
  },
]
