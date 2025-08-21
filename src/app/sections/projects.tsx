
import ProjectContainer from "@/components/ProjectContainer"
import TechUsed from "@/components/techUsed";

export default function Projects(){
    return(
        <section id="projects" className="pt-[10vh] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                <ProjectContainer 
                    title="Portfolio Website"
                    description="A responsive portfolio website built with Next.js and TypeScript, with ios26-inspired glassmorphism components."
                    link="https://github.com/stev-jz/website"
                    tags={["Next.js", "TypeScript", "Tailwind CSS", "React", "HTML (JSX)"]}
                    projectImage={<img src="/s logo.png" className="w-[60%]" alt="Portfolio logo"/>}>
                </ProjectContainer>
            </div>

            {/*the footer */}
            <div className=" pl-5 mt-40 mb-15 text-left text-black/60 dark:text-gray-400">
                <p className=" tracking-tight font-light text-[2.1vh] leading-relaxed w-[70%] ">
                    Designed and coded in{' '}
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