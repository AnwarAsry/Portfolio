import user from "../../assets/Icons/bxs-user.svg"
import mail from "../../assets/Icons/bxs-envelope.svg"
import phone from "../../assets/Icons/bxs-phone-call.svg"
import github from "../../assets/Icons/bxl-github.svg"
import linkedin from "../../assets/Icons/bxl-linkedin.svg"

export const Contact = () => {
    return <>
        <div className="contact" id="footer">
            <h2 className="contact__title">Contact</h2>
            <div className="contact__info">
                <div><img src={user} alt="user icon" className="contact-icon"/><p>Anwar Asry</p></div>
                <div><img src={mail} alt="mail icon" className="contact-icon"/><a href="mailto:anwarasry@icloud.com">anwarasry@icloud.com</a></div>
                <div><img src={phone} alt="phone icon" className="contact-icon"/>+46 76-049 13 14</div>
            </div>
            <div className="contact__socials">
                <span><img src={github} alt="github" className="contact-icon"/></span>
                <span><img src={linkedin} alt="linkedin" className="contact-icon"/></span>
            </div>
        </div>
    </>
}