import { Project } from "@models/Project";
import { TagsPresentation } from "@components/Tags/TagsPresentation";
import { FaArrowRight } from "react-icons/fa6";
import noImage from "../../../public/images/no-image.png";
import { Container } from "@components/Container";

interface IProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
    return (
        <div className="w-fit h-fit lg:max-h-80 flex gap-4">
            {project.image && (
                <img
                    className="w-100 object-cover hidden rounded-2xl lg:block"
                    src={project.image ? project.image : noImage}
                    alt={project.name || "Project preview"}
                    loading="lazy"
                />
            )}
            <div className="flex flex-col gap-4">
                <Container className="max-w-xl flex-2 overflow-hidden">
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
                    <h3 className="mt-1 mb-0.5 font-bold text-xl sm:text-3xl text-headingColor">
                        {project.name}
                    </h3>

                    {/* Project Dates */}
                    <span className="mb-3 block text-base font-normal text-gray-400">
                        {project.created} - {project.lastUpdated ? project.lastUpdated : "Present"}
                    </span>

                    {/* Project Description */}
                    <p className="text-lg text-gray-400">
                        {project.description || "No description available"}
                    </p>

                    {/* Topics (Tags) */}
                    {project.techStack && <TagsPresentation topics={project.techStack} />}
                </Container>

                <a className="w-full px-6 py-5 flex items-center justify-between rounded-xl bg-container text-headingColor hover:bg-hoverContainerbg" href={project.repo} target="_blank" rel="noopener noreferrer">
                    View repo <FaArrowRight />
                </a>
            </div>
        </div>
    )
}