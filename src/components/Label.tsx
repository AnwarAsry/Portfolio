interface LabelProps {
    children?: React.ReactNode
}

export const Label = ({ children }: LabelProps) => {
    return (
        <span className="min-w-20 px-4 py-3 flex items-center gap-2 rounded-lg bg-[#000101]">
            {children}
        </span>
    )
}