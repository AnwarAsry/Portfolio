interface ISectionTitle {
    title: string
}

export const SectionTitle = ({ title }: ISectionTitle) => {
    return <>
        <div className="flex flex-col gap-1">
            <h3>{title}</h3>
            <hr className="border-1 border-slate-300" />
        </div>
    </>
}