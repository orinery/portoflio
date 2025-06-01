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
          '2학기 개발에서 보완이 필요한 세부사항을 개선하고, 3,4학년 신규 페이지 타입의 프로토 타입을 제작',
          '직원들의 역량을 고려한 업무 배치 및 가이드 제공을 통해 일정 지연 없이 성공적으로 개발 완료',
        ],
      },
      {
        title: '1,2학년 2학기',
        period: '2024.09 - 2024.12',
        role: '국어 과목 PL 및 타 과목 개발 보조',
        achievements: [
          '프로토타입 제작 및 외주자 가이드 작성으로 업무 효율성 향상',
          '프로세스 개선을 통해 야근 50% 감소, 일정 내 성공적 완수',
          '국어 과목 3,4학년 개발 추가 계약',
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
      '사이트 전용 이모티콘 제작 및 시각적 콘텐츠 기획',
      '마케팅 캠페인 및 프로모션 효과를 극대화하는 디자인 제작',
    ],
  },
];