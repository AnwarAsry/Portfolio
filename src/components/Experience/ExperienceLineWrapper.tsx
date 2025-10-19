export const ExperienceLineWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-8 border-l-5 border-blue-200">
            {children}
        </div>
    );
}