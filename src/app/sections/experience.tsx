import GlassContainer from "@/components/GlassContainer"
import Link from "next/link"

export default function Experience(){
    return(
        <section id="experience" className="lg:pt-[10vh] max-lg:pt-[1vh] w-full relative lg:space-y-4 max-lg:px-4 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-2">
                <GlassContainer 
                    date="MAY — AUG 2025"
                    title="Software Engineering Intern ‧ Skynet Systems"
                    description="Work in Progress."
                    link="https://www.skynetsystems.ca/"
                    projectImage={<img src="/skynetlogo.png" className="size-full" alt="Skynet logo" loading="lazy"/>}>
                </GlassContainer>
                <GlassContainer 
                    date="JULY 2025 — PRESENT"
                    title="Frontend Developer ‧ EWB UofT"
                    description="Work in Progress."
                    link="https://uoft.ewb.ca/"
                    tags={["TypeScript", "Next.js", "React", "Tailwind CSS", "HTML (JSX)"]}
                    projectImage={<img className="rounded-md size-full" src="/EWB-logo.png" alt="EWB logo" loading="lazy"/>}>
                </GlassContainer>
                <GlassContainer 
                    date="JULY — AUG 2023"
                    title="ML Instructor ‧ UBC Geering Up"
                    description="Junior Instructor for UBC Geering Up&apos;s Intro to Machine Learning camp, where I taught 30+ campers the fundamentals of training datasets and building simple models. Guided them through a project using Pokémon images as training data to introduce core ML concepts."
                    link="https://geeringup.apsc.ubc.ca/"
                    tags={["Python", "NumPy", "Pandas", "Git", "GitHub"]}
                    projectImage={<img src="/Geering-up-logo.png" className=" size-full rounded-full" alt="Geering Up logo" loading="lazy"/>}>
                </GlassContainer>
                
                {/* Resume Link */}
                <div className="container-type-inline lg:flex lg:justify-start max-lg:w-[80vw] max-lg:mx-auto mt-8 max-lg:mt-6">
                    <Link 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            inline-flex items-center
                            transition-colors duration-100 ease-out
                            max-lg:text-[clamp(12px,3vw,20px)] text-[clamp(1.4vh,2.6cqw,2.3vh)] font-[500] text-gray-900 dark:text-white/70
                            hover:text-blue-700/80 dark:hover:text-blue-600/80
                        "
                    >
                        View Resume
                        <span className="inline-block transform transition-all duration-200 ease-out rotate-315 opacity-55 max-lg:text-[clamp(12px,3vw,20px)] text-[clamp(1.4vh,2.6cqw,2.3vh)] group-hover:opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-500 font-medium ml-1.5">
                            -&gt;
                        </span>
                    </Link>
                </div>
        </section>
    )
}