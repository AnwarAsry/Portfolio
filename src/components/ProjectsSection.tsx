import { Project } from "@/models/Project"
import { ProjectsPresentation } from "./Projects/ProjectsPresentation"

interface IProjectsSectionProps {
    title: string
    projects: Project[]
}

export const ProjectsSection = ({ title, projects }: IProjectsSectionProps) => {
    return <>
        <section className="projectsSection">
            <div className="sectionTitle">
                <h3>{title}</h3>
                <hr />
            </div>
            <ProjectsPresentation projects={projects} />
        </section>
    </>
}