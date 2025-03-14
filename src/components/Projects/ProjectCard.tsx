import { Buttons } from "@components/Buttons";
import { Project } from "@models/Project";
import { TagsPresentation } from "@components/Tags/TagsPresentation";
import { FaArrowRight } from "react-icons/fa6";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return <>
        <div className={`grid ${project.image ? "grid-cols-single md:grid-cols-2" : "grid-cols-single"} gap-8 rounded-2xl shadow-sm bg-[#313445] overflow-hidden`}>
            <div className={`py-8 px-5 md:py-17 ${project.image ? "md:pl-14 md:pr-0" : "md:px-14"}`}>
                <h3 className="mb-3">
                    <a className="font-semibold text-3xl text-white" href={project.repository} target="_blank">
                        {project.name}
                    </a>
                </h3>
                {
                    project.topics && <TagsPresentation topics={project.topics} />
                }
                <p className="text-lg text-[#d0d5dd]">
                    {project.description ? project.description : "No description"}
                </p>
                <Buttons style="mt-8" type="secondary" link={project.repository}>
                    <span>View Repo</span>
                    <FaArrowRight />
                </Buttons>
            </div>
            {project.image && <img className="hidden md:block" src={project.image} alt="Image of project" loading="lazy" />}
        </div>
    </>
}