import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import profile from "../assets/Images/profile.jpeg";

export const IntroductionCard = () => {
    return <>
        <section className="max-w-[710px] p-3 sm:p-6 flex flex-col sm:flex-row gap-3 sm:gap-0 items-center justify-between border-2 border-slate-300 rounded-2xl ">
            <div className="w-fit flex items-center gap-3 sm:gap-5">
                <img src={profile} alt="Image of Developer" className="w-19 h-19 sm:w-22 sm:h-22 md:w-25 md:h-25 rounded-full object-cover" />

                <div>
                    <h2 className="mb-1">Anwar Asry</h2>
                    <p className="font-medium text-slate-500">A <span className="font-bold">Frontend-Developer</span> <br /> based in Stockholm, Sweden.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <a href="mailto:anwarasry@icloud.com" target="_blank"><IoIosMail className="w-8 h-8" /></a>
                <a href="https://www.linkedin.com/in/anwar-asry-b1ba6521a" target="_blank"><IoLogoLinkedin className="w-8 h-8" /></a>
                <a href="https://github.com/AnwarAsry" target="_blank"><IoLogoGithub className="w-8 h-8" /></a>
            </div>
        </section>
    </>
}