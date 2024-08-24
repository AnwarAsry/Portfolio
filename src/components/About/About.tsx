import { ResumeButton } from "../ResumeButton"

export const About = () => {
    return <>
        <div className="info">
            <div>
                <span>About Me</span>
                <h2 className="info__title">With More Than 3+ Years Programming Experience</h2>
                <div className="info__text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis minima, nisi eius repudiandae corrupti, error fuga
                        omnis consequuntur earum reprehenderit atque quam eligendi
                        asperiores maiores facere minus, blanditiis voluptatem? Cum.
                    </p>
                </div>
            </div>
            <div className="resume">
                <ResumeButton/>
            </div>
        </div>
    </>
}