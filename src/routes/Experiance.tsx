import { ExperienceBox } from "@components/Experience/ExperienceBox";
import { ExperienceLineWrapper } from "@components/Experience/ExperienceLineWrapper";
import { IExperience } from "@models/Experience";
import listExperince from "@experiance" assert { type: "json" };

export const Experiance = () => {
    const education: IExperience[] = listExperince.filter(exp => exp.type === "education") as IExperience[];
    const work: IExperience[] = listExperince.filter(exp => exp.type === "work") as IExperience[];

    return (
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 grid-cols-[minmax(500px, 1fr)] gap-16">
            <div>
                <h3 className="mb-12 text-3xl font-bold tracking-tight text-center text-[#f2f3f2]">
                    My Education
                </h3>
                <ExperienceLineWrapper>
                    {
                        education.map((edu, index) => (
                            <ExperienceBox key={index} exp={edu} />
                        ))
                    }
                </ExperienceLineWrapper>
            </div>
            <div>
                <h3 className="mb-12 text-3xl font-bold tracking-tight text-center text-[#f2f3f2]">
                    My Work Experience
                </h3>
                <ExperienceLineWrapper>
                    {
                        work.map((job, index) => (
                            <ExperienceBox key={index} exp={job} />
                        ))
                    }
                </ExperienceLineWrapper>
            </div>
        </div>
    );
}