import { TechSkill } from "./TechSkill"

import reactIMG from "../../assets/icons/react-2.svg"
import nodejsIMG from "../../assets/icons/nodejs-3.svg"
import gitIMG from "../../assets/icons/git-icon.svg"
import tsIMG from "../../assets/icons/ts-logo-512.svg"
import cssIMG from "../../assets/icons/css-3.svg"
import htmlIMG from "../../assets/icons/html-1.svg"
import mongodbIMG from "../../assets/icons/mongodb-icon-2.svg"
import sqlIMG from "../../assets/icons/mysql-logo-pure.svg"
import nextIMG from "../../assets/icons/next-js.svg"
import tailwindIMG from "../../assets/icons/tailwind-css-2.svg"
import viteIMG from "../../assets/icons/vitejs.svg"


export const MyTechnologies = () => {
    return <>
        <section className="w-full lg:w-220 mx-auto">
            <h3 className="mb-12 text-4xl font-bold tracking-tight text-gray-800 text-center">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <TechSkill img={reactIMG} skillName="React" main />
                <TechSkill img={nodejsIMG} skillName="Node JS" />
                <TechSkill img={gitIMG} skillName="Git" />
                <TechSkill img={tsIMG} skillName="TypeScript" />
                <TechSkill img={cssIMG} skillName="CSS" />
                <TechSkill img={htmlIMG} skillName="HTML" />
                <TechSkill img={mongodbIMG} skillName="MongoDB" />
                <TechSkill img={sqlIMG} skillName="MySQL" />
                <TechSkill img={nextIMG} skillName="Next JS" />
                <TechSkill img={tailwindIMG} skillName="TailwindCSS" />
                <TechSkill img={viteIMG} skillName="Vite" />
            </div>
        </section>
    </>
}