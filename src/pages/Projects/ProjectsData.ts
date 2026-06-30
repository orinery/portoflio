
export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  type: "개인 프로젝트" | "팀 프로젝트"
  description: string;
  techStack: string[];
  img: string;
  githubUrl?: string;
  demoUrl?: string;
  NotionUrl?: string;
}


export const projectsData: Project[] = [
  {
    name: "월급의 정석",
    startDate: "26.06.05",
    endDate: "26.06.23",
    type: "개인 프로젝트",
    description: "Next.js·TypeScript로 만든 급여 계산 서비스. 연봉을 입력하면 4대보험·소득세를 자동 공제해 월 실수령액을 계산하고, 시급·주휴수당·퇴직금·연말정산까지 2026년 기준으로 제공합니다. shadcn/ui와 Tailwind로 일관된 UI 시스템을 구성했습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "lucide-react", "Vercel"],
    img: "/assets/wolgup.png",
    githubUrl: "https://github.com/orinery/wolgup-jeongseok",
    demoUrl: "https://www.realwolgup.com/",
  },
  {
    name: "댕누비",
    startDate: "25.04.24",
    endDate: "25.05.20",
    type: "팀 프로젝트",
    description: "React·TypeScript 기반 반려동물 동반 여행지 사이트. Firebase 로그인과 한국관광공사 공공 API를 연동해 지역·테마별 관광 정보를 제공합니다. 팀 프로젝트에서 협업 도구(Notion·GitHub)로 일정과 산출물을 관리했습니다.",
    techStack: ["React", "TypeScript","Vite", "Firebase","SCSS", "Vercel","Github","Notion"],
    img: "/assets/daengnoobi.png",
    githubUrl: "https://github.com/robam1108/Daeng-noo-bi",
    demoUrl: "https://daeng-noo-bi.vercel.app/",
    NotionUrl:"https://www.notion.so/Daeng-Noo-bi-1df07f340efa8014b73dd0463e528c67?source=copy_link",
  },
  {
    name: "감정 일기장",
    startDate: "25.04.03",
    endDate: "25.04.11",
    type: "개인 프로젝트",
    description: "React 기반 감정 일기 앱. 감정 선택과 일기 CRUD, 로컬스토리지 데이터 영속성, 정렬·월별 필터링을 구현했습니다.",
    techStack: ["React", "JavaScript","Vite","CSS","Vercel","Github"],
    img: "/assets/emotionDiary.png",
    githubUrl: "https://github.com/orinery/2025_emotionDiary",
    demoUrl: "https://emotiondiary-orinerys-projects.vercel.app/",
  },
  {
    name: "투두리스트",
    startDate: "25.03.01",
    endDate: "25.03.22",
    type: "개인 프로젝트",
    description: "컴포넌트 분리와 상태 관리에 집중해 React 기본 동작 원리를 학습한 프로젝트. 할 일 CRUD와 완료 처리를 구현했습니다.",
    techStack: ["React", "JavaScript","Vite","CSS","Github"],
    img: "/assets/Todolist.png",
    githubUrl: "https://github.com/orinery/2025_todoList",
    demoUrl: "https://todolist-self-nine.vercel.app/",
  },
  {
    name: "미래엔 디지털 교과서",
    startDate: "24.01.22",
    endDate: "25.01.22",
    type: "팀 프로젝트",
    description: "초등 교사 대상 디지털 교과서 플랫폼의 프론트엔드 개발. HTML·CSS·JavaScript 기반 퍼블리싱과 기능 구현 담당. (교사 로그인 전용 서비스라 데모는 비공개입니다.)",
    techStack: [ "JavaScript","Html","CSS","SVN","FTP"],
    img: "/assets/miraeN.png",
  },
]