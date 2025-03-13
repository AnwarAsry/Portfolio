import { Project } from "@models/Project";
import { ProjectCard } from "./ProjectCard"

interface IChildProps {
    projects: Project[];
}

export const ProjectsPresentation = ({ projects }: IChildProps) => {

    return <>
        <div className="h-fit flex flex-col gap-6">
            {
                projects.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })
            }
        </div>
    </>
}