import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import profile from "../assets/Images/profile.jpeg";
import IntroCardStyles from "@styles/IntroCard.module.scss"

export const IntroductionCard = () => {
    return <>
        <section className={IntroCardStyles.IntroCardContainer}>
            <div className={IntroCardStyles.ProfileContainer}>
                <img src={profile} alt="Image of Developer" className={IntroCardStyles.ProfilePic} />

                <div>
                    <h2 className={IntroCardStyles.ProfileTitle}>Anwar Asry</h2>
                    <p className={IntroCardStyles.ProfileSentence}>A <span>Frontend-Developer</span> <br /> based in Stockholm, Sweden.</p>
                </div>
            </div>
            <div className={IntroCardStyles.Socials}>
                <a href="mailto:anwarasry@icloud.com" target="_blank"><IoIosMail className={IntroCardStyles.SocialsIcons} /></a>
                <a href="https://www.linkedin.com/in/anwar-asry-b1ba6521a" target="_blank"><IoLogoLinkedin className={IntroCardStyles.SocialsIcons} /></a>
                <a href="https://github.com/AnwarAsry" target="_blank"><IoLogoGithub className={IntroCardStyles.SocialsIcons} /></a>
            </div>
        </section>
    </>
}