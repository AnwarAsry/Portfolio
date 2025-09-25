import { ExperienceBox } from "@components/Experience/ExperienceBox";
import { ExperienceLineWrapper } from "@components/Experience/ExperienceLineWrapper";
import { Education } from "@models/Experience";

export const Experiance = () => {
    const education: Education[] = [
        {
            institution: "Medieinstitutet",
            duration: "2023 - 2025",
            degree: "Frontend Developer",
            details: ["Developed various projects using React and Vue", "Collaborated in teams for software development courses"]
        },
        {
            institution: "IT Högskolan",
            duration: "2025 - Ongoing",
            degree: "Java Developer",
            details: ["Specialized in web development and cloud computing", "Completed a thesis on scalable web applications"]
        }
    ];

    return (
        <div className="w-fit mx-auto grid grid-cols-2 grid-cols-[minmax(500px, 1fr)] gap-16">
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
                        education.map((edu, index) => (
                            <ExperienceBox key={index} exp={edu} />
                        ))
                    }
                </ExperienceLineWrapper>
            </div>
        </div>
    );
}