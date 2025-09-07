export const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div
            className="w-fit min-h-1/3 p-4 rounded-2xl bg-[#1d1d1d] text-[#f2f3f2]"
        >
            {children}
        </div>
    )
}