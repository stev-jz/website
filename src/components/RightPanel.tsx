import Experience from "@/app/sections/experience";
import About from "@/app/sections/about";
import Projects from "@/app/sections/projects";


export default function RightPanel(){
    return(
<div
  id="right-panel"
  className="container-type-inline flex flex-col items-center overflow-y-auto h-screen scroll-smooth"
>
  <div className="w-[clamp(30vw,80cqw,45vw)]">
    <section id="about" className="min-h-[85vh] pt-[10vh]"><About/></section>
    <section id="experience" className="min-h-[85vh] pt-[10vh]"><Experience/></section>
    <section id="projects" className="min-h-[85vh] pt-[10vh]"><Projects/></section>
  </div>
</div>
    );
}