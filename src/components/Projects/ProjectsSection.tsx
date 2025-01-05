import ProjectStyles from "@styles/Projects.module.scss"
import { Project } from "@models/Project"
import { ProjectsPresentation } from "./ProjectsPresentation"
import { SectionTitle } from "@components/SectionTitle"

interface IProjectsSectionProps {
    title: string
    projects: Project[]
}

export const ProjectsSection = ({ title, projects }: IProjectsSectionProps) => {
    return <>
        <section className={ProjectStyles.ProjectSection}>
            <SectionTitle title={title} />
            <ProjectsPresentation projects={projects} />
        </section>
    </>
}