import { ProjectsSection } from "@components/Projects/ProjectsSection";
import { Project, Status } from "@models/Project";
// import projectsData from "./projects.json" assert { type: "json" };
import projects from "@projects" assert { type: "json" };

export const Projects = () => {
    const pastProjects = projects.filter(project => project.status === Status.Completed) as Project[];
    const workingProjects = projects.filter(project => project.status === Status.InProgress) as Project[];

    return (
        <section className="mb-20 grid grid-cols-1 gap-16">
            <ProjectsSection title="Currently working on" projects={workingProjects} />
            <ProjectsSection title="Past projects" projects={pastProjects} />
        </section>
    );
}