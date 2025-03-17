import { Buttons } from "@components/Buttons";
import { Project } from "@models/Project";
import { TagsPresentation } from "@components/Tags/TagsPresentation";
import { FaArrowRight } from "react-icons/fa6";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return <>
        <div className={`relative grid ${project.image ? "grid-cols-[grid-template-columns:minmax(18rem,67rem)] md:grid-cols-2" : "grid-cols-[grid-template-columns:minmax(18rem,67rem)]"} gap-8 rounded-2xl shadow-sm bg-[#313445] overflow-hidden`}>
            {project.personal && <div className="px-3 absolute right-0 rounded-bl-lg text-white bg-sky-600">
                Personal
            </div>}
            <div className={`p-5 md:py-8 ${project.image ? "md:pl-8 md:pr-0" : "md:px-8"}`}>
                {project.liveDemo && (
                    <a className="flex gap-2 items-center text-green-400 hover:underline" href={project.liveDemo} target="_blank">
                        <span className="relative flex items-center justify-center size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                        </span>
                        Live Demo
                    </a>
                )}
                <h3 className="mt-1 mb-3 font-semibold text-3xl text-white">
                    {project.name}
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