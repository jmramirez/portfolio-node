import './HomePage.scss'
import { Page } from '../../components/Page/Page'
import profile from '../../assets/img/jose_img_2.jpg'

export const HomePage = () => (
    <Page>
        <section className="profile">
            <div className="profile__photo">
                <img src={profile} alt="jose_img" className="profile__photo__image" />
            </div>
            <div className="profile__info">
                <h1 className="profile__info__heading">Jose <span>Ramirez</span></h1>
                <h3 className="profile__info__sub-heading">Full Stack Developer</h3>
                <p className="profile__info__paragraph">I am a full stack developer with experience with JavaScript, Node.js, React.js, .NET, .Net Core, C# and much more.</p>
            <div className="profile__info__action">
                <a href="https://github.com/jmramirez" target="_blank" rel="noreferrer" className="profile__info__action-button profile__info__action-button--social"><i className="fab fa-github main-info__social__icon"></i></a>
                <a href="https://www.linkedin.com/in/jmramirez31/" target="_blank" rel="noreferrer" className="profile__info__action-button profile__info__action-button--social"><i className="fab fa-linkedin main-info__social__icon"></i></a>
            <button className="profile__info__action-button profile__info__action-button--cta">Contact Me</button>
        </div>
    </div>
</section>
    </Page>
)