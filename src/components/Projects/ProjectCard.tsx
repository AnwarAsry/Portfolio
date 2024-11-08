import { Project } from "../../models/Project";
import { Tag } from "../Tag";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return <>
        <div className="project-card">
            {
                project.image && <img className="project-card__img" src={project.image} alt="Project Image" />
            }
            <div className="project-card__details">
                <div className="project-card__info">
                    <div className="project-card__text">
                        <h4>{project.name}</h4>
                        <p>{project.description ? project.description : "No description"}</p>
                    </div>
                    {
                        project.topics && <div className="project-card__tech">
                            {
                                project.topics.map(tag => {
                                    return <Tag text={tag} />
                                })
                            }
                        </div>
                    }
                </div>
                <a href={project.html_url} target="_blank" className="linkBtn">Explore more</a>
            </div>
        </div>
    </>
}