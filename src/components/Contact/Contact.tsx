import mail from "../../assets/Icons/bxs-envelope.svg"
import phone from "../../assets/Icons/bxs-phone-call.svg"
import github from "../../assets/Icons/bxl-github.svg"
import linkedin from "../../assets/Icons/bxl-linkedin.svg"

export const Contact = () => {
    return <>
        <section className="contact" id="footer">
            <h2 className="contact__title">Contact</h2>
            <div className="contact__info">
                <p>
                    <span>Name</span>
                    Anwar Asry
                </p>
                <span><img src={mail} alt="" className="contact-icon"/><a href="mailto:anwarasry@icloud.com">anwarasry@icloud.com</a></span>
                <span><img src={phone} alt="" className="contact-icon"/>+46 76-049 13 14</span>
            </div>
            <div className="contact__socials">
                <span><img src={github} alt="" className="contact-icon"/></span>
                <span><img src={linkedin} alt="" className="contact-icon"/></span>
            </div>
        </section>
    </>
}