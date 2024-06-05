import { Hero } from "../Hero/Hero"
import { About } from "../About/About"
import { Skillset } from "../Skills/Skillset"
import { Projects } from "../Projects/Projects"

export const Landing = () => {
    return <>
        <main id="content">
            <Hero />
            <About />
            <Skillset />
            <Projects />
        </main>
    </>
}