import { Container } from "@components/Container"
import { IExperience } from "@models/Experience"


interface IExperienceBoxProps {
    exp: IExperience
}

export const ExperienceBox = ({ exp }: IExperienceBoxProps) => {
    return (
        <Container className="max-w-[490px] ml-8 relative before:absolute before:content-[''] before:w-[25px] before:h-[25px] before:left-[-46.5px] before:top-[54px] before:bg-blue-500 before:rounded-full">
            <p className="mb-2 font-medium text-gray-400">
                {exp.place} • {exp.duration}
            </p>
            <h4 className="mb-4 text-xl font-bold">{exp.title}</h4>
            <p className="text-lg text-gray-400">{exp.description}</p>
        </Container>
    )
}