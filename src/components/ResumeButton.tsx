import CV from "../../public/AnwarCV.pdf"
import { HiOutlineDownload } from "react-icons/hi";

export const ResumeButton = () => {
    return <>
        <a href={CV} target="_blank" className="w-fit h-10 sm:h-13 px-6 flex justify-center items-center gap-2 rounded-xl text-sm/5 sm:text-base/6 font-semibold text-white transition-colors ease-in-out bg-blue-500 hover:bg-sky-500" id="downloadCV" download>
            <HiOutlineDownload className="scale-[1.2]" />
            Download CV
        </a>
    </>
}