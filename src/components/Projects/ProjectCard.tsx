import { Buttons } from "@components/Buttons";
import { Project } from "@models/Project";
import { TagsPresentation } from "@components/Tags/TagsPresentation";
import { FaArrowRight } from "react-icons/fa6";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return <>
        <div className={`relative grid grid-cols-[grid-template-columns:minmax(18rem,67rem)] ${project.image ? "md:grid-cols-2" : ""} gap-8 rounded-2xl shadow-md bg-[#313445] overflow-hidden`}>
            {/* Personal Tag */}
            {project.personal && (
                <span className="px-4 py-0.5 absolute right-0 rounded-bl-lg text-sm sm:text-base text-white bg-sky-600">
                    Personal
                </span>
            )}

            {/* Project Details */}
            <div className={`p-5 md:py-8 ${project.image ? "md:pl-8 md:pr-0" : "md:px-8"}`}>
                {/* Live Demo Link */}
                {project.liveDemo && (
                    <a
                        className="flex gap-2 items-center text-green-400 hover:underline"
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="relative flex items-center justify-center size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                        </span>
                        Live Demo
                    </a>
                )}

                {/* Project Title */}
                <h3 className="mt-1 mb-0.5 font-bold text-xl sm:text-3xl text-white">
                    {project.name}
                </h3>

                {/* Project Dates */}
                <span className="mb-5 block text-base font-normal text-white">
                    {project.created} - {project.lastUpdated}
                </span>

                {/* Topics (Tags) */}
                {project.techStack && <TagsPresentation topics={project.techStack} />}

                {/* Project Description */}
                <p className="text-base sm:text-lg text-[#d0d5dd]">
                    {project.description || "No description available"}
                </p>

                {/* Button to Repo */}
                <Buttons style="mt-8" type="secondary" link={project.repo}>
                    <span>View Repo</span>
                    <FaArrowRight />
                </Buttons>
            </div>

            {/* Project Image */}
            {project.image && (
                <img
                    className="hidden md:block"
                    src={project.image}
                    alt={project.name || "Project preview"}
                    loading="lazy"
                />
            )}
        </div>
    </>
}