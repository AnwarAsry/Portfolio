import bars from './../../assets/Icons/bars-solid.svg';

export const Navbar = () => {
    return <>
        <nav className="nav" id="nav">
            <ul className="navLinks" id="links" >
                <li className="navLinks__li">
                    <a href="#aboutMe" className="navLinks__li__link">ABOUT ME</a>
                </li>
                <li className="navLinks__li">
                    <a href="#projects" className="navLinks__li__link">PROJECTS</a>
                </li>
                <li className="navLinks__li">
                    <a href="#skillset" className="navLinks__li__link">SKILLSET</a>
                </li>
                <li className="navLinks__li">
                    <a href="../Anwar_Asry_CV.pdf" target="_blank" className="navLinks__li__link"
                        id="downloadCV" download>DOWNLOAD CV</a>
                </li>
            </ul>
        </nav>
        <div className="hamBtn">
            <img id="menuIcon" src={bars} alt="Ham" />
        </div>
    </>
}