import reactIMG from "../../assets/Icons/react.svg"
import flutterIMG from "../../assets/Icons/flutter.svg"
import vueIMG from "../../assets/Icons/vue-js.svg"
import nodejsIMG from "../../assets/Icons/node-js.svg"
import githubIMG from "../../assets/Icons/github.svg"

export const MyTechnologies = () => {
    return <>
        <section className="skills" id="technologies">
            <div className="skills__title">
                <h2>My Technologies</h2>
            </div>
            <div className="skills__list">
                <div className="skill">
                    <img src={reactIMG} alt="React JS" className="skill__image" />
                    <p className="skill__desc">React JS</p>
                </div>
                <div className="skill">
                    <img src={flutterIMG} alt="Flutter" className="skill__image" />
                    <p className="skill__desc">Flutter</p>
                </div>
                <div className="skill">
                    <img src={vueIMG} alt="Vue JS" className="skill__image" />
                    <p className="skill__desc">Vue JS</p>
                </div>
                <div className="skill">
                    <img src={nodejsIMG} alt="Node JS" className="skill__image" />
                    <p className="skill__desc">Node JS</p>
                </div>
                <div className="skill">
                    <img src={githubIMG} alt="Github" className="skill__image" />
                    <p className="skill__desc">Github</p>
                </div>
            </div>
        </section>
    </>
}