import { Project } from "@models/Project"
import { ProjectsPresentation } from "./ProjectsPresentation"

interface IProjectsSectionProps {
    title: string
    projects: Project[]
}

export const ProjectsSection = ({ title, projects }: IProjectsSectionProps) => {
    return <>
        <section className="flex flex-col gap-6 sm:gap-7">
            <h3 className="text-4xl font-bold tracking-tight text-gray-800 text-center">{title}</h3>
            <ProjectsPresentation projects={projects} />
        </section>
    </>
}