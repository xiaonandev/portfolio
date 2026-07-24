import { FaGithub, FaLinkedin } from "react-icons/fa";

export const projects = [
  // {
  //   title: 'Video Feed',
  //   description: '.',
  //   image: '/images/movie-app.png',
  //   techStack: ['Next.js', 'TypeScript', 'SWR', 'API integration', 'Tailwind'],
  //   demoUrl: 'https://video-feed-three.vercel.app/',
  //   githubUrl: 'https://github.com/dxn-forlearning-xd/video-feed',
  // },
  {
    title: "Job Board Platform",
    description:
      "A full-stack job portal designed to streamline job searching and posting. Built with a focus on authenticated user sessions and data-driven interactions.",
    image: "/images/job-board-01.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind",
    ],
    demoUrl:
      "https://job-board-pmt3q38eb-dxn-forlearning-xds-projects.vercel.app/",
    githubUrl: "https://github.com/dxn-forlearning-xd/job-board",
  },
  {
    title: "Music App",
    description:
      "A modern web-based music player featuring real-time playback synchronization, dynamic playlist management, and a robust global state-driven audio engine.",
    image: "/images/music-app-01.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "API integration",
      "Tailwind",
    ],
    demoUrl: "https://music-app-nu-liard.vercel.app/",
    githubUrl: "https://github.com/dxn-forlearning-xd/music-app",
  },
  {
    title: "Movies App",
    description:
      "A URL-driven, API-powered interactive media browsing system with cinematic UI patterns.",
    image: "/images/movie-app.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "SWR",
      "Swiper",
      "API integration",
      "Tailwind",
    ],
    demoUrl: "https://movie-app-lkyu.vercel.app/movies",
    githubUrl: "https://github.com/dxn-forlearning-xd/movie-app",
  },
  {
    title: "Dashboard",
    description:
      "A admin dashboard mockup featuring sidebar navigation and static data visualization blocks.",
    image: "/images/dashboard.png",
    techStack: ["React", "TypeScript", "Recharts", "Tailwind"],
    demoUrl: "https://dashboard-green-sigma-19.vercel.app/",
    githubUrl: "https://github.com/dxn-forlearning-xd/dashboard",
  },
  {
    title: "E-commerce App",
    description:
      "A responsive e-commerce frontend with product browsing, cart management, and persistent cross-page state handling.",
    image: "/images/ecommerce.png",
    techStack: ["React", "Javascript", "Chakra UI", "API integration"],
    demoUrl: "https://ecommerce-project-psi-drab.vercel.app/",
    githubUrl:
      "https://github.com/dxn-forlearning-xd/ecommerce-project/tree/master",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Junior Frontend Developer",
    company: "Science Infinity Technology Limited",
    period: "Sep 2025 - Jan 2026",
    description:
      "This role involved standard web development and layout building within an agile team. Daily work focused on working together with backend engineers for API routing, syncing with UI/UX designers to implement designs, and communicating with the mobile app team for cross-platform pages.",
  },
  {
    type: "work",
    title: "Transition period",
    company: "",
    period: "2022-2025",
    description:
      "Career transition period working in music composition and English teaching, while gradually shifting focus toward frontend development through self-learning and personal projects.",
  },

  {
    type: "uni",
    title: "MA of Arts Music Management",
    company: "The University of Sheffield",
    period: "2021 - 2022",
    description: "",
  },
  {
    type: "uni",
    title: "BA of Arts Musicology",
    company: "The University of Shandong",
    period: "2017 - 2021",
    description: "",
  },
];

export const footerSocialLinks = [
  {
    label: "github",
    href: "https://github.com/dxn-forlearning-xd",
    icon: FaGithub,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/xiaonan-dong-8993a6418/",
    icon: FaLinkedin,
  },
];
