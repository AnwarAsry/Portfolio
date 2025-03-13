interface IButtonsProps {
    type: "secondary" | "primary"
    link: string
    children: React.ReactNode
    downloadable?: boolean
}

export const Buttons = ({ type, link, children, downloadable }: IButtonsProps) => {
    switch (type) {
        case "primary":
            return <a className="w-fit h-10 sm:h-13 px-6 flex justify-center items-center gap-2 rounded-xl text-sm/5 sm:text-base/6 font-semibold text-white transition-colors ease-in-out bg-blue-500 hover:bg-sky-500" href={link} target="_blank" download={downloadable}>
                {children}
            </a>
        case "secondary":
            return <a className="min-h-10 max-h-10 px-6 flex justify-center items-center gap-2 rounded-xl text-sm/5 sm:text-base/6 font-semibold text-blue-500 transition-colors ease-in-out bg-white hover:bg-blue-500 hover:text-white hover:underline" href={link} target="_blank" download={downloadable}>
                {children}
            </a>
    }
}