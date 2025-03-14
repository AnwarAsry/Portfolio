interface IButtonsProps {
    type: "secondary" | "primary"
    link: string
    children: React.ReactNode
    downloadable?: boolean
    style?: string
}

export const Buttons = ({ type, link, children, downloadable, style }: IButtonsProps) => {
    switch (type) {
        case "primary":
            return <a className={`py-2 px-3 inline-flex justify-center items-center gap-1 rounded-lg text-white font-semibold shadow-sm bg-blue-500 ${style}`} href={link} target="_blank" download={downloadable}>
                {children}
            </a>
        case "secondary":
            return <a className={`py-2 px-3 inline-flex justify-center items-center gap-1 rounded-lg font-semibold shadow-sm border border-[#d0d5dd] bg-white ${style}`} href={link} target="_blank" download={downloadable}>
                {children}
            </a>
    }
}