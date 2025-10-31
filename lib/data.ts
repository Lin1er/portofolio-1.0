import { IconType } from "react-icons";
import { SiTailwindcss, SiReact, SiNextdotjs, SiLaravel, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiArduino, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';

export const skills: { name: string; icon: IconType | IconType; color?: string }[] = [
  {
    name: 'React',
    icon: SiReact,
    color: 'bg-blue-100'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'bg-gray-100'
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    color: 'bg-red-100'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'bg-teal-100'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'bg-yellow-100'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'bg-blue-200'
  },
  {
    name: 'HTML5',
    icon: SiHtml5,
    color: 'bg-orange-100'
  },
  {
    name: 'CSS3',
    icon: SiCss3,
    color: 'bg-blue-100'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: 'bg-green-100'
  },
  {
    name: 'Arduino',
    icon: SiArduino,
    color: 'bg-gray-200'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: 'bg-green-200'
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: 'bg-blue-300'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: 'bg-blue-400'
  },
];

export const projects: { name: string; description: string; link: string; imageId: string }[] = [
  {
    name: 'Project Alpha',
    description: 'A comprehensive web platform for data analytics, providing real-time insights through an intuitive dashboard.',
    link: '#',
    imageId: 'project-1',
  },
  {
    name: 'Project Beta',
    description: 'A cross-platform mobile application designed to streamline team collaboration and project management on the go.',
    link: '#',
    imageId: 'project-2',
  },
  {
    name: 'Project Gamma',
    description: 'An elegant e-commerce solution with a focus on user experience and seamless checkout process.',
    link: '#',
    imageId: 'project-3',
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
}
