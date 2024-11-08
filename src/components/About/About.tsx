import { ResumeButton } from "../ResumeButton"

export const About = () => {
    return <>
        <div className="about">
            <div className="about__text">
                <div>
                    <h6>About Me</h6>
                    <h3>3+ Years Programming Experience</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis minima, nisi eius repudiandae corrupti, error fuga
                    omnis consequuntur earum reprehenderit atque quam eligendi
                    asperiores maiores facere minus, blanditiis voluptatem? Cum.
                </p>
            </div>
            <ResumeButton />
        </div>
    </>
}