import { Container } from "@components/Container"
import { Education } from "@models/Experience"


interface IExperienceBoxProps {
    exp: Education
}

export const ExperienceBox = ({ exp }: IExperienceBoxProps) => {
    return (
        <Container style="ml-8 relative before:absolute before:content-[''] before:w-[25px] before:h-[25px] before:left-[-46.5px] before:top-[54px] before:bg-blue-500 before:rounded-full">
            <p className="mb-2 font-medium text-blue-500">
                {exp.institution} • {exp.duration}
            </p>
            <h4 className="mb-4 text-xl font-bold">{exp.degree}</h4>
            <ul className="list-disc list-inside">
                {exp.details.map((detail, index) => (
                    <li key={index} className="mb-2">
                        {detail}
                    </li>
                ))}
            </ul>
        </Container>
    )
}