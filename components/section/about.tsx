"use client";

import { useEffect, useState } from "react";
import { skills } from "@/lib/data";
import { Skill } from "../ui/skill";

export default function About() {
  const [backgroundSize, setBackgroundSize] = useState("30vw auto");
  const [backgroundPosition, setBackgroundPosition] = useState("90% 5%");

  useEffect(() => {
    const updatePosition = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width >= 1024) {
        // Desktop
        setBackgroundPosition("55% 100%");
      } else if (width >= 768) {
        // Tablet
        setBackgroundPosition("55% 100%");
      } else {
        // Mobile
        setBackgroundPosition("90% 5%");
      }
    };

    const updateSize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        // Desktop
        setBackgroundSize("25vw auto");
      } else if (width >= 768) {
        // Tablet
        setBackgroundSize("40vw auto");
      } else {
        // Mobile
        setBackgroundSize("30vw auto");
      }
    };

    updateSize(); // initial run
    updatePosition(); // initial run
    window.addEventListener("resize", updatePosition);
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <section id="about" className="lg:py-20 py-5 bg-white relative lg:h-screen">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url('/about.png')",
          backgroundSize,
          backgroundPosition,
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="grid grid-cols-15 md:grid-cols-3 md:gap-8 z-20 container mx-auto px-4 lg:h-[90vh]">
        <div className="md:col-span-2 col-span-7">
          <h2 className=" text-3xl md:text-5xl font-[HeadingNow] text-[#222222]">
            About Me
          </h2>
          <h2 className="font-[HeadingNow] text-3xl md:text-8xl md:mt-8 md:ml-[10%] text-[#8c6350] font-bold">
            M. Ulinuha
          </h2>
          <h2 className="font-[HeadingNow] text-3xl md:text-8xl md:mb-8 md:ml-[10%] text-[#8c6350] font-bold">
            As Shiddiqy
          </h2>
          <div className="w-3/5">
            <div className="mb-2 md:mb-7">
              <h1 className="font-[HeadingNow] md:text-5xl text-black">
                TechStack
              </h1>
              <hr />
            </div>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <Skill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-1 col-span-8">
          <div className="container mx-auto lg:mt-8 mt-[100%]">
            <div className="max-w-3xl mx-auto text-xs md:text-xl text-[#3d393b] leading-relaxed">
              <p className="lg:mb-6 mb-1 md:text-left text-right">
                Hello! I'm M. Ulinuha As Shiddiqy, a passionate Backend Full
                Stack Developer with a knack for creating efficient and scalable
                web applications. With a strong foundation in server-side
                technologies and databases, I specialize in building robust
                backends that power seamless user experiences.
              </p>
              <p className="lg:mb-6 mb-1 md:text-left text-right">
                My journey into web development began several years ago, and
                since then, I've honed my skills in various programming
                languages and frameworks. I thrive on solving complex problems
                and am always eager to learn new technologies that can enhance
                my development toolkit.
              </p>
              <p className="lg:mb-6 md:text-left text-right">
                When I'm not coding, you can find me exploring the latest tech
                trends, contributing to open-source projects, or enjoying a good
                book. I'm excited to connect with like-minded professionals and
                collaborate on innovative projects that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
