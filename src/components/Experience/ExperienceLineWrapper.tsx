export const ExperienceLineWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-8 border-l-5 border-dotted border-[#f2f3f2]">
            {children}
        </div>
    );
}