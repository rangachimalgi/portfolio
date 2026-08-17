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
      <p>
        I'm a fullstack engineer who’s shipped real-world products across healthtech, on-demand services, and retail. At <span className="font-medium">Patientry AI</span>, I built the React frontend for a healthcare management platform with analytics, patient/doctor workflows, and AI-assisted visit documentation. I also shipped <span className="font-medium">Woosh</span>, a car wash platform, and I'm building a <span className="font-medium">fashion ecommerce and POS platform</span>. I started in fintech at Customer XPS, then worked as an independent software consultant building products end to end. I work with <span className="font-medium">React, Node.js, TypeScript</span>, and <span className="font-medium">React Native</span>. Open to a <span className="font-medium">full-time role</span> where I can bring product experience and speed to a sharp team.
      </p>

    </motion.section>
  );
}
