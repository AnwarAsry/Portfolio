import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import profile from "../assets/Images/profile.jpeg";

export const Introduction = () => {
    return <>
        <section className="introduction">
            <div className="profile">
                <img src={profile} alt="Image of Developer" className="profile__pic" />

                <div className="profile__text">
                    <h2>Anwar Asry</h2>
                    <p>A <span>Frontend-Developer</span> <br /> based in Stockholm, Sweden.</p>
                </div>
            </div>
            <div className="socials">
                <IoIosMail className="socials__icons" />
                <IoLogoLinkedin className="socials__icons" />
                <IoLogoGithub className="socials__icons" />
            </div>
        </section>
    </>
}