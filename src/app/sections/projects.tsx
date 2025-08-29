'use client';
import ProjectContainer from "@/components/ProjectContainer"
import TechUsed from "@/components/techUsed";
import { useTheme } from "next-themes";

function ThemeAwareImage() {
  const { theme } = useTheme();
  
  return (
    <img 
      src={theme === 'dark' ? "/personal-website-image.png" : "/personal-website-image-dark.png"} 
      className="w-[100%]" 
      alt="Portfolio image" 
      loading="lazy"
    />
  );
}

export default function Projects(){
    return(
        <section id="projects" className="pt-[10vh] w-full max-lg:px-4 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-y-6 max-lg:gap-y-2 max-lg:grid-cols-1 max-lg:place-items-center max-lg:w-full items-stretch">
                <ProjectContainer 
                    title="Portfolio Website"
                    description="A responsive portfolio website built with Next.js and TypeScript, with ios26-inspired glassmorphism components."
                    link="https://github.com/stev-jz/website"
                    tags={["Next.js", "TypeScript", "Tailwind CSS", "React", "HTML (JSX)"]}
                    projectImage={<ThemeAwareImage />}>
                </ProjectContainer>
                <ProjectContainer 
                    title="Syllabus Tracker AI"
                    description="A personal dashboard tool to track important course information (grading, exam dates, etc.). AI-powered using Gemini API to extract syllabus information from PDFs."
                    link="https://github.com/stev-jz/syllabus-tracker"
                    tags={["Next.js", "TypeScript", "Tailwind CSS", "React", "HTML (JSX)", "Gemini API"]}
                    projectImage={<img src="/syllabus-tracker-image.png" className="w-[100%]" alt="Syllabus Tracker AI" loading="lazy"/>}>
                </ProjectContainer>
            </div>

            {/*the footer */}
            <div className="lg:pl-3 max-lg:px-4 mt-40 mb-10 text-left text-black/60 dark:text-gray-400">
                <p className=" tracking-tight font-light lg:text-[2.1vh] max-lg:text-[3.2vw] leading-relaxed lg:w-[70%] max-lg:w-full ">
                    Developed and designed in{' '}
                    <TechUsed href="https://code.visualstudio.com/">
                    Visual Studio Code
                    </TechUsed>
                    {' '}by Steven Zhang. Built with{' '}
                    <TechUsed href="https://nextjs.org/">
                    Next.js
                    </TechUsed>
                    {' '}and{' '}
                    <TechUsed href="https://tailwindcss.com/">
                    Tailwind CSS
                    </TechUsed>
                    , deployed with{' '}
                    <TechUsed href="https://vercel.com/">
                    Vercel
                    </TechUsed>
                    . All text is set in the{' '}
                    <TechUsed href="https://fonts.google.com/specimen/Inter">
                    Inter
                    </TechUsed>
                    {' '}typeface.
                </p>
            </div>
        </section>
    );
}