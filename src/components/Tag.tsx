import TagStyles from "@styles/Tags.module.scss"

interface ITagProps {
    text: string;
}

export const Tag = ({ text }: ITagProps) => {
    return <>
        <span className={TagStyles.TagBox}>{text}</span>
    </>
}