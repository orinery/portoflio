interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  techStack: string[];
  tasks?: string[];
  taskGroups?: TaskGroup[];
  metrics?: Metric[];
}

interface TaskGroup {
  title: string;
  period: string;
  role: string;
  achievements: string[];
}

interface Metric {
  value: string;
  arrow?: string;
  label: string;
}

export const experienceData: ExperienceItem[] = [
  {
    period: '2026.02 ~ 현재',
    company: '몽키트래블',
    title: '개발자 (프론트엔드 · 디자인)',
    description: '여행 예약 플랫폼의 기획전·이벤트 퍼블리싱, 사내 업무 도구 개발, 마케팅 디자인',
    techStack: ['HTML', 'SCSS', 'JavaScript', 'jQuery', 'Swiper', 'PHP(Smarty)', 'Git', 'Photoshop', 'Illustrator'],
    metrics: [
      { value: '9건', label: '기획전·이벤트·랜딩 퍼블리싱' },
      { value: '2~3일', label: '시안 수령부터 퍼블리싱 마감까지' },
      { value: '6명+', label: '직접 만든 가격 계산기 사용 인원' },
    ],
    taskGroups: [
      {
        title: '기획전·이벤트·랜딩 퍼블리싱',
        period: '2026 - 현재',
        role: '디자이너 시안을 받아 반응형으로 퍼블리싱',
        achievements: [
          '칭다오(국문·영문), 겨울 치앙마이, 관광청 협업, 태국 골프, 12월 호텔 프로모션 기획전',
          '쿠킹 클래스 8회·트래블제로 이벤트, 페이링크·Rate Market Group 랜딩 페이지',
          '시안 수령 후 2~3일 안에 PC·모바일 반응형으로 마감',
        ],
      },
      {
        title: '사내 업무 도구 개발',
        period: '2026',
        role: '요구사항 청취부터 화면 설계·개발까지 단독',
        achievements: [
          '네이버 옵션가 계산기: 계산기로 하나하나 두드리고 역마진을 따로 확인하던 상품 등록 업무를 자동화, TnA팀 6명 이상 사용',
          '오픈 5일 만에 사용자 피드백을 반영해 목표 마진율 기반 세일가 자동 계산 탭 추가',
          'AI 이미지 스튜디오에 태국 현지 SNS용 소셜카드 생성 기능 추가: 로고·연락처 영역 보호, 프롬프트·가이드라인 설계, 신규 모델 추가',
        ],
      },
      {
        title: '서비스 화면 유지보수',
        period: '2026 - 현재',
        role: '실서비스 화면 수정 및 기능 보완',
        achievements: [
          '결제 팝업·제로카드 애니메이션, 예약 필수 추가정보 입력란 수정',
          '월드 고객센터 국문·영문 페이지, 바우처 문구 수정, 배너 업로드 기능 개선',
        ],
      },
      {
        title: '디자인',
        period: '2026 - 현재',
        role: '인포그래픽·소셜카드·배너 디자인',
        achievements: [
          '일본·베트남 인포그래픽 제작 및 영문화',
          '태국 현지 IG/FB 소셜카드, 메인 배너, 메일 발송용 HTML 제작',
        ],
      },
    ],
  },
  {
    period: '2024 ~ 2025',
    company: '토브소프트',
    title: '프론트엔드 개발자',
    description: '개정된 교과서에 맞추어 디지털 교과서 개발 및 유지 보수',
    techStack: ['HTML', 'CSS', 'JavaScript', 'SVN', 'FTP','Illustrator'],
    metrics: [
      { value: 'PL', label: '국어 과목 프로젝트 리더' },
      { value: '정시', label: '새벽 퇴근이 일상이던 팀을 정시 퇴근으로' },
      { value: '+계약', label: '3·4학년 국어 추가 수주 성사' },
    ],
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
          '반복 작업을 없애는 프로세스 개선안 제안·실행 → 새벽 1~3시 퇴근과 주말 출근이 일상이던 팀이 대부분 정시 퇴근',
          '기한 내 고품질 결과물 납품으로 3,4학년 국어 과목 개발 추가 계약 성사',
        ],
      },
      {
        title: '1,2학년 1학기',
        period: '2024.01 - 2024.08',
        role: '국어, 수학, 통합 과목 개발 및 국어 PL 업무보조',
        achievements: [
          '반복 발생하는 문제를 분석해 PL 업무를 지원하고 개발 일정 단축에 기여',
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
    company: '몽키트래블',
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