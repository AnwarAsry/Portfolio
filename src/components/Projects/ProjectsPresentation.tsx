import hello from "../../../public/cardImage.png";
import { Project } from "../../models/Project";
import { ProjectCard } from "./ProjectCard"

export const ProjectsPresentation = () => {
    const placeholder = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quae. Aut laudantium, tore ore ea aperiam similique, modi id?dolor ur qui quos voluptatibus? Sit, nihil? Suscipit, quae. Aut laudantium, tore ore ea aperiam similique, modi id?dolor ur qui quos voluptatibus? Sit, nihil? Suscipit, quae. Aut laudantium, tore ore ea aperiam similique, modi id?dolor ur qui quos voluptatibus? Sit, nihil?"

    const dummyData: Project[] = [{
        id: 2,
        name: "Something",
        html_url: "#",
        description: placeholder,
        created_at: "",
        language: "TypeScript",
        topics: ["react", "vue", "ts"],
        image: hello,
    }]
    return <>
        <div className="projects">
            {
                dummyData.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })
            }
        </div>
    </>
}