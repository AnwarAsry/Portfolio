import CV from "../../public/AnwarCV.pdf"
import { HiOutlineDownload } from "react-icons/hi";

export const ResumeButton = () => {
    return <>
        <div className="primaryButton">
            <HiOutlineDownload className="icons" />
            <a href={CV} target="_blank" id="downloadCV" download>Download CV</a>
        </div>
    </>
}