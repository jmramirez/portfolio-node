import './ContactPage.scss'
import { useState } from 'react'
import { formSetting } from '../../AppSettings'
import { Page } from '../../components/Page/Page'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    name: yup.string().required("Name is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required")
})


export const ContactPage = () => {
    const [serverState, setServerState] = useState()

    const handleServerResponse = (ok, msg) => {
        setServerState({ok,msg})
    }

    const handleSubmit = (values, actions) => {
        axios({
            method: "POST",
            url: `https://formspree.io/f/${formSetting}`,
            data: values
        })
        .then(response => {
            actions.setSubmitting(false)
            actions.resetForm()
            handleServerResponse(true, "Thanks for contact me!")
        })
        .catch(error => {
            actions.setSubmitting(false)
            handleServerResponse(false, error.response.data.error)
        })
    }

    return(
        <Page>
            <section className="contact">
                <h1 className="contact__title">Contact Me</h1>
                <Formik initialValues={{email:"", name:"", subject:"", message:""}} onSubmit={handleSubmit} validationSchema={formSchema}>
                    {({ isSubmitting }) =>(
                        <Form className="contact__form" id="fs-frm" noValidate>
                            <div className="contact__form__controls">
                                <label htmlFor="name" className="contact__form__controls__label" >Name</label>
                                <Field id="name" name="name" className="contact__form__controls_input" />
                                <ErrorMessage name="name" className="contact__form__error" component="p" />
                            </div>
                            <div className="contact__form__controls">
                                <label htmlFor="email" className="contact__form__controls__label">Email</label>
                                <Field id="email" type="email" name="email" className="contact__form__controls_input" />
                                <ErrorMessage name="email" className="contact__form__error" component="p" />
                            </div>
                            <div className="contact__form__controls">
                                <label className="contact__form__controls__label">Subject</label>
                                <Field  id="subject" name="subject"  className="contact__form__controls_input"/>
                                <ErrorMessage name="subject" className="contact__form__error" component="p" />
                            </div>
                            <div className="contact__form__controls">
                                <label className="contact__form__controls__label">Message</label>
                                <Field id="message" name="message" className="contact__form__controls_input contact__form__controls_input--text" component="textarea" />
                                <ErrorMessage name="message" className="contact__form__error" component="p" />
                            </div>
                            <button type="submit" className="contact__form__controls__submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            {serverState && (
                                <p className={!serverState.ok ? "contact__form__error" : "contact__form__success"}>{serverState.msg}</p>
                            )}
                        </Form>
                    )}
                </Formik>
            </section>
        </Page>
    )
}