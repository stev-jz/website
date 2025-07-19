import GlassContainer from "../GlassContainer";

export default function ExperienceSection(){
    return(
        <div>
            <h1 className="opacity-80 mt-12 mb-6 text-xl text-white font-semibold">Experience</h1>
            <GlassContainer 
                date="MAY 2025 — PRESENT"
                title="Software Engineer Intern • Skynet Systems"
                description="blah blah blah"
                link="https://www.skynetsystems.ca/"
                tags={["Reactjs", "TypeScript", "Python"]}>
            </GlassContainer>
            <GlassContainer 
                date="JUL 2025 — PRESENT"
                title="Frontend Developer • EWB UofT"
                description=""
                link="https://www.skynetsystems.ca/"
                tags={["Reactjs", "TypeScript", "Python"]}>
            </GlassContainer>



        </div>
    )
}