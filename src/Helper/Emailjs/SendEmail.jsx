import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './SendEmail.css';


const SendEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_PUBLIC_KEY}`
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className='d-flex flex-column' ref={form} onSubmit={sendEmail}>

            <input className='mt-3 mb-4 p-2 border-0 bg-light' type="text" name="from_name" placeholder='Name' />

            <input className='mb-4 p-2 border-0 bg-light' type="email" name="from_email" placeholder='Email' />

            <input className='mb-4 p-2 border-0 bg-light' type="text" name="from_phoneNumber" placeholder='Phone Number' />

            <textarea className='mb-4 p-3 border-0 bg-light' name="message" placeholder='Comment' />

            <input className='button w-25' type="submit" value="Send" />

        </form>
    )
}

export default SendEmail