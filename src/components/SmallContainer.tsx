interface InterestProps {
    title?: string;
    children?: React.ReactNode;
}

export const SmallContainer = ({ title, children }: InterestProps) => {
    return (
        <div className="w-full flex flex-col md:flex-row md:items-center gap-8">
            <h2 className="text-lg lg:text-2xl font-bold">{title}</h2>
            <hr className="w-1 h-12 hidden md:block rounded-full bg-[#303031] border-0" />
            {children}
        </div>
    )
}