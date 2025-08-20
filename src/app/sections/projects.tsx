
import ProjectContainer from "@/components/ProjectContainer"

export default function Projects(){
    return(
        <section id="projects" className="pt-[10vh] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                <ProjectContainer 
                    title="Portfolio Website"
                    description="A modern, responsive portfolio website built with Next.js and TypeScript, featuring glass morphism design and smooth animations."
                    link="https://github.com/yourusername/portfolio"
                    tags={["Next.js", "TypeScript", "Tailwind CSS", "React"]}
                    projectImage={<img src="/s logo.png" width={75} alt="Portfolio logo"/>}>
                </ProjectContainer>
                
                <ProjectContainer 
                    title="E-Commerce Platform"
                    description="A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard."
                    link="https://github.com/yourusername/ecommerce"
                    tags={["React", "Node.js", "MongoDB", "Stripe"]}
                    projectImage={<img src="/placeholder_pfp.jpg" width={75} alt="E-commerce project"/>}>
                </ProjectContainer>
                
                <ProjectContainer 
                    title="Task Management App"
                    description="A collaborative task management application with real-time updates and team collaboration features."
                    link="https://github.com/yourusername/taskmanager"
                    tags={["Vue.js", "Express", "Socket.io", "PostgreSQL"]}
                    projectImage={<img src="/placeholder_pfp.jpg" width={75} alt="Task manager project"/>}>
                </ProjectContainer>
                
                <ProjectContainer 
                    title="Weather Dashboard"
                    description="A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities."
                    link="https://github.com/yourusername/weather-dashboard"
                    tags={["JavaScript", "CSS3", "Weather API", "Chart.js"]}
                    projectImage={<img src="/placeholder_pfp.jpg" width={75} alt="Weather dashboard project"/>}>
                </ProjectContainer>
                
                <ProjectContainer 
                    title="Machine Learning Model"
                    description="A predictive model for analyzing market trends using machine learning algorithms and data visualization."
                    link="https://github.com/yourusername/ml-model"
                    tags={["Python", "TensorFlow", "Pandas", "Matplotlib"]}
                    projectImage={<img src="/placeholder_pfp.jpg" width={75} alt="ML project"/>}>
                </ProjectContainer>
                
                <ProjectContainer 
                    title="Mobile Fitness App"
                    description="A cross-platform mobile application for tracking fitness goals, workouts, and health metrics."
                    link="https://github.com/yourusername/fitness-app"
                    tags={["React Native", "Firebase", "Redux", "Expo"]}
                    projectImage={<img src="/placeholder_pfp.jpg" width={75} alt="Fitness app project"/>}>
                </ProjectContainer>
            </div>
        </section>
    );
}