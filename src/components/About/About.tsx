import { Buttons } from "@components/Buttons"
import { HiOutlineDownload } from "react-icons/hi"
import CV from "../../../public/AnwarCV.pdf"

export const About = () => {
    return <>
        <section className="max-w-[710px] p-4 flex flex-col items-center gap-8 rounded-xl shadow-sm bg-white">
            <div className="flex flex-col gap-2">
                <div>
                    <h6>About Me</h6>
                    <h4>3+ Years Programming Experience</h4>
                </div>
                <p>
                    Hi there! 👋 I'm Anwar Asry, a passionate frontend developer with a knack for bringing designs to life and crafting seamless user experiences.
                    Whether it's designing pixel-perfect interfaces, optimizing performance, or experimenting with the latest web technologies,
                    I'm all about creating solutions that look great and work even better.
                    <br /><br />
                    When I'm not coding, you'll probably find me exploring design trends, sipping on a refreshing cup of mint tea,
                    or diving into my next creative side project. Let's build something amazing together! 🚀
                </p>
            </div>
            <Buttons type="primary" link={CV}>
                <HiOutlineDownload className="scale-[1.2]" />
                <span>Download CV</span>
            </Buttons>
        </section>
    </>
}