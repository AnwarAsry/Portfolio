interface ContainerProps {
    children: React.ReactNode
    style?: string
}

export const Container = ({ children, style }: ContainerProps) => {
    return (
        <div
            className={`px-6 py-5 rounded-2xl bg-[#1d1d1d] text-[#f2f3f2] ${style ? style : ''}`}
        >
            {children}
        </div>
    )
}