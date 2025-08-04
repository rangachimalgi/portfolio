import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Full Stack Developer – Customer XPS",
    location: "Bengaluru, Karnataka",
    description:
      "Started as a backend developer using Java + Spring Boot, then moved to frontend with React.js, working on internal fintech tools and dashboards.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Built and shipped multiple fullstack apps across healthcare, real estate, and events using React, React Native, Node.js, MongoDB, and TypeScript.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Full Stack Engineer – ParNets Group",
    location: "Bengaluru, Karnataka",
    description:
      "Developed and deployed mobile/web apps for SMEs using React Native, React.js, Node.js, and MongoDB. Worked on end-to-end features, custom APIs, and direct client communication.",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
  {
    title: "Frontend Engineer – Patientry AI",
    location: "Remote",
    description:
      "Building internal tools and dashboards for a healthcare AI startup. Shipped modular UI, integrated APIs, and handled key features for client-facing ops.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Real Estate CRM App",
    description:
      "Built a fullstack CRM mobile app for real estate teams with role-based access control (RBAC), lead tracking, attendance, and dynamic screen rendering based on user roles. Features clean UI, internal chat, and scalable backend APIs.",
    tags: ["React Native", "Node Js", "Express Js", "MongoDB", "RBAC", "JWT"],
    imageUrl: corpcommentImg,
  },

  {
    title: "Blood Test Service Hub ",
    description:
      "Developed an online platform for a client to streamline blood test scheduling, management, and report delivery, including a comprehensive admin panel for operational oversight. Live: https://fortunebloodtest.com",
    tags: ["React", "Node Js", "Express Js", "MongoDB", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Club Management Mobile App ",
    description:
      "A user-friendly platform for managing memberships, facility bookings, events, and employee operations. It offers automated renewals, online reservations, and real-time financial insights, streamlining club administration.",
    tags: ["React Native", "Node Js", "Express Js", "MongoDB", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Multi-Service Management System ",
    description:
      "The application features intuitive dashboards tailored for Users, Vendors, Drivers, and Admins, providing quick access to key functions like ride booking, product management, and analytics. Each role-specific interface ensures seamless navigation, real-time updates, and efficient task management.",
    tags: ["React Native", "Node Js", "Express Js", "MongoDB", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-Commerce",
    description:
      "Crafted a client-specific e-commerce site with an intuitive admin panel, streamlining the management of products and orders.",
    tags: ["React", "Node Js", "Express Js", "MongoDB", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Desktop App",
    description:
      "Developed a desktop application to efficiently manage an enterprise's internal database, enhancing their operational capabilities.",
    tags: [
      "Electron Js",
      "React Js",
      "Typescript",
      "MongoDB",
      "Electron Builder",
      "IPC",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Mobile App",
    description:
      "Developed a Mobile Application for a client to manage internal event handling for large venues and event spaces, facilitating smooth booking and organization processes.",
    tags: ["React Native", "Typescript", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Event Booking and Coordination Platform",
    description:
      "Developed a website for a client to facilitate event bookings, providing a seamless platform for managing venue reservations and related services.",
    tags: ["React", "Node Js", "Express Js", "MongoDB", "Redux"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.Js", icon: FaReact },
  { name: "React Native", icon: FaReact },
  { name: "Next Js", icon: SiNextdotjs },
  { name: "Node Js", icon: FaNodeJs },
  { name: "Git", icon: FaGit },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redux", icon: SiRedux },
  { name: "Express", icon: SiExpress },
  { name: "PHP", icon: FaPhp },
  { name: "Laravel", icon: FaLaravel },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
] as const;
