'use client';
import Experience from "@/app/sections/experience";
import About from "@/app/sections/about";
import Projects from "@/app/sections/projects";
import CompactExperienceItem from "./CompactExperienceItem";
import CompactProjectItem from "./CompactProjectItem";
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import { useBackgroundContrast } from "@/lib/useBackgroundContrast";

// Theme-aware image for portfolio project
function ThemeAwarePortfolioImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <img src="/personal-website-image.png" className="w-full h-full object-cover" alt="Portfolio" loading="lazy" />;
  }
  
  return (
    <img 
      src={resolvedTheme === 'dark' ? "/personal-website-image.png" : "/personal-website-image-dark.png"} 
      className="w-full h-full object-cover" 
      alt="Portfolio" 
      loading="lazy"
    />
  );
}

// Compact view for lg screens - everything in one glass container
function CompactView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textMode = useBackgroundContrast(containerRef);
  
  // Dynamic text color classes based on background
  const isLight = textMode === 'light'; // light text for dark bg
  
  const textMuted = isLight ? 'text-white/90' : 'text-gray-700';
  const dividerVia = isLight ? 'via-white/30' : 'via-gray-600/40';
  const textShadow = isLight ? 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]' : 'drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]';

  return (
    <div className="w-full h-full flex flex-col items-center pt-[18vh] pb-20">
      <div className="flex w-full">
        <div className="flex-1"></div>
        <div 
          ref={containerRef}
          className="
            w-[clamp(45vw,55vw,60vw)]
            rounded-2xl overflow-hidden
            border-t border-t-white/30
            bg-white/10 backdrop-blur-xl
            shadow-[0_10px_20px_rgba(0,0,0,0.25)]
            p-6
            transition-colors duration-300
          "
        >
          {/* Projects Section */}
          <div className="mb-6">
            <h2 className={`text-[15px] font-normal uppercase tracking-wider ${textMuted} ${textShadow} mb-3 px-1 transition-colors duration-300`}>
              Projects
            </h2>
            <div className="grid grid-cols-2 gap-3 items-start">
            <CompactProjectItem
              title="Tech Stack Crawler"
              description="Scrapes tech job postings from GitHub and extracts tech stack information using AI."
              link="https://github.com/stev-jz/tech-stack-crawler"
              tags={["Python", "PostgreSQL", "Gemini API", "asyncio"]}
              projectImage={<img src="/Crawler-png.png" className="w-full h-full object-cover" alt="Tech Stack Crawler" loading="lazy"/>}
              textMode={textMode}
            />
            <CompactProjectItem
              title="FPGA Dino Jump"
              description="A 2D platformer game built on DE1-SoC FPGA with VGA display and custom game logic."
              tags={["Verilog", "DE1-SoC FPGA", "ModelSim"]}
              projectImage={<img src="/fpga-game.png" className="w-full h-full object-cover" alt="FPGA Dino Jump" loading="lazy"/>}
              textMode={textMode}
            />
            <CompactProjectItem
              title="Syllabus Tracker AI"
              description="Dashboard to track course information. Uses AI to extract syllabus data from PDFs."
              link="https://github.com/stev-jz/syllabus-tracker"
              tags={["SQLite", "Prisma", "Next.js", "TypeScript", "Gemini API"]}
              projectImage={<img src="/syllabus-tracker-image.png" className="w-full h-full object-cover" alt="Syllabus Tracker AI" loading="lazy"/>}
              textMode={textMode}
            />
            <CompactProjectItem
              title="Web Music Streamer"
              description="Audio streaming app with YouTube-to-MP3 conversion and real-time playback controls."
              link="https://github.com/stev-jz/WebWave"
              tags={["TypeScript", "Next.js", "Supabase", "HTML5 Audio API"]}
              projectImage={<img src="/WebWave.png" className="w-full h-full object-cover" alt="Web Music Streamer" loading="lazy"/>}
              textMode={textMode}
            />
            <CompactProjectItem
              title="Portfolio Website"
              description="Responsive portfolio website with glassmorphism design."
              link="https://github.com/stev-jz/website"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "React"]}
              projectImage={<ThemeAwarePortfolioImage />}
              textMode={textMode}
            />
          </div>
          </div>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r from-transparent ${dividerVia} to-transparent my-6 transition-colors duration-300`} />

          {/* Experience Section */}
          <div className="mb-6">
            <h2 className={`text-[15px] font-normal uppercase tracking-wider ${textMuted} ${textShadow} mb-3 px-1 transition-colors duration-300`}>
              Experience
            </h2>
            <div className="flex flex-col -mx-1 space-y-1">
            <CompactExperienceItem
              date="SEPT 2025 — PRESENT"
              title={<>EWB UofT, <em>Web Developer Project Lead</em></>}
              description="Project lead for a Next.js food-info website serving students at University of Toronto. Integrated Google Maps API for location-based features."
              link="https://uoft.ewb.ca/"
              tags={["Next.js", "React", "TypeScript", "Google Maps API"]}
              projectImage={<img className="rounded-md size-full object-contain" src="/EWB-logo.png" alt="EWB logo" loading="lazy"/>}
              textMode={textMode}
            />
            <CompactExperienceItem
              date="MAY — AUG 2025"
              title={<>Skynet Security System, <em>Software Developer</em></>}
              description="Built React admin dashboard for tracking technician jobs. Implemented JWT authentication and automated invoice system."
              link="https://www.skynetsystems.ca/"
              tags={["React", "TypeScript", "JWT", "Node.js", "Prisma"]}
              projectImage={<img src="/skynetlogo.png" className="size-full object-contain" alt="Skynet logo" loading="lazy"/>}
              textMode={textMode}
            />
            <CompactExperienceItem
              date="JULY — AUG 2023"
              title={<>UBC Engineering Outreach, <em>Coding and ML Instructor</em></>}
              description="Developed and delivered ML tutorials and STEM activities in Python using pandas and NumPy."
              link="https://geeringup.apsc.ubc.ca/"
              tags={["Python", "pandas", "NumPy"]}
              projectImage={<img src="/Geering-up-logo.png" className="size-full rounded-full object-contain" alt="Geering Up logo" loading="lazy"/>}
              textMode={textMode}
            />
            </div>
          </div>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r from-transparent ${dividerVia} to-transparent my-6 transition-colors duration-300`} />

          {/* Skills Section */}
          <div>
            <h2 className={`text-[15px] font-normal uppercase tracking-wider ${textMuted} ${textShadow} mb-3 px-1 transition-colors duration-300`}>
              Skills
            </h2>
            <div className="px-1 space-y-2">
              {[
                { label: "Languages", skills: ["C", "C++", "Python", "TypeScript", "JavaScript"] },
                { label: "Full-Stack", skills: ["Next.js", "React", "REST APIs", "PostgreSQL", "Prisma", "Supabase"] },
                { label: "Hardware", skills: ["Verilog", "DE1-SoC FPGA", "ModelSim", "Quartus Prime"] },
                { label: "AI & Data", skills: ["Gemini API", "Whisper", "pandas", "NumPy"] },
              ].map((category) => (
                <div key={category.label} className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  <span className={`text-[11px] ${textMuted} ${textShadow} font-medium shrink-0 mr-0.5`}>{category.label}:</span>
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`text-[11px] px-2 py-0.5 rounded-full ${isLight ? 'bg-white/15 text-white/80' : 'bg-white/30 text-gray-800'} ${textShadow} font-medium transition-colors duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      
      {/* Footer */}
      <p className={`text-[13px] mt-8 mb-16 ${textMuted} ${textShadow} opacity-70 text-center transition-colors duration-300`}>
        Designed in Figma, coded in VS Code, built with Next.js & Tailwind CSS, deployed on Vercel by Steven Zhang, 2026
      </p>
    </div>
  );
}

export default function RightPanel(){
    return(
<div
  id="right-panel"
  className="
    container-type-inline flex flex-col items-center
    lg:overflow-y-auto overflow-visible
    lg:h-screen scroll-smooth
    pb-[30vh] lg:pb-0  
        lg:px-[clamp(3vw,5vw,6vw)]
      "
    >
      {/* Compact view for lg screens */}
      <div className="hidden lg:block w-full h-full">
        <CompactView />
      </div>

      {/* Original expanded view for mobile */}
      <div className="lg:hidden w-full">
  <div className="lg:w-[clamp(30vw,80cqw,45vw)]">
    <section id="about" className="min-h-[85vh] pt-[5vh]"><About/></section>
    <section id="experience" className="min-h-[85vh] pt-[10vh]"><Experience/></section>
    <section id="projects" className="min-h-[85vh] pt-[10vh]"><Projects/></section>
        </div>
  </div>
</div>
    );
}
