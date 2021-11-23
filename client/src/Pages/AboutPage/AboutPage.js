import { Page } from '../../components/Page/Page'
import profile_color from '../../assets/img/jose_img_color.jpg'
import './AboutPage.scss'

export const AboutPage = () => (
    <Page>
        <section class="about">
            <div>
                <div className="about__photo">
                    <img src={profile_color} alt="jose_img" className="about__photo__img"/>
                </div>
                <div className="about__actions">
                    <a href="https://github.com/jmramirez" target="_blank" rel="noopener noreferrer" className="about__actions__button-social"><i className="fab fa-github main-info__social__icon"></i></a>
                    <a href="https://www.linkedin.com/in/jmramirez31/" target="_blank" rel="noopener noreferrer" className="about__actions__button-social"><i className="fab fa-linkedin main-info__social__icon"></i></a>
                </div>
            </div>
            <div className="about__content">
                <h2 className="about__content__title">About Me</h2>
                <h3 className="about__content__subtitle">Who am I?</h3>
                <p className="about__content__text">My name is Jose, I’m a Systems Engineer, computer programmer,
                    and full stack web developer. Excited about learning new technologies, as well as industry trends. Ever since I finished my education at college, I have worked for many companies in administrative positions and IT support,
                    but then I realized my passion is web development,
                    and decided to hone my programming skills through
                    self-study as well as coding bootcamp Brainstation.
                </p>
                <h3 className="about__content__subtitle">Technologies I've been working with recently</h3>
                <div className="about__content__technologies">
                    <p className="about__content__technologies__item">Html5</p>
                    <p className="about__content__technologies__item">CSS</p>
                    <p className="about__content__technologies__item">React</p>
                    <p className="about__content__technologies__item">Redux</p>
                    <p className="about__content__technologies__item">JavaScript</p>
                    <p className="about__content__technologies__item">Node</p>
                    <p className="about__content__technologies__item">C#</p>
                    <p className="about__content__technologies__item">ASP.NET</p>
                    <p className="about__content__technologies__item">.NET Core</p>
                    <p className="about__content__technologies__item">Entity Framework</p>
                    <p className="about__content__technologies__item">SignalR</p>
                    <p className="about__content__technologies__item">Azure</p>
                    <p className="about__content__technologies__item">NGINX</p>
                    <p className="about__content__technologies__item">Sql Server</p>
                    <p className="about__content__technologies__item">PostgreSQL</p>
                </div>
            </div>
        </section>
    </Page>
)