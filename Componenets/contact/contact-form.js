import classes from './contact-form.module.css'
import { useState } from 'react';

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')


    //Optional : add client-side validation.
    function sendMessageHandler(event) {
        event.preventDefault();

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    return (
        <section className={classes.contact}>
            <h1> How can i help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">your email</label>
                        <input type="email" id='email' required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">your name</label>
                        <input type="text" id='name' required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">your message</label>
                    <textarea id="message" rows="5" required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}></textarea>
                    <div className={classes.actions}><button>send message</button></div>
                </div>

            </form>
        </section>
    );
}

export default ContactForm;