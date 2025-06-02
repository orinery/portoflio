interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  techStack: string[];
  tasks?: string[];
  taskGroups?: TaskGroup[];
}

interface TaskGroup {
  title: string;
  period: string;
  role: string;
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: '2024 ~ 2025',
    company: '토브소프트',
    title: '프론트엔드 개발자',
    description: '개정된 교과서에 맞추어 디지털 교과서 개발 및 유지 보수',
    techStack: ['HTML', 'CSS', 'JavaScript', 'SVN', 'FTP','Illustrator'],
    taskGroups: [
      {
        title: '3,4학년 1학기',
        period: '2024.12 - 2025.01',
        role: '프로젝트 총괄, 업무 배치 및 안내, 프로토 개발 및 검수',
        achievements: [
          '전반적인 프로젝트 진행을 총괄하며, 업무 배치 및 가이드 제공을 통해 팀 내 개발 효율을 극대화',
          '신규 페이지 타입 프로토타입을 직접 제작하고, 결과물 검수를 통해 품질 확보',
          '이전 학기에서 확인된 미비점을 정밀 분석 후 개선안 적용, 시스템 완성도 향상',
        ],
      },
      {
        title: '1,2학년 2학기',
        period: '2024.09 - 2024.12',
        role: '국어 과목의 프로젝트 리더(PL) 역할을 수행, 타 과목 개발에도 유기적으로 기여',
        achievements: [
          '외주 인력을 위한 실행 가능한 가이드 문서 제작 및 배포, 온보딩 효율성 확보',
          '불필요한 반복 작업을 제거하는 프로세스 개선안 제안 및 실행 → 야근 50% 감소',
          '기한 내 고품질 결과물 납품으로 3,4학년 국어 과목 개발 추가 계약 성사',
        ],
      },
      {
        title: '1,2학년 1학기',
        period: '2024.01 - 2024.08',
        role: '국어, 수학, 통합 과목 개발 및 국어 PL 업무보조',
        achievements: [
          '반복 발생하는 문제를 분석하여 PL을 지원, 개발 속도 20% 가속화',
          '커뮤니케이션 프로세스 개선으로 전반적인 업무 효율 향상',
        ],
      },
      {
        title: '동아 주사위 게임 개발/ 공주대 시각장애인용 리더기 교과서 제작',
        period: '2024',
        role: '단독 설계 및 구현',
        achievements: [
          'HTML, CSS, JavaScript를 활용한 간단한 주사위 게임 구현',
          '시각장애인을 위한 교과서 리더기 웹 접근성 구조 설계 및 마크업 구현',
        ],
      },
    ],
  },
  {
    period: '2022 ~ 2023',
    company: '몽키 트래블',
    title: '웹 디자이너',
    description: '인포그래픽 및 이벤트 페이지·배너 디자인',
    techStack: ['Photoshop','Illustrator', 'Procreate'],
    tasks: [
      '인포그래픽 및 이벤트 페이지·배너 디자인',
      '사이트 전용 이모티콘 및 시각 콘텐츠 기획·제작',
      '프로모션 목적과 타깃에 맞춘 디자인으로 마케팅 콘텐츠의 완성도 향상에 기여',
    ],
  },
];