import { FaGithub, FaLinkedin } from "react-icons/fa";

export const projects = [
  {
    title: "Short-Video Platform",
    description:
      "A video browsing app with a vertical swipe feed, auto-playing video player, and global volume control. Supports video bookmarking with local persistence and a profile gallery to replay saved videos.",
    image: "/images/video-feed.png",
    techStack: ["Next.js", "TypeScript", "SWR", "Zustand", "Tailwind"],
    demoUrl: "https://video-feed-three.vercel.app/",
    githubUrl: "https://github.com/xiaonandev/video-feed",
    eyebrow: "Video and state",
    highlights: [
      "Only loads the current and nearby videos",
      "Shares volume and saved-video state across pages",
    ],
    caseStudy: {
      challenge:
        "Make a media-heavy feed feel immediate while keeping playback behaviour predictable as users move between videos and saved content.",
      approach:
        "Separated server data from UI state, preloaded upcoming media, and centralized playback preferences and bookmarks in a persisted Zustand store.",
      outcome:
        "A responsive, mobile-first viewing flow with seamless navigation between discovery and saved videos.",
    },
  },
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
    demoUrl: "https://job-board-pmt3q38eb-xiaonandevs-projects.vercel.app/",
    githubUrl: "https://github.com/xiaonandev/job-board",
    eyebrow: "Full-stack practice",
    highlights: [
      "Sign-in and separate user actions",
      "Job and user data built with Prisma and PostgreSQL",
    ],
    caseStudy: {
      challenge:
        "Design one product around distinct user roles while keeping protected actions and data relationships understandable.",
      approach:
        "Built authenticated flows with Auth.js, modeled jobs and users in Prisma, and connected reusable form and listing patterns to server-side data.",
      outcome:
        "An end-to-end product that demonstrates frontend delivery alongside authentication, database design and deployment.",
    },
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
    githubUrl: "https://github.com/xiaonandev/music-app",
    eyebrow: "Audio and state",
    highlights: [
      "One audio player shared across the app",
      "Queue, playlist and playback state managed with Zustand",
    ],
    caseStudy: {
      challenge:
        "Keep playback, the active track, controls and playlists synchronized across multiple parts of the interface.",
      approach:
        "Designed a centralized Zustand audio store and reusable player controls, then connected remote music data through a consistent API layer.",
      outcome:
        "A cohesive player experience where navigation and playlist edits do not interrupt or desynchronize playback.",
    },
  },
  // {
  //   title: "Movies App",
  //   description:
  //     "A URL-driven, API-powered interactive media browsing system with cinematic UI patterns.",
  //   image: "/images/movie-app.png",
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "SWR",
  //     "Swiper",
  //     "API integration",
  //     "Tailwind",
  //   ],
  //   demoUrl: "https://movie-app-lkyu.vercel.app/movies",
  //   githubUrl: "https://github.com/xiaonandev/movie-app",
  // },
  // {
  //   title: "Dashboard",
  //   description:
  //     "A admin dashboard mockup featuring sidebar navigation and static data visualization blocks.",
  //   image: "/images/dashboard.png",
  //   techStack: ["React", "TypeScript", "Recharts", "Tailwind"],
  //   demoUrl: "https://dashboard-green-sigma-19.vercel.app/",
  //   githubUrl: "https://github.com/xiaonandev/dashboard",
  // },
  // {
  //   title: "E-commerce App",
  //   description:
  //     "A responsive e-commerce frontend with product browsing, cart management, and persistent cross-page state handling.",
  //   image: "/images/ecommerce.png",
  //   techStack: ["React", "Javascript", "Chakra UI", "API integration"],
  //   demoUrl: "https://ecommerce-project-psi-drab.vercel.app/",
  //   githubUrl: "https://github.com/xiaonandev/ecommerce-project/tree/master",
  // },
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
    href: "https://github.com/xiaonandev",
    icon: FaGithub,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/xiaonan-dong-8993a6418/",
    icon: FaLinkedin,
  },
];
