import { useState } from 'react';
import { NavItem } from './NavItem';

const navItems = [
    {
        name: "About"
    },
    {
        name: "Technologies"
    },
    {
        name: "Projects"
    },
]

export const Navbar = () => {
    const [visibleKey, setVisibleKey] = useState(0);
    

    const clickActive = (index: number) => {
        setVisibleKey(index);
    };


    return <>
        <nav className="nav" id="nav">
            <ul className="navLinks" id="links" >
                {
                    navItems.map((link, index) => {
                        return (
                            <NavItem key={index} item={link} index={index} visibleKey={visibleKey} clickEvent={clickActive}/>
                        )
                    })
                }
            </ul>
        </nav>
    </>
}