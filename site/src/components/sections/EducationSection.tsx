import GlassContainer from "../GlassContainer";

export default function EducationSection(){
    return(
        <div>
            <h1 className="opacity-80 mt-12 mb-6 text-xl text-white font-semibold">
                Education
            </h1>
            <GlassContainer 
                date="SEP 2024 — PRESENT"
                title="BASc, Computer Engineering • UofT"
                description="GPA: 3.86/4.00 Dean's Honours List. Relevant Courses: C, C++, Linear Algebra"
                link="https://www.ece.utoronto.ca/">
            </GlassContainer>
        </div>
    )
}