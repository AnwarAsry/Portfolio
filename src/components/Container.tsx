interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={`px-6 py-4 relative rounded-xl bg-container text-headingColor ${className ? className : ''}`}
        >
            {children}
        </div>
    )
}