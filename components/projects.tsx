"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Freelance Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
        ...and many more! Feel free to check out my other projects on my{" "}
        <a href="https://github.com/rangachimalgi" target="_blank" className="text-blue-600 dark:text-blue-400 underline">
          GitHub
        </a>.
      </p>

    </section>
  );
}
