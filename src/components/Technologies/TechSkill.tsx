interface childProps {
    img: string
    skillName: string
    main?: boolean
}

export const TechSkill = ({ img, skillName, main }: childProps) => {
    return <>
        <div className="w-35 mx-auto flex items-center gap-3">
            <img src={img} alt={skillName} className="w-7 h-7" />
            <p className="text-center">{skillName} {main ? <span>(Main)</span> : ""}</p>
        </div>
    </>
}