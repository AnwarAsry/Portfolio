import { Project } from "@models/Project"
import { ProjectCard } from "./ProjectCard"

interface IProjectsSectionProps {
    title: string
    projects: Project[]
}

export const ProjectsSection = ({ title, projects }: IProjectsSectionProps) => {
    return <>
        <section className="w-fit mx-auto">
            <h3 className="mb-8 text-4xl font-bold tracking-tight text-[#f2f3f2] text-center">{title}</h3>
            <div className="grid grid-cols-1 gap-8 justify-center">
                {
                    projects.map(project => {
                        return <ProjectCard key={project.id} project={project} />
                    })
                }
            </div>
        </section>
    </>
}