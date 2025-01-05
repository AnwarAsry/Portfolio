import ProjectStyles from "@styles/Projects.module.scss"
import TagStyles from "@styles/Tags.module.scss"
import { Project } from "../../models/Project";
import { Tag } from "../Tag";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return <>
        <div className={ProjectStyles.ProjectCard}>
            <div className={ProjectStyles.ProjectDetailsContainer}>
                <div className={ProjectStyles.ProjectTitleAndDescCont}>
                    <h4><a href={project.repository} target="_blank">{project.name}</a></h4>
                    <p className={ProjectStyles.ProjectDescription}>{project.description ? project.description : "No description"}</p>
                </div>
                {
                    project.topics && <div className={TagStyles.TagsContainer}>
                        {
                            project.topics.map((tag, i) => {
                                return <Tag text={tag} key={i} />
                            })
                        }
                    </div>
                }
            </div>
            <a href={project.repository} target="_blank" className={ProjectStyles.ProjectLinkBtn}>Explore more</a>
        </div>
    </>
}