export const projects = [
  {
    id: 1,
    title: "TIMGAD Project Management",
    description:
      "A full-featured project management platform built for teams. Includes kanban boards, task tracking, team collaboration, and real-time updates.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    href: "https://github.com/abdelrahmanadel",
    image: "/projects/timgad.png",
    featured: true,
  },
  {
    id: 2,
    title: "React Admin Dashboard",
    description:
      "A modern, responsive admin dashboard with charts, data tables, authentication, and dark mode support built with React and Recharts.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Shadcn UI"],
    href: "https://github.com/abdelrahmanadel",
    image: "/projects/admin.png",
    featured: true,
  },
  {
    id: 3,
    title: "Dragons Training App",
    description:
      "An interactive training and progress-tracking application with gamification elements, XP systems, and user achievement boards.",
    tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    href: "https://github.com/abdelrahmanadel",
    image: "/projects/dragons.png",
    featured: true,
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description:
      "This very portfolio — built with Next.js 15, Framer Motion, and Tailwind CSS. Fully responsive with dark mode and smooth animations.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/abdelrahmanadel",
    image: "/projects/portfolio.png",
    featured: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building a Fullstack App with Next.js 15 and Prisma",
    excerpt:
      "A deep dive into building production-grade fullstack applications using the latest Next.js App Router features, server actions, and Prisma ORM.",
    date: "2025-05-10",
    readTime: "8 min read",
    slug: "nextjs-15-prisma-fullstack",
    tags: ["Next.js", "Prisma", "TypeScript"],
  },
  {
    id: 2,
    title: "Why I Switched from REST to tRPC",
    excerpt:
      "Exploring the benefits of end-to-end type safety with tRPC and how it transformed my developer experience in monorepo projects.",
    date: "2025-04-22",
    readTime: "6 min read",
    slug: "rest-to-trpc",
    tags: ["tRPC", "TypeScript", "API"],
  },
  {
    id: 3,
    title: "Framer Motion: The Animations Guide You Didn't Know You Needed",
    excerpt:
      "A comprehensive guide to adding beautiful, performant animations to your React apps using Framer Motion — from basics to advanced gestures.",
    date: "2025-03-15",
    readTime: "10 min read",
    slug: "framer-motion-guide",
    tags: ["Framer Motion", "React", "Animation"],
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS: Tips and Patterns for Clean UIs",
    excerpt:
      "Practical patterns, component abstractions, and lesser-known utilities that will level up your Tailwind CSS workflow significantly.",
    date: "2025-02-28",
    readTime: "7 min read",
    slug: "tailwind-patterns",
    tags: ["Tailwind CSS", "CSS", "UI"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/abdelrahmanadel",
    icon: "github",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/abdelrahmanadel",
    icon: "x",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abdelrahmanadel",
    icon: "linkedin",
  },
];

export const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];
