import React from "react";
import { StaticImageData } from "next/image";
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
    title: "Frontend Engineer – Patientry AI",
    location: "Remote",
    description:
      "Built the React frontend for a healthcare management platform — patient, doctor, and appointment workflows across 20+ views, an analytics dashboard with Recharts and Leaflet, and a doctor consultation module with in-browser audio recording integrated with REST APIs for AI-generated visit summaries.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
  {
    title: "Independent Software Consultant",
    location: "Remote",
    description:
      "Consulted for businesses to design and ship full-stack products across healthcare, on-demand services, and retail — including Woosh, a car wash platform, and a fashion ecommerce and POS system.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Full Stack Developer – Customer XPS",
    location: "Bengaluru, Karnataka",
    description:
      "Started as a backend developer using Java + Spring Boot, then moved to frontend with React.js, working on internal fintech tools and dashboards.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
 
  {
    title: "Full Stack Engineer – ParNets Group",
    location: "Bengaluru, Karnataka",
    description:
      "Developed and deployed mobile/web apps for SMEs using React Native, React.js, Node.js, and MongoDB. Worked on end-to-end features, custom APIs, and direct client communication.",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
  
] as const;

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  githubUrl?: string;
  liveUrl?: string;
};

export const projectsData = [
  {
    title: "Woosh — Car Wash Platform",
    description:
      "End-to-end platform for on-demand car and bike wash services — three apps on one shared backend. Customers book slots and pay via Razorpay, employees get assigned jobs with live tracking and attendance, and admins manage operations from a web dashboard. Built to handle the full service lifecycle, not just the booking flow.",
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "AWS S3",
    ],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/rangachimalgi/car-wash",
  },
  {
    title: "Patientry — Healthcare Management Platform",
    description:
      "Built the frontend for a hospital management web app that lets clinicians manage patients, appointments, and doctors from a single dashboard. Delivered interactive analytics, CRUD flows for core entities, and a consultation workflow with in-browser audio recording that feeds AI-generated visit summaries via REST APIs.",
    tags: [
      "React",
      "Vite",
      "Recharts",
      "Leaflet",
      "Axios",
      "Framer Motion",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Fashion Ecommerce & POS",
    description:
      "Building a fashion retail platform with a customer-facing ecommerce storefront and an in-store POS billing desk on a shared Next.js app. Product catalog with size/color variants, cart and checkout, plus counter sales with cash and UPI — all synced through Supabase. Customer mobile app in development.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "Zustand",
    ],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/rangachimalgi/fashion-pos-ecom",
  },
  {
    title: "Blood Test Service Hub",
    description:
      "Online platform for a client to streamline blood test scheduling, management, and report delivery, including a comprehensive admin panel for operational oversight.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    imageUrl: corpcommentImg,
    liveUrl: "https://fortunebloodtest.com",
  },
] satisfies readonly Project[];

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
