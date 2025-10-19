import profile from '@assets/Images/dev.jpeg'
import { TextBox } from '@components/TextBox';

export const About = () => {
    return (
        <section className="max-w-2xl mb-20 mx-auto">
            <img className="w-full h-120 rounded-xl object-cover" src={profile} alt="Portrait of Anwar Asry, frontend developer" />
            <h2 className="my-10 text-center text-4xl font-bold">About Me</h2>
            <div className="px-2">
                <TextBox>
                    Hi, I’m Anwar Asry, a recent graduate of Medieinstitutet, specializing in frontend development.
                    I have built a strong foundation in HTML, CSS, and JavaScript/TypeScript. For my exam project,
                    I developed a responsive web application using Next.js that allows users to create and manage
                    their passwords efficiently. This project showcased my skills and understanding of web
                    development at the time.
                </TextBox>
                <TextBox>
                    Currently, I am studying to become a Java developer, which is deepening my knowledge of backend
                    technologies and strengthening my skills as a future full-stack developer. Learning how systems
                    connect behind the scenes has given me a new appreciation for the entire software lifecycle.
                </TextBox>
                <TextBox>
                    Outside of coding, I enjoy experimenting with new tools, exploring design trends, and working
                    on small personal projects to continually challenge myself and learn. My goal is to keep
                    growing as a developer. Additionally, I love spending time in nature, particularly at my
                    father’s allotment, where I help him with gardening and experiment with different techniques
                    for a bountiful harvest.
                </TextBox>
            </div>
        </section>
    );
}