interface ITagProps {
    text: string;
}

export const Tag = ({ text }: ITagProps) => {
    return <>
        <span className="w-fit h-fit px-[12px] py-[4px] rounded-3xl capitalize whitespace-nowrap text-sm/[16px] font-medium text-white bg-slate-600">
            {text}
        </span>
    </>
}