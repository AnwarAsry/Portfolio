import { Project } from "@models/Project";
import { ProjectCard } from "./ProjectCard"

interface IChildProps {
    projects: Project[];
}

export const ProjectsPresentation = ({ projects }: IChildProps) => {

    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
            {
                projects.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })
            }
        </div>
    </>
}