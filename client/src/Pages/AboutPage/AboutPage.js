import { Page } from '../../components/Page/Page'
import profile_color from '../../assets/img/jose_img_2.jpg'
import './AboutPage.scss'

export const AboutPage = () => (
  <Page>
    <section className="about">
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
        <p className="about__content__text">My name is Jose, I am a Systems Engineer, computer programmer,
          and full stack web developer. Excited about learning modern technologies, as well as industry trends. Ever since I finished my education at college, I have worked for different companies in administrative positions and IT support,
          but then I realized my passion is web development,
          and decided to hone my programming skills through
          self-study as well as coding bootcamp BrainStation.
        </p>
        <h3 className="about__content__subtitle">Technologies I have been working with recently</h3>
        <div className="about__content__technologies">
          <p className="about__content__technologies__item">
            <i className="devicon-html5-plain-wordmark about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-css3-plain-wordmark about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-javascript-plain about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-react-original-wordmark about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-redux-original about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-nodejs-plain about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-express-original about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-dotnetcore-plain about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-graphql-plain-wordmark about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-sequelize-plain about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-socketio-original-wordmark about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-azure-plain-wordmark about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-nginx-original about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-postgresql-plain about__content__technologies__item__icon"></i>
          </p>
          <p className="about__content__technologies__item">
            <i className="devicon-microsoftsqlserver-plain-wordmark about__content__technologies__item__icon"></i>
          </p>
        </div>
      </div>
    </section>
  </Page>
)