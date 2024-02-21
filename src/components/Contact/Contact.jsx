import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.png';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';

function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0nslyse', 'template_lbm8307', form.current, '_u52e0N8Zl969dnrL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="contact_wrapper">
                        <div className="contact_col">
                            <div className="contact_image">
                                <img src={ContactImage} alt="Contact" />
                            </div>
                        </div>
                        <div className="contact_col">
                            <h2>Contact US</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="input_wrapper">
                                    <input type="text" name="from_name" className="form-control" placeholder="Your Name..." required id="name" />
                                </div>
                                <div className="input_wrapper">
                                    <input type="text" className="form-control" name='phone' placeholder="Your Phone..." />
                                </div>
                                <div className="input_wrapper">
                                    <input type="email" className="form-control"name='email' placeholder="Your Email..." />
                                </div>
                                <div className="input_wrapper">
                                    <textarea placeholder="Write a Message..." name='message' className="form-control" ></textarea>
                                </div>
                                <div className="btn_wrapper">
                                    <button type="submit" className="btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;