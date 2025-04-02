import { Tag } from "@components/Tags/Tag"
import { Experience } from "@models/Experience"


interface IExperienceDetailsProps {
    job: Experience
}

export const ExperienceDetails = ({ job }: IExperienceDetailsProps) => {
    return <>
        <div className="mb-12 pl-8 relative border-l-2 border-blue-200">

            {/* Side indicator */}
            <div className="w-4 h-4 absolute top-0 -left-[9px] rounded-full bg-blue-500"></div>

            {/* Position */}
            <h4 className="mb-2 text-xl font-bold text-slate-900">
                {job.position}
            </h4>

            {/* Componay • Duration */}
            <p className="mb-4 font-medium text-blue-500">
                {job.company} • {job.duration}
            </p>

            {/* Responsibilities */}
            <ul className="mb-4 list-disc list-inside text-slate-600">
                {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="mb-2">
                        {responsibility}
                    </li>
                ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                    <Tag key={techIndex} text={tech} />
                ))}
            </div>
        </div>
    </>
}