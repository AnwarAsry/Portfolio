import { Project } from "@models/Project"
import { ProjectsPresentation } from "./ProjectsPresentation"
import { SectionTitle } from "@components/SectionTitle"

interface IProjectsSectionProps {
    title: string
    projects: Project[]
}

export const ProjectsSection = ({ title, projects }: IProjectsSectionProps) => {
    return <>
        <section className="flex flex-col gap-6 sm:gap-7">
            <SectionTitle title={title} />
            <ProjectsPresentation projects={projects} />
        </section>
    </>
}