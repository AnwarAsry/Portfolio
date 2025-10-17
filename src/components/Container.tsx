interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={`px-6 py-5 relative rounded-2xl bg-[#1d1d1d] text-[#f2f3f2] ${className ? className : ''}`}
        >
            {children}
        </div>
    )
}