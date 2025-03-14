import { Tag } from "./Tag"

interface ITagsPresentationProps {
    topics: string[]
}

export const TagsPresentation = ({ topics }: ITagsPresentationProps) => {
    return <>
        <div className="mt-2 mb-5 flex items-center gap-2">
            {
                topics.map((tag, i) => {
                    if (i < 3) {
                        return <Tag text={tag} key={i} />
                    }
                })
            }
            {topics.length > 3 ? <span className="text-white">+{topics.length - 3}</span> : ""}
        </div>
    </>
}