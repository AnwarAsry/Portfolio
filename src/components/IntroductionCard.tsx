import { TbBrandGithubFilled, } from "react-icons/tb";
import { RiLinkedinFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import profile from "../assets/Images/profile.jpeg";

export const IntroductionCard = () => {
    return <>
        <section className="max-w-[710px]">
            <div className="mb-5 flex justify-end gap-4">
                <a href="https://www.linkedin.com/in/anwar-asry-b1ba6521a" target="_blank">
                    <RiLinkedinFill className="w-8 h-8" />
                </a>
                <a href="https://github.com/AnwarAsry" target="_blank">
                    <TbBrandGithubFilled className="w-8 h-8" />
                </a>
            </div>
            <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
                <div className="p-4 md:p-14 flex flex-col gap-8 rounded-xl bg-[#f7f7f9]">
                    <div>
                        <span className="mb-1 flex items-center gap-2 text-md">
                            <FaMapMarkerAlt className="text-red-500" />
                            Stockhol, Sweden
                        </span>
                        <h1 className="mb-1 text-lg tracking-tight lg:text-3xl lg:tracking-tight lg:leading-[1.25] xl:text-5xl">
                            Anwar Asry,
                            <br />
                            <strong>
                                a frontend developer
                            </strong>
                            <br />
                            with 3+ years of experience
                        </h1>
                    </div>
                    <p className="text-lg text-slate-600">
                        With a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
                    </p>
                </div>
                <img src={profile} alt="Image of Developer" className="h-[450px] hidden lg:block rounded-2xl object-cover" />
            </div>
        </section>
    </>
}