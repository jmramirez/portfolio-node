import './ContactPage.scss'
import { Page } from '../../components/Page/Page'

export const ContactPage = () => {
    return(
        <Page>
            <section className="contact">
                <h1 className="contact__title">Contact Me</h1>
                <form className="contact__form" asp-page="'./Contact" method="post" enctype="multipart/form-data">
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Name</label>
                        <input className="contact__form__controls_input" type="text" asp-for="Email.Name"/>
                    </div>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Email</label>
                        <input className="contact__form__controls_input" type="text" asp-for="Email.Email"/>
                    </div>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Subject</label>
                        <input className="contact__form__controls_input" type="text"  asp-for="Email.Subject"/>
                    </div>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Message</label>
                        <textarea className="contact__form__controls_input contact__form__controls_input--text"  asp-for="Email.Message"></textarea>
                    </div>
                    <input type="submit" className="contact__form__controls__submit" value="Submit"/>
                </form>
            </section>
        </Page>
    )
}