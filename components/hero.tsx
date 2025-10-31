"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [backgroundSize, setBackgroundSize] = useState("90vw auto");
  const [backgroundPosition, setBackgroundPosition] = useState("50% 30%");

  useEffect(() => {
    const updatePosition = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width >= 1024) {
        // Desktop
        setBackgroundPosition("50% 30%");
      } else if (width >= 768) {
        // Tablet
        setBackgroundPosition("50% 30%");
      } else {
        // Mobile
        setBackgroundPosition("50% 10%");
      }
    };

    const updateSize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        // Desktop
        setBackgroundSize("30vw auto");
      } else if (width >= 768) {
        // Tablet
        setBackgroundSize("60vw auto");
      } else {
        // Mobile
        setBackgroundSize("90vw auto");
      }
    };

    updateSize(); // initial run
    updatePosition(); // initial run
    window.addEventListener("resize", updateSize);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <section>
      <section
        id="text-background"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 flex flex-col justify-center opacity-50 -translate-y-[9%] lg:-translate-y-[15%]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`marquee-track ${i % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="marquee-inner">
                <div className="marquee-group">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <span key={j} className="text-[#3d393b]">
                      Backend Full Stack Developer-Backend Full Stack
                      Developer-Backend Full Stack Developer-Backend Full Stack
                      Developer-Backend Full Stack Developer-
                    </span>
                  ))}
                </div>

                {/* duplicate for seamless loop (aria-hidden) */}
                <div className="marquee-group" aria-hidden="true">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <span key={j} className="text-[#3d393b]">
                      Backend Full Stack Developer-Backend Full Stack
                      Developer-Backend Full Stack Developer-Backend Full Stack
                      Developer-Backend Full Stack Developer-
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
    .marquee-track {
      width: 100%;
      overflow: hidden;
    }

    .marquee-inner {
      display: flex;
      width: 200%;
      align-items: center;
      /* animate the inner wrapper */
      animation: marquee-left 18s linear infinite;
    }

    .marquee-group {
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      white-space: nowrap;
      font-size: 2rem;
    }

    .marquee-track.reverse .marquee-inner {
      animation: marquee-right 22s linear infinite;
    }

    @keyframes marquee-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    @keyframes marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
  `}</style>
      </section>

      <section className="relative flex items-center justify-center min-h-[85vh] md:min-h-screen text-center">
        {/* Background image sized relative to viewport width (60vw) and positioned slightly up */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url('/hero-new.png')",
            backgroundSize,
            backgroundPosition,
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-20 p-8 rounded-lg max-w-screen mx-auto translate-y-[50%] lg:translate-y-[45%] flex flex-col items-center justify-center bg-white/70 md:bg-transparent">
          <h1 className="md:text-8xl text-[1.8rem] font-bold text-[#222222] mb-2 text-center font-sans">
            M. Ulinuha As Shiddiqy
          </h1>
          <p className="text-black text-shadow-lg sm:text-md lg:text-4xl font-bold pb-2 pt-2 text-center md:bg-linear-to-r from-[f4f4f4] via-white/40 to-[f4f4f4] rounded-t-lg px-3">
            Full Stack Developer - Backend specialist
          </p>
          <p className="text-black sm:text-xs lg:text-2xl md:w-3/4 text-center md:bg-linear-to-r from-[f4f4f4] via-white/40 to-[f4f4f4] rounded-lg px-3">Saya adalah seorang BackEnd Developer yang bersemangat dan berdedikasi dengan pengalaman dalam menciptakan solusi digital yang inovatif dan ramah pengguna. Saya selalu antusias untuk belajar dan berkolaborasi dalam proyek-proyek yang berdampak.</p>
        </div>
      </section>
    </section>
  );
}
