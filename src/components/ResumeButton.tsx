import CV from "../../public/AnwarCV.pdf"
import { HiOutlineDownload } from "react-icons/hi";

export const ResumeButton = () => {
    return <>
        <a href={CV} target="_blank" className="primaryButton" id="downloadCV" download><HiOutlineDownload className="icons" />Download CV</a>
    </>
}