import { Project } from "@models/Project";
import { ProjectCard } from "./ProjectCard"

interface IChildProps {
    projects: Project[];
}

export const ProjectsPresentation = ({ projects }: IChildProps) => {

    return <>
        <div className="grid grid-cols-[grid-template-columns:minmax(18rem,67rem)] gap-8 justify-center">
            {
                projects.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })
            }
        </div>
    </>
}