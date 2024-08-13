
interface IItemProps {
    item: {
        name: string
    },
    index: number,
    visibleKey: number,
    clickEvent: (key: number) => void
}

export const NavItem = ({ item, index, visibleKey, clickEvent }: IItemProps) => {

    return <>
        <li className={`navLinks__item ${index === visibleKey ? " active" : ""}`} onClick={() => clickEvent(index)}>
            <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
        </li>
    </>
}