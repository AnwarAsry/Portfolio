import profile from "../../assets/Images/profile.jpeg"

export const Hero = () => {
    return <>
        <section className="hero">
            <div className="intro">
                <div className="intro__text">
                    <h2 className="intro__text--greeting">Hi there, my name is
                        <br />
                        Anwar Asry
                    </h2>
                    <p className="intro__text--sentence">I am a <span className="occupation">Frontend-developer</span> from Stockholm, Sweden.</p>
                </div>
                <img src={profile} alt="Image of Developer" />
            </div>
        </section>
    </>
}