# 구채현 포트폴리오

디자인 배경을 가진 프론트엔드 개발자 **구채현**의 단일 페이지 포트폴리오입니다.

- 배포 사이트: <https://www.orinery.com/>
- 개발 기간: 2025.05.29 ~

## 소개

웹 디자이너로 시작해 React·TypeScript로 화면을 구현하는 프론트엔드 개발자의 포트폴리오입니다.
핵심 역량, 기술 스택, 경력, 프로젝트, 연락처를 한 페이지에서 스크롤로 둘러볼 수 있으며, 다크모드를 지원합니다.
웹 표준과 접근성을 지키며 기획–디자인–개발 사이의 간극을 메우는 것을 지향합니다.

## 기술 스택

- **Core**: React 19 · TypeScript · Vite 6
- **Style**: SCSS
- **Animation**: AOS (Animate On Scroll)
- **Icons**: Font Awesome
- **Deploy / Analytics**: Vercel

라우팅·상태관리 라이브러리 없이 단일 페이지로 구성했으며, 다크모드는 자체 provider로 구현했습니다.

## 주요 섹션

| 섹션 | 내용 |
| --- | --- |
| Intro | 히어로 소개 및 현재 상태(STATUS) 카드 |
| 핵심 역량 | 디자인을 이해하는 프론트엔드 · 웹 표준/접근성 · 협업 |
| Skills | 사용 기술 아이콘 |
| Experience | 경력 |
| Projects | 진행 프로젝트 |
| Contact | 연락처 |

## 폴더 구조

```
src/
├── pages/
│   ├── Intro/        # 히어로(Intro) + 핵심 역량(IntroDetail)
│   ├── Skills/       # 기술 스택
│   ├── Experience/   # 경력
│   ├── Projects/     # 프로젝트
│   └── Contact/      # 연락처
├── components/       # Layout · Header · Footer · DarkModeProvider
└── style/            # reset · 전역 스타일
```

## 실행 방법

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행
npm run build     # 타입 체크(tsc) + 프로덕션 빌드
npm run preview   # 빌드 결과 미리보기
npm run lint      # ESLint 검사
```
