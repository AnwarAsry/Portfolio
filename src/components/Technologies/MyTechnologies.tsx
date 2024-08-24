import reactIMG from "../../assets/Icons/react.svg"
import vueIMG from "../../assets/Icons/vue-js.svg"
import nodejsIMG from "../../assets/Icons/node-js.svg"
import githubIMG from "../../assets/Icons/github.svg"
import { TechSkill } from "./TechSkill"

export const MyTechnologies = () => {
    return <>
        <section className="skills" id="technologies">
            <div className="skills__title">
                <h2>Technologies</h2>
            </div>
            <div className="skills__list">
                <TechSkill img={reactIMG} skillName="React JS"/>
                <TechSkill img={vueIMG} skillName="Vue JS"/>
                <TechSkill img={nodejsIMG} skillName="Node JS"/>
                <TechSkill img={githubIMG} skillName="Github"/>
            </div>
        </section>
    </>
}