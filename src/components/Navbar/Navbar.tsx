import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
    return <>
        <nav className="nav" id="nav">
            <ul className="navLinks" id="links" >
                <li className="navLinks__li">
                    <a href="#main-abtme" className="navLinks__li__link">ABOUT ME</a>
                </li>
                <li className="navLinks__li">
                    <a href="#main-projects" className="navLinks__li__link">PROJECTS</a>
                </li>
                {/* <!-- <li className="nav-link"><a href="#main-skill">Skill/Experience</a></li> --> */}
                <li className="navLinks__li">
                    <a href="#main-cntme" className="navLinks__li__link">CONTACT ME</a>
                </li>
                <li className="navLinks__li">
                    <a href="../Anwar_Asry_CV.pdf" target="_blank" download className="navLinks__li__link"
                        id="downloadCV">DOWNLOAD CV</a>
                </li>
            </ul>
        </nav>
        <div className="hamBtn">
            <img id="menuIcon" src="../../assets/Icons/bars-solid.svg" alt="Ham" />
            <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
    </>
}