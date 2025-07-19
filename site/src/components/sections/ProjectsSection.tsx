import GlassContainer from "../GlassContainer";

export default function ProjectsSection(){
    return(
        <div>
            <h1 className="opacity-80 mt-12 mb-6 text-xl text-white font-semibold">
                Projects
            </h1>
            <GlassContainer 
                date="SEP 2024 — PRESENT"
                title="Portfolio Website"
                description="This website. Inspiration from iOS26."
                link="https://www.ece.utoronto.ca/"
                tags={["TypeScript", "Next.js", "Tailwind", "CSS", "HTML", ]}>
            </GlassContainer><GlassContainer 
                date="SEP 2024 — PRESENT"
                title="WebWave"
                description=""
                link="https://www.ece.utoronto.ca/">
            </GlassContainer>
            <GlassContainer 
                date="SEP 2024 — PRESENT"
                title="tvAnswers AI"
                description=""
                link="https://www.ece.utoronto.ca/">
            </GlassContainer>
        </div>
    )
}