"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";
import { Project } from "@/components/ui/project";

export default function ProjectSection() {
  return (
    <section id="projects" className="md:py-20 py-5 bg-[#f2efef] flex items-center min-h-screen h-full">
      <div className="grid grid-cols-12 container mx-auto gap-4">
        <div className="col-span-4 row-span-3 flex flex-col justify-center border-black/50 border-r-5 border-b-5 rounded-lg pr-4">
          <h2 className="text-8xl font-bold font-['HeadingNowHeavyItalic'] text-[#8c6350]">
            Personal
          </h2>
          <h2 className="text-3xl font-bold  mb-5 font-['HeadingNow'] text-[#8c6350]">
            Projects
          </h2>
          <div>
            <h3 className="text-3xl mb-2 font-bold font-['HeadingNow'] text-[#44332b]">Github Streak</h3>
            <img
              src="https://streak-stats.demolab.com/?user=Lin1er&theme=dracula"
              alt="Github Streaks"
              className="pb-4"
            />
          </div>
        </div>
        {projects.map((project) => (
          <div key={project.title} className="p-4 col-span-4">
            <Project
              title={project.title}
              description={project.description.length > 70 ? project.description.slice(0, 70) + '...' : project.description}
              link={project.link}
              imageId={project.imageId}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
