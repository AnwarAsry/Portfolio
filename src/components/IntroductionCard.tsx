import { FaMapMarkerAlt } from "react-icons/fa";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import profile from "../assets/Images/profile.jpeg";

export const IntroductionCard = () => {
    return <>
        <div className="flex gap-8">
            <img src={profile} alt="Image of Developer" className="w-60 h-50 rounded-tl-4xl rounded-br-4xl object-cover" />
            <div className="w-80">
                <span className="uppercase font-bold text-sm text-[#7f7f7f]">
                    A Frontend Developer
                </span>
                <h1 className="text-4xl font-bold">
                    Anwar Asry                    
                </h1>
                <span className="my-2 flex items-center gap-2 text-md text-[#7f7f7f]">
                    <FaMapMarkerAlt className="text-red-500" />
                    Stockholm, Sweden
                </span>
                <p className="text-lg text-[#8d8c8d]">
                    I’m always looking to learn more and grow as a developer.
                </p>
                <div className="w-full flex justify-end">
                    <PiArrowFatLinesRightFill className="size-6 text-[#8d8c8d]"/>
                </div>
            </div>
        </div>
    </>
}