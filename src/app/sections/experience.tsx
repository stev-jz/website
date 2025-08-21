import GlassContainer from "@/components/GlassContainer"
import Link from "next/link"

export default function Experience(){
    return(
        <section id="experience" className="pt-[10vh] w-full relative space-y-4">
                <GlassContainer 
                    date="MAY — AUG 2025"
                    title="Software Engineering Intern ‧ Skynet Systems"
                    description="Work in Progress."
                    link="https://www.skynetsystems.ca/"
                    projectImage={<img src="/skynetlogo.png" className="size-full" alt="Skynet logo"/>}>
                </GlassContainer>
                <GlassContainer 
                    date="JULY 2025 — PRESENT"
                    title="Front End Developer ‧ EWB UofT"
                    description="Work in Progress."
                    link="https://uoft.ewb.ca/"
                    tags={["TypeScript", "Next.js", "React", "Tailwind CSS", "HTML (JSX)"]}
                    projectImage={<img className="rounded-md size-full" src="/EWB-logo.png" alt="EWB logo"/>}>
                </GlassContainer>
                <GlassContainer 
                    date="JULY — AUG 2023"
                    title="ML Instructor ‧ UBC Geering Up"
                    description="Junior Instructor for UBC Geering Up&apos;s Intro to Machine Learning camp, where I taught 30+ campers the fundamentals of training datasets and building simple models. Guided them through a project using Pokémon images as training data to introduce core ML concepts."
                    link="https://geeringup.apsc.ubc.ca/"
                    tags={["Python", "NumPy", "Pandas", "Git", "GitHub"]}
                    projectImage={<img src="/Geering-up-logo.png" className=" size-full rounded-full" alt="Geering Up logo"/>}>
                </GlassContainer>
        </section>
    )
}