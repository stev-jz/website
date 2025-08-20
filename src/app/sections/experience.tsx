import GlassContainer from "@/components/GlassContainer"

export default function Experience(){
    return(
        <section id="experience" className="pt-[10vh] w-full relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[20vh] bottom-[10vh] w-[3px] bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-white/35 z-0"></div>
            
            <div className="relative z-10">
                <GlassContainer 
                    date="2024 — 2025"
                    title="Software Engineering Intern - Skynet Systems"
                    description="Work in Progress."
                    link="https://www.google.com/"
                    tags={["React", "TypeScript", "Next.js", "Tailwind", "CSS"]}
                    projectImage={<img src="/skynetlogo.png" width={75} alt="Skynet logo"/>}>
                </GlassContainer>
                <GlassContainer 
                    date="2024 — 2025"
                    title="Front end developer - EWB UofT Chapter"
                    description="Work in Progress."
                    link="https://www.google.com/"
                    tags={["React", "TypeScript", "Next.js", "Tailwind", "CSS"]}
                    projectImage={<img className="rounded-md" src="/EWB-logo.png" width={75} alt="EWB logo"/>}>
                </GlassContainer>
                <GlassContainer 
                    date="2024 — 2025"
                    title="Intro ML Instructor - UBC Geering Up Camps"
                    description="Work in Progress."
                    link="https://www.google.com/"
                    tags={["React", "TypeScript", "Next.js", "Tailwind", "CSS"]}
                    projectImage={<img src="/Geering-up-logo.png" width={75} alt="Geering Up logo"/>}>
                </GlassContainer>
            </div>
        </section>
    )
}