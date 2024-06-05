import { Hero } from "../Hero/Hero"

export const Landing = () => {
    return <>
        <main id="content">
            <Hero />

            <section className="abt" id="about-back">
                <div className="abt__picture">
                    {/* <!-- Another image MSG --> */}
                    <img src="./media/Images/profile.jpeg" alt="Image of Developer" />
                </div>
                <div className="info">
                    <div className="info__title">
                        <p>About Me</p>
                        <h2>With More Than 3+ Years Programming Experience</h2>
                    </div>
                    <div className="info__text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Veritatis minima, nisi eius repudiandae corrupti, error fuga
                            omnis consequuntur earum reprehenderit atque quam eligendi
                            asperiores maiores facere minus, blanditiis voluptatem? Cum.
                        </p>
                    </div>
                    <div className="info__table">
                        <table>
                            <tr>
                                <td className="tb-column">Name</td>
                                <td className="tb-info">: Anwar Asry</td>
                            </tr>
                            <tr>
                                <td className="tb-column">Email</td>
                                <td className="tb-info">: anwarasry@icloud.com</td>
                            </tr>
                            <tr>
                                <td className="tb-column">Address</td>
                                <td className="tb-info">: Stockholm, Sweden</td>
                            </tr>
                            <tr>
                                <td className="tb-column">Phone Number</td>
                                <td className="tb-info">: +46 76-049 13 14</td>
                            </tr>
                        </table>
                    </div>
                    <div className="CVSocials">
                        <button id="downloadCV" className="downloadBtn">DOWNLOAD CV</button>
                        <div className="social">
                            <p>Follow me</p>
                            <div className="social__links">
                                <img src="./media/Images/facebook.png" alt="" />
                                <img src="./media/Images/linkedin.png" alt="" />
                                {/* <!-- <img src="./media/Images/" alt=""> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="skills__title">
                    <h2>Skills</h2>
                </div>
                <div className="skills__list">
                    <ul>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>NodeJS</li>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>NodeJS</li>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>NodeJS</li>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>NodeJS</li>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>NodeJS</li>
                        <li>HTML/CSS</li>
                        <li>SASS</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
            </section>

            <section className="projects">
                <div className="projects__text">
                    <h2 className="projects__text__title">Projects</h2>
                </div>
                <div className="project-wrapper">
                    <div className="card swiper-slide">
                        <img className="card__img" src="cardImage.png" alt="Card Image" />
                        <div className="card__info">
                            <h3 className="card__info__title">1</h3>
                            <p className="card__info__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Suscipit, quae. Aut laudantium, pariatur</p>
                            <button className="card__info__button">Explore more</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <img className="card__img" src="cardImage.png" alt="Card Image" />
                        <div className="card__info">
                            <h3 className="card__info__title">1</h3>
                            <p className="card__info__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Suscipit, quae. Aut laudantium, pariatur</p>
                            <button className="card__info__button">Explore more</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <img className="card__img" src="cardImage.png" alt="Card Image" />
                        <div className="card__info">
                            <h3 className="card__info__title">1</h3>
                            <p className="card__info__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Suscipit, quae. Aut laudantium, pariatur</p>
                            <button className="card__info__button">Explore more</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <img className="card__img" src="cardImage.png" alt="Card Image" />
                        <div className="card__info">
                            <h3 className="card__info__title">1</h3>
                            <p className="card__info__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Suscipit, quae. Aut laudantium, pariatur</p>
                            <button className="card__info__button">Explore more</button>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <img className="card__img" src="cardImage.png" alt="Card Image" />
                        <div className="card__info">
                            <h3 className="card__info__title">1</h3>
                            <p className="card__info__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Suscipit, quae. Aut laudantium, pariatur</p>
                            <button className="card__info__button">Explore more</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact">
                <div className="contact__left">
                    <img src="./media/Images/image.png" alt="" />
                </div>
                <div className="contact__right">
                    <div className="contact__right__title">
                        <h3>Contact Me</h3>
                    </div>
                    <form className="form" action="/">
                        <label htmlFor="nameInp">Name</label>
                        <input id="nameInp" className="form-field" name="name" type="text" required>
                        <label htmlFor="emailInp">Email</label>
                        <input id="emailInp" className="form-field" name="email" type="email" required>
                        <div className="form__text">
                            <label htmlFor="message">Message</label>
                            <br />
                            <textarea name="message" id="message" cols={30} rows={10}></textarea>
                        </div>
                        <button className="form--submit" type="submit">Send</button>
                    </form>
                </div>
            </section>
        </main>
    </>
}