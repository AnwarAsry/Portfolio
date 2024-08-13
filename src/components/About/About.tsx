import profile from "../../assets/Images/profile.jpeg"
import facebook from "../../assets/Icons/facebook.svg"
import linkedin from "../../assets/Icons/linkedin.svg"

export const About = () => {
    return <>
        <section className="abt" id="about">
            <div className="abt__picture">
                {/* <!-- Another image MSG --> */}
                <img src={profile} alt="Image of Developer" />
            </div>
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
                <div className="info__table">
                    <table>
                        <tr>
                            <td className="tb-column">Name</td>
                            <td className="tb-info">: Anwar Asry</td>
                        </tr>
                        <tr>
                            <td className="tb-column">Email</td>
                            <td className="tb-info">: anwarasry@icloud.com</td>
                        </tr>
                        <tr>
                            <td className="tb-column">Address</td>
                            <td className="tb-info">: Stockholm, Sweden</td>
                        </tr>
                        <tr>
                            <td className="tb-column">Phone Number</td>
                            <td className="tb-info">: +46 76-049 13 14</td>
                        </tr>
                    </table>
                </div>
                <div className="CVSocials">
                    <button id="downloadCV" className="downloadBtn">DOWNLOAD CV</button>
                    <div className="social">
                        <p>Follow me</p>
                        <div className="social__links">
                            <img src={facebook} alt="facebook" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}