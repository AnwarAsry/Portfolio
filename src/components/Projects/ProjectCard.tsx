import { Buttons } from "@components/Buttons";
import { Project } from "../../models/Project";
import { Tag } from "../Tag";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return <>
        <div className="max-w-[710px] h-[210px] flex flex-col gap-2 overflow-hidden">
            <div className="h-full p-3 flex flex-col justify-between gap-2 rounded-xl bg-white">
                <div className="flex flex-col gap-1">
                    <h4><a href={project.repository} target="_blank" className="hover:underline">{project.name}</a></h4>
                    <p className="overflow-hidden break-words text-ellipsis">{project.description ? project.description : "No description"}</p>
                </div>
                {
                    project.topics && <div className="flex items-center gap-2">
                        {
                            project.topics.map((tag, i) => {
                                if (i < 3) {
                                    return <Tag text={tag} key={i} />
                                }
                            })
                        }
                        {project.topics.length > 3 ? `+${project.topics.length - 3}` : ""}
                    </div>
                }
            </div>
            <Buttons type="secondary" link={project.repository}>
                Explore more
            </Buttons>
        </div>
    </>
}