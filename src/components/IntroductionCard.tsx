import { TbBrandGithubFilled, } from "react-icons/tb";
import { RiLinkedinFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { Buttons } from "./Buttons";
import profile from "../assets/Images/profile.jpeg";
import CV from "../../public/AnwarCV.pdf"

export const IntroductionCard = () => {
    return <>
        <section>
            <div className="h-20 flex justify-end items-center gap-4">
                <a href="https://www.linkedin.com/in/anwar-asry-b1ba6521a" target="_blank">
                    <RiLinkedinFill className="w-8 h-8" />
                </a>
                <a href="https://github.com/AnwarAsry" target="_blank">
                    <TbBrandGithubFilled className="w-8 h-8" />
                </a>
            </div>
            <div className="grid grid-cols-1 gap-x-8 lg:[grid-template-columns:1fr_26rem]">
                <div className="p-4 md:p-14 grid content-center gap-8 rounded-xl bg-[#f7f7f9]">
                    <div>
                        <h1 className="mb-1 text-lg tracking-tight lg:text-3xl lg:tracking-tight lg:leading-[1.25] xl:text-5xl">
                            Hi there! I'm Anwar Asry,
                            <br />
                            <strong>
                                a frontend developer
                            </strong>
                            <br />
                            with 3+ years of experience
                        </h1>
                        <span className="mt-3 flex items-center gap-2 text-md">
                            <FaMapMarkerAlt className="text-red-500" />
                            Stockholm, Sweden
                        </span>
                    </div>
                    <p className="text-lg text-slate-600">
                        With a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
                    </p>
                    <div className="inline-flex flex-col md:flex-row gap-4">
                        <Buttons type="primary" link={"mailto:anwarasry@icloud.com"} style="w-fit">
                            <IoMailOutline className="scale-[1.2]" />
                            <span>Contact me</span>
                        </Buttons>
                        <Buttons type="secondary" link={CV} style="w-fit">
                            <HiOutlineDownload className="scale-[1.2]" />
                            <span>Download resume</span>
                        </Buttons>
                    </div>
                </div>
                <img src={profile} width={832} height={1088} alt="Image of Developer" className="h-[544px] hidden lg:block rounded-2xl object-cover" />
            </div>
        </section>
    </>
}