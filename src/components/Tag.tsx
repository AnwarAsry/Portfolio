interface ITagProps {
    text: string;
}

export const Tag = ({ text }: ITagProps) => {
    return <>
        <span className="tag">{text}</span>
    </>
}