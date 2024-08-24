import { Contact } from "../Contact/Contact"
import { About } from "./About"

export const AboutSection = () => {
    return <>
        <section className="about-section" id="about">
            <About/>
            <Contact/>
        </section>
    </>
}