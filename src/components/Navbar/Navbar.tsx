import { useState } from 'react';
import bars from './../../assets/Icons/bars-solid.svg';
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
                {/* <li className="navLinks__li">
                    <a href="../Anwar_Asry_CV.pdf" target="_blank" className="navLinks__li__link"
                        id="downloadCV" download>DOWNLOAD CV</a>
                </li> */}
            </ul>
        </nav>
        <div className="hamBtn">
            <img id="menuIcon" src={bars} alt="Ham" />
        </div>
    </>
}