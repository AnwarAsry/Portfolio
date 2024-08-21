import linkedin from "../../assets/Icons/bxl-linkedin.svg"
import CV from "../../../public/AnwarCV.pdf"

export const About = () => {
    return <>
        <section className="abt" id="about">
            <div className="info">
                <div className="info__title">
                    <p>About Me</p>
                    <h2>With More Than 3+ Years Programming Experience</h2>
                </div>
                <div className="info__text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis minima, nisi eius repudiandae corrupti, error fuga
                        omnis consequuntur earum reprehenderit atque quam eligendi
                        asperiores maiores facere minus, blanditiis voluptatem? Cum.
                    </p>
                </div>
            </div>
            <div className="CVSocials">
                <a href={CV} target="_blank" className="CVSocials__downloadBtn" id="downloadCV" download>DOWNLOAD CV</a>
                <div className="social">
                    <p>Follow me on</p>
                    <div className="social__links">
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>
        </section>
    </>
}