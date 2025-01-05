import SectionTitleStyles from "@styles/Section.module.scss"

interface ISectionTitle {
    title: string
}

export const SectionTitle = ({ title }: ISectionTitle) => {
    return <>
        <div className={SectionTitleStyles.SectionTitle}>
            <h3>{title}</h3>
            <hr />
        </div>
    </>
}