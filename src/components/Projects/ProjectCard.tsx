import { Buttons } from "@components/Buttons";
import { Project } from "@models/Project";
import { TagsPresentation } from "@components/Tags/TagsPresentation";
import { FaArrowRight } from "react-icons/fa6";
import noImage from "../../../public/images/no-image.png";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return (
        <div className="w-fit h-80 flex gap-4">
            <img
                className="w-100 object-cover hidden rounded-2xl md:block"
                src={project.image ? project.image : noImage}
                alt={project.name || "Project preview"}
                loading="lazy"
            />
            <div className={`w-xl p-5 relative gap-8 rounded-2xl shadow-md bg-[#1d1d1d] overflow-hidden`}>
                {/* Personal Tag */}
                {project.personal && (
                    <span className="px-4 py-0.5 absolute top-0 right-0 rounded-bl-lg text-sm sm:text-base text-white bg-sky-600">
                        Personal
                    </span>
                )}

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
                <Buttons style="mt-8 absolute bottom-5" type="secondary" link={project.repo}>
                    <span>View Repo</span>
                    <FaArrowRight />
                </Buttons>
            </div>
        </div>
    )
}