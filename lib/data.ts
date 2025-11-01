import { IconType } from "react-icons";
import {
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiArduino,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

export const skills: {
  name: string;
  icon: IconType | IconType;
  color?: string;
}[] = [
  {
    name: "React",
    icon: SiReact,
    color: "bg-blue-100",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "bg-gray-100",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "bg-red-100",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "bg-teal-100",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "bg-yellow-100",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-200",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "bg-orange-100",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "bg-blue-100",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "bg-green-100",
  },
  {
    name: "Arduino",
    icon: SiArduino,
    color: "bg-gray-200",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "bg-green-200",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "bg-blue-300",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "bg-blue-400",
  },
];

export const projects: {
  title: string;
  description: string;
  link: string;
  imageId: string;
}[] = [
 {
    title: "Dormitory Management System",
    description:
      "A web-based platform developed to manage student dormitory activities, including permission requests, attendance tracking, and multi-role authentication for admins, guardians, and students.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "ELibrary Management System",
    description:
      "An online library system that enables students to browse, borrow, and manage books digitally, complete with admin tools for cataloging and activity monitoring.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "Student Return Monitoring System",
    description:
      "An integrated web and IoT system built to monitor student return schedules, automate entry validation, and provide real-time reporting for dormitory administrators.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "Uangku",
    description:
      "A personal finance tracking app that allows users to record expenses, analyze spending habits, and gain insights into their financial health through intuitive visualizations.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "WhatsApp Gateway",
    description:
      "A multi-device web gateway built with Laravel and Node.js using Baileys, enabling automated WhatsApp notifications from multiple applications through a centralized API interface.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "Interactive Portfolio Terminal",
    description:
      "A portfolio website built with Next.js and React that simulates a terminal interface, allowing visitors to explore projects, experiences, and contact information interactively.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "Finance Management Bot",
    description:
      "A Telegram bot designed to manage personal finances by processing text, voice notes, and receipt images, automatically categorizing and recording expenses into Google Sheets.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "Telegram Order Automation Bot",
    description:
      "An n8n-based Telegram bot connected to Google Sheets and an AI agent, capable of parsing order lists, matching product data, and logging transactions automatically.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "IoT Strobe Light Controller",
    description:
      "An ESP32-based automotive strobe light controller featuring 16-channel relay output, customizable blinking patterns, and Bluetooth connectivity for control via a Flutter mobile app.",
    link: "#",
    imageId: "blank",
  },
  {
    title: "Home Server Setup",
    description:
      "A multi-node home server environment built using mini PCs and a main workstation, integrating NAS, network management via MikroTik, and containerized services through Docker.",
    link: "#",
    imageId: "blank",
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};
