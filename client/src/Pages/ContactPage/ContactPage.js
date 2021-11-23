import './ContactPage.scss'
import { Page } from '../../components/Page/Page'
import { useForm } from 'react-hook-form'

export const ContactPage = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const onSubmit = data => console.log(data) 

    return(
        <Page>
            <section className="contact">
                <h1 className="contact__title">Contact Me</h1>
                <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Name</label>
                        <input className="contact__form__controls_input" type="text" {...register("name", {required: true})}/>
                        {errors.name &&( <p className="contact__form__error">You must enter Name</p>)}
                    </div>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Email</label>
                        <input className="contact__form__controls_input" type="text" {...register("email", {required: true})} />
                        {errors.email &&( <p className="contact__form__error">You must enter Email</p>)}
                    </div>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Subject</label>
                        <input className="contact__form__controls_input" type="text"  {...register("subject", {required: true})}/>
                        {errors.subject &&( <p className="contact__form__error">You must enter Subject</p>)}
                    </div>
                    <div className="contact__form__controls">
                        <label className="contact__form__controls__label">Message</label>
                        <textarea className="contact__form__controls_input contact__form__controls_input--text" {...register("message", {required: true})}></textarea>
                        {errors.message &&( <p className="contact__form__error">You must enter message</p>)}
                    </div>
                    <input type="submit" className="contact__form__controls__submit" value="Submit"/>
                </form>
            </section>
        </Page>
    )
}