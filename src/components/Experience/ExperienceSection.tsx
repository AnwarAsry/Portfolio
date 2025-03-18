import { Experience } from "@models/Experience"
import { ExperienceDetails } from "./ExperienceDetails"


interface IExperienceSection {
    exp: Experience[]
}

export const ExperienceSection = ({ exp }: IExperienceSection) => {
    return <>
        <section className="px-2">
            <h3 className="mb-12 text-4xl font-bold tracking-tight text-gray-800 text-center">
                Professional Experience
            </h3>
            <div className="w-fit mx-auto grid grid-cols-1">
                {exp.map((job, index) => (
                    <ExperienceDetails key={index} job={job} />
                ))}
            </div>
        </section>
    </>
}