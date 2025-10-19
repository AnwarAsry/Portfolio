interface LabelProps {
    children?: React.ReactNode
}

export const Label = ({ children }: LabelProps) => {
    return (
        <span className="px-4 py-2 flex items-center gap-2 rounded-lg bg-labelbg">
            {children}
        </span>
    )
}