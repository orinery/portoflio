export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    category: "프론트엔드",
    icon: "/assets/icons/javascript.svg",
  },
  {
    name: "React",
    category: "프론트엔드",
    icon: "/assets/icons/react.svg",
  },
  {
    name: "TypeScript",
    category: "프론트엔드",
    icon: "/assets/icons/typescript.svg",
  },
  {
    name: "HTML",
    category: "프론트엔드",
    icon: "/assets/icons/html5.svg",
  },
  {
    name: "CSS",
    category: "프론트엔드",
    icon: "/assets/icons/css3.svg",
  },
  {
    name: "SCSS",
    category: "프론트엔드",
    icon: "/assets/icons/sass.svg",
  },
  {
    name: "Vite",
    category: "환경 및 배포",
    icon: "/assets/icons/vite.svg",
  },
  {
    name: "Vercel",
    category: "환경 및 배포",
    icon: "/assets/icons/vercel.svg",
  },
  {
    name: "GitHub",
    category: "환경 및 배포",
    icon: "/assets/icons/github.svg",
  },
  {
    name: "SVN",
    category: "환경 및 배포",
    icon: "/assets/icons/subversion.svg",
  },
  {
    name: "Photoshop",
    category: "디자인 및 협업",
    icon: "/assets/icons/photoshop.svg",
  },
  {
    name: "Illustrator",
    category: "디자인 및 협업",
    icon: "/assets/icons/illustrator.svg",
  },
  {
    name: "Figma",
    category: "디자인 및 협업",
    icon: "/assets/icons/figma.svg",
  },
  {
    name: "Notion",
    category: "디자인 및 협업",
    icon: "/assets/icons/notion.svg",
  },
];
