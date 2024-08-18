import mail from "../../assets/Icons/bxs-envelope.svg"
import phone from "../../assets/Icons/bxs-phone-call.svg"

export const Contact = () => {
    return <>
        <section className="contact" id="footer">
            <h2 className="contact__title">Contact</h2>
            <div className="contact__socials">
                <p>
                    <span>Name</span>
                    Anwar Asry
                </p>
                <span><img src={mail} alt=""/><a href="mailto:anwarasry@icloud.com">anwarasry@icloud.com</a></span>
                <span><img src={phone} alt=""/>+46 76-049 13 14</span>
            </div>
        </section>
    </>
}