import profile from "../../assets/Images/profile.jpeg"

export const Hero = () => {
    return <>
        <section className="hero">
            <div className="intro">
                <div className="intro__text">
                    <h2 className="intro__text--greeting">Hi there, my name is Anwar Asry</h2>
                    <p className="intro__text--sentence">I am a <span className="occupation">Frontend-developer</span> based in Stockholm, Sweden.</p>
                </div>
                <img src={profile} alt="Image of Developer" className="intro__pic"/>
            </div>
        </section>
    </>
}