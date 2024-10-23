import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNodeJs, FaGit, FaPhp, FaLaravel, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiFigma, SiMongodb, SiRedux, SiExpress, SiNextdotjs } from "react-icons/si";
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
    title: "Full Stack Developer",
    location: "Bengaluru, Karnataka",
    description:
      "I worked as a full-stack developer for 1+ years in 1 job.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Bengaluru, Karnataka",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Node Js, Express Js, MongoDB, React Native, TypeScript, Electron Js, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blood Test Service Hub ",
    description:
    "Developed an online platform for a client to streamline blood test scheduling, management, and report delivery, including a comprehensive admin panel for operational oversight. Live: https://fortunebloodtest.com",
    tags: ["React", "Node Js", "Express Js","MongoDB", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-Commerce",
    description:
    "Crafted a client-specific e-commerce site with an intuitive admin panel, streamlining the management of products and orders.",
    tags: ["React", "Node Js", "Express Js","MongoDB", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Desktop App",
    description:
    "Developed a desktop application to efficiently manage an enterprise's internal database, enhancing their operational capabilities.",
    tags: ["Electron Js","React Js","Typescript", "MongoDB", "Electron Builder", "IPC"],
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
    tags: ["React", "Node Js", "Express Js","MongoDB", "Redux"],
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
