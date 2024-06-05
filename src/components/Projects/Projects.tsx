import { ProjectPresentation } from "./ProjectPresentation"

export const Projects = () => {
    return <>
        <section className="projects" id="projects">
            <div className="projects__text">
                <h2 className="projects__text__title">Projects</h2>
            </div>
            <div className="project-wrapper">
                <ProjectPresentation />
            </div>
        </section>
    </>
}