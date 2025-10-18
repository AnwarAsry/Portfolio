interface ITagProps {
    text: string;
}

export const Tag = ({ text }: ITagProps) => {
    return (
        <span className="w-fit h-fit px-3 py-1.5 rounded-full capitalize whitespace-nowrap text-sm leading-none font-semibold text-labelWhite bg-labelbgalt">
            {text}
        </span>
    )
}