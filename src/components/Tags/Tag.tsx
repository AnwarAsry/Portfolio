interface ITagProps {
    text: string;
}

export const Tag = ({ text }: ITagProps) => {
    return (
        <span className="w-fit h-fit px-3 py-1 rounded-full capitalize whitespace-nowrap text-sm/[16px] font-bold text-[#f2f3f2] bg-[#454444]">
            {text}
        </span>
    )
}