interface ISectionTitleProps {
    text: string
}

export const SectionTitle = ({ text }: ISectionTitleProps) => {
    return <>
        <div className="sectionTitle">
            <h3>{text}</h3>
            <hr />
        </div>
    </>
}