import { ProjectPresentation } from "./ProjectPresentation"

export const Projects = () => {
    return <>
        <section className="projects" id="projects">
            <h2 className="projects__title">Currently working</h2>
            <hr />
            <div className="projects__wrapper">
                <ProjectPresentation />
                <ProjectPresentation />
                <ProjectPresentation />
                <ProjectPresentation />
            </div>
            <h2 className="projects__title">Past projects</h2>
            <hr />
            <div className="projects__wrapper">
                <ProjectPresentation />
                <ProjectPresentation />
                <ProjectPresentation />
                <ProjectPresentation />
            </div>
        </section>
    </>
}