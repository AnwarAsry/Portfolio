import ProjectStyles from "@styles/Projects.module.scss"
import { Project } from "@models/Project";
import { ProjectCard } from "./ProjectCard"

interface IChildProps {
    projects: Project[];
}

export const ProjectsPresentation = ({ projects }: IChildProps) => {

    return <>
        <div className={ProjectStyles.ProjectListWrapper}>
            {
                projects.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })
            }
        </div>
    </>
}