import classes from './contact-form.module.css'
import Notification from '../ui/notification';
import { useState, useEffect } from 'react';

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong!")
    }
}

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState(); //'Pending', 'success' or 'error'
    const [requestError, setRequestError] = useState();


    useEffect(() => {

        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);
    // Function to handle form submission
    async function sendMessageHandler(event) {
        event.preventDefault();

        setRequestStatus('pending');

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            });
            setRequestStatus('success');
            setEnteredMessage('');
            setEnteredEmail();
            setEnteredName('');
        } catch (error) {
            setRequestError(error.message)
            setRequestStatus('error');
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        };
        //    console.log(notification)
    }


    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success',
            message: 'message sent successfully'
        };
        // console.log(notification)
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error',
            message: requestError,
        };
        // console.log(notification)
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
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </section>
    );
}

export default ContactForm;