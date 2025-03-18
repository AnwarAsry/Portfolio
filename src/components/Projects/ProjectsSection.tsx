import { Project } from "@models/Project"
import { ProjectCard } from "./ProjectCard"

interface IProjectsSectionProps {
    title: string
    projects: Project[]
}

export const ProjectsSection = ({ title, projects }: IProjectsSectionProps) => {
    return <>
        <section>
            <h3 className="mb-12 text-4xl font-bold tracking-tight text-gray-800 text-center">{title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
                {
                    projects.map(project => {
                        return <ProjectCard key={project.id} project={project} />
                    })
                }
            </div>
        </section>
    </>
}