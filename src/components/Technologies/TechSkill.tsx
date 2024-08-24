interface childProps {
    img: string
    skillName: string
}

export const TechSkill = ({ img, skillName }: childProps) => {
    return <>
        <div className="skill">
            <img src={img} alt={skillName} className="skill__image" />
            <p className="skill__desc">{skillName}</p>
        </div>
    </>
}