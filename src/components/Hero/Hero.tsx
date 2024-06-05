export const Hero = () => {
    return <>
        <section className="hero">
            <div className="intro">
                <div className="intro__text">
                    <h3 className="intro__text--greeting">Hi there &#128075;</h3>
                    <h1 className="intro__text--name">I'm Anwar Asry a 
                        <br />
                        <span className="occupation">Frontend-developer</span>
                    </h1>
                    <p className="intro__text--sentence">Hi, I'm Anwar a frontend-developer from Stockholm, Sweden.</p>
                </div>
                <div className="intro__img">
                    <img src="./media/Images/profile.jpeg" alt="Image of Developer" />
                </div>
            </div>
        </section>
    </>
}