"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center text-lg text-gray-300 hover:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center hover:text-white transition duration-300"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <skill.icon className="text-4xl mb-2 hover:scale-110 transition duration-300" />
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
