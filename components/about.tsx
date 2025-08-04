"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
  <p className="mb-3">
  I'm a fullstack engineer who’s shipped <span className="font-medium">7+ real-world projects</span> across healthtech, real estate, and events. I started my career in fintech at Customer XPS, then moved into freelancing, and now I’m building internal tools and dashboards at <span className="font-medium">Patientry AI</span>, a healthtech startup. I love working fast, keeping the UX clean, and figuring out messy problems with <span className="font-medium">React, Node.js, TypeScript</span>, and <span className="font-medium">React Native</span>. I'm currently open to a <span className="font-medium">full-time role</span> where I can bring real-world product experience and speed to a sharp engineering team.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I’m probably on a badminton court or vibing to hip hop.
</p>


    </motion.section>
  );
}
