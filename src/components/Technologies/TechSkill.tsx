import { useState } from "react";

interface ITechSkill {
    tooltipText: string;
    img: string;
    main?: boolean;
}

export const TechSkill = ({ tooltipText, img }: ITechSkill) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="w-fit mx-auto relative flex items-center gap-3" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <img src={img} alt={img} className="w-7 h-7" />
            {/* {main ? <span>(Main)</span> : ""} */}

            {isVisible && (
                <div className="w-fit px-4 py-2 absolute -top-1/2 -translate-y-2/3 left-1/2 -translate-x-1/2 rounded-full leading-none font-semibold text-black text-sm bg-[#e4e4e4]">
                    {tooltipText}
                </div>
            )}
        </div>
    );
};
