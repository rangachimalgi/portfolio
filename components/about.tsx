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
  I graduated with a degree in <span className="font-medium">Information Science</span> and started my career as a software engineer at Customer XPS, where I worked for over a year. I later transitioned into freelancing, developing websites, desktop, and mobile applications. My passion for programming is deeply rooted in <span className="italic">problem-solving</span>. I <span className="underline">love</span> deciphering complex challenges and finding solutions. My primary technologies are <span className="font-medium">React, Node.js, and MongoDB</span>, and I am skilled in TypeScript, React Native and Figma. I'm currently seeking a <span className="font-medium">full-time position</span> as a software developer, eager to bring my diverse skills to a dynamic team.
</p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Badminton, and Listening to Hip Hop{" "}
        
      </p>
    </motion.section>
  );
}
