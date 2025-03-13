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
            <a href={project.repository} target="_blank" className="min-h-10 max-h-10 px-6 flex justify-center items-center gap-2 rounded-xl text-sm/5 sm:text-base/6 font-semibold text-blue-500 transition-colors ease-in-out bg-white hover:bg-blue-500 hover:text-white hover:underline">Explore more</a>
        </div>
    </>
}