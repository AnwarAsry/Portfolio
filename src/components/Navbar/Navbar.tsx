import bars from './../../assets/Icons/bars-solid.svg';

export const Navbar = () => {
    return <>
        <nav className="nav" id="nav">
            <ul className="navLinks" id="links" >
                <li className="navLinks__item active">
                    <a href="#aboutMe">About Me</a>
                </li>
                <li className="navLinks__item">
                    <a href="#skillset">Technologies</a>
                </li>
                <li className="navLinks__item">
                    <a href="#projects">Projects</a>
                </li>
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