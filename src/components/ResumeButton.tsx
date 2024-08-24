import CV from "../../public/AnwarCV.pdf"

export const ResumeButton = () => {
    return <>
        <a href={CV} target="_blank" className="resumeBtn" id="downloadCV" download>DOWNLOAD CV</a>
    </>
}