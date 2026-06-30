
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
    description: "Next.js와 TypeScript로 제작한 급여 계산 서비스입니다. 연봉만 입력하면 4대보험과 소득세를 자동으로 공제해 월 실수령액을 계산하며, 시급·주휴수당, 퇴직금, 연말정산 등 직장인에게 필요한 다양한 계산기를 2026년 기준으로 제공합니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "lucide-react", "Vercel"],
    img: "/assets/wolgup.png",
    demoUrl: "https://www.realwolgup.com/",
  },
  {
    name: "댕누비",
    startDate: "25.04.24",
    endDate: "25.05.20",
    type: "팀 프로젝트",
    description: "React와 TypeScript로 제작한 반려동물 동반 여행지 소개 사이트입니다. Firebase를 활용해 로그인 기능을 구현하고, 한국관광공사 공공 API를 연동하여 지역 및 테마별 관광 정보를 제공합니다.",
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
    description: "React와 JavaScript를 기반으로 개발한 감정 일기장입니다. 감정 선택과 일기 작성/수정/삭제 기능은 물론, 로컬스토리지를 활용한 데이터 영속성, 최신순·오래된순 정렬, 월별 필터링 기능을 구현했습니다.",
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
    description: "React와 JavaScript를 활용해 제작한 투두리스트 웹 애플리케이션입니다. 할 일 추가, 수정, 삭제, 완료 처리 기능을 구현했으며, 컴포넌트 분리와 상태 관리를 중심으로 React의 기본 동작 원리를 학습하는 데 중점을 두었습니다.",
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
    description: "초등 교사 대상 디지털 교과서 플랫폼의 프론트엔드 개발에 참여했습니다. HTML, CSS, JavaScript 기반의 퍼블리싱 및 기능 구현을 담당했습니다. 사용자 대상이 제한된 서비스로, 실제 서비스는 교사 로그인을 통해서만 이용 가능합니다.",
    techStack: [ "JavaScript","Html","CSS","SVN","FTP"],
    img: "/assets/miraeN.png",
  },
]