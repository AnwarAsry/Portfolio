import { ProjectPresentation } from "./ProjectPresentation"

export const Projects = () => {
    return <>
        <section className="projects" id="projects">
            <h2 className="projects__title">Currently working</h2>
            <hr />
            <div className="projects-wrapper">
                <ProjectPresentation />
                <ProjectPresentation />
                <ProjectPresentation />
                <ProjectPresentation />
            </div>
        </section>
    </>
}