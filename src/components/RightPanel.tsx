import Experience from "@/app/sections/experience";
import About from "@/app/sections/about";
import Projects from "@/app/sections/projects";


export default function RightPanel(){
    return(
        <div className="container-type-inline flex flex-col items-center">
            <div className="w-[clamp(30vw,80cqw,45vw)]">
                <About/>
                <Experience/>
                <Projects/>
            </div>
        </div>
    );
}