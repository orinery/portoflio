# 구채현 포트폴리오

디자인 배경을 가진 프론트엔드 개발자 **구채현**의 단일 페이지 포트폴리오입니다.

- 배포 사이트: <https://www.orinery.com/>
- 개발 기간: 2025.05.29 ~

## 소개

웹디자이너 출신으로, 여행 플랫폼에서 기획전 퍼블리싱과 사내 업무 도구를 만들고 있는 프론트엔드 개발자의 포트폴리오입니다.
핵심 역량, 기술 스택, 경력, 동료 후기, 프로젝트, 연락처를 한 페이지에서 스크롤로 둘러볼 수 있으며, 시스템 설정에 따라 다크모드로 표시됩니다.

## 기술 스택

- **Core**: React 19 · TypeScript · Vite 6
- **Style**: SCSS
- **Animation**: IntersectionObserver 기반 자체 reveal 훅(`useReveal`), CSS keyframes (prefers-reduced-motion 대응)
- **Deploy / Analytics**: Vercel

라우팅·상태관리 라이브러리 없이 단일 페이지로 구성했으며, 다크모드는 자체 provider로 구현했습니다.

## 주요 섹션

| 섹션 | 내용 |
| --- | --- |
| Intro | 히어로 소개 및 현재 상태(STATUS) 카드 |
| 핵심 역량 | 디자인을 아는 UI 구현 · 반복 업무를 도구로 · 검증하며 쓰는 AI |
| Skills | 사용 기술 아이콘 |
| Experience | 경력 |
| Feedback | 함께 일한 동료들의 후기 |
| Projects | 진행 프로젝트 |
| Contact | 연락처 |

## 폴더 구조

```
src/
├── pages/
│   ├── Intro/        # 히어로(Intro) + 핵심 역량(IntroDetail)
│   ├── Skills/       # 기술 스택
│   ├── Experience/   # 경력
│   ├── Feedback/     # 동료 후기
│   ├── Projects/     # 프로젝트
│   └── Contact/      # 연락처
├── components/       # Layout · Header · Footer · DarkModeProvider
└── style/            # reset · 전역 스타일
```

## 작업물 캡처

공개 페이지를 PC·모바일로 캡처해 포트폴리오용 WebP와 스크롤 영상으로 저장합니다. 설치된 Chrome을 사용합니다.

```bash
npm run capture -- --url <주소> --name <이름> --full --video --hide-widgets
```

결과는 `capture-out/<날짜>/`에 저장되며 git에는 올라가지 않습니다. 원본은 개인 보관 위치로 옮기고, 사이트에 쓸 WebP만 `public/assets/`로 복사합니다. 옵션은 `scripts/capture.mjs` 상단 주석을 참고하세요.
