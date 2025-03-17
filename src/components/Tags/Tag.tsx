interface ITagProps {
    text: string;
}

export const Tag = ({ text }: ITagProps) => {
    return <>
        <span className="w-fit h-fit px-[12px] py-[4px] rounded-3xl capitalize whitespace-nowrap text-sm/[16px] font-normal text-slate-800 bg-slate-200">
            {text}
        </span>
    </>
}