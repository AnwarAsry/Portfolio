interface childProps {
    img: string
    skillName: string
}

export const TechSkill = ({ img, skillName }: childProps) => {
    return <>
        <div className="w-35 mx-auto flex items-center gap-3">
            <img src={img} alt={skillName} className="w-7 h-7" />
            <p className="text-center">{skillName}</p>
        </div>
    </>
}