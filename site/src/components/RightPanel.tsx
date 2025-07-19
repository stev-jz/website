import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function RightPanel(){
    return(
        <aside className="pt-20">
            <ExperienceSection></ExperienceSection>
            <ProjectsSection></ProjectsSection>
            <EducationSection></EducationSection>


        </aside>
    );
}