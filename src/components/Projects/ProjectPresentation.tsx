import hello from "../../../public/cardImage.png";
import { Tag } from "../Tag";

export const ProjectPresentation = () => {
    return <>
        <div className="project-card">
            <img className="project-card__img" src={hello} alt="Project Image" />
            <div className="project-card__details">
                <div className="project-card__info">
                    <div className="project-card__text">
                        <h4>kjfdygsd dshjfgsdjhgfs jh</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Suscipit, quae. Aut laudantium, tore ore ea aperiam similique, modi id?dolor ur qui quos voluptatibus? Sit, nihil?
                            Suscipit, quae. Aut laudantium, tore ore ea aperiam similique, modi id?dolor ur qui quos voluptatibus? Sit, nihil?
                            Suscipit, quae. Aut laudantium, tore ore ea aperiam similique, modi id?dolor ur qui quos voluptatibus? Sit, nihil?</p>
                    </div>
                    <div className="project-card__tech">
                        <Tag />
                    </div>
                </div>
                <a href="#" target="_blank" className="linkBtn">Explore more</a>
            </div>
        </div>
    </>
}