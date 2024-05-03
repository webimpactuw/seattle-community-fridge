import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import emailIcon from '../assets/mail.png';
import phoneIcon from '../assets/phone.png';
import socialIcon from '../assets/social.png';


  export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_q14kl8e', 'template_efygs8h', form.current, {
          publicKey: 'OyqcDk5mQJswQ1GFY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div className="contact-container">
            <h2>Get in touch</h2>
            <div className="contact-content">
                
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="user_name" />
                        <div className="line"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="user_email" />
                        <div className="line"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"/>
                        <div className="line"></div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
                
                <div className="contact-info">
                    <div className="info-item">
                        <img src={emailIcon} alt="Email" />
                        <div>
                            <p>Email</p>
                            <a className="contact-detail" href="mailto:seattlecommunityfridge@gmail.com" target="_blank" rel="noopener noreferrer">
                              seattlecommunityfridge@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="info-item">
                        <img src={phoneIcon} alt="Phone" />
                        <div>
                            <p>Phone</p>
                            <p className="contact-detail">206</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <img src={socialIcon} alt="Social" />
                        <div>
                            <p>Social</p>
                            <a className="contact-detail" href="https://www.facebook.com/SeattleCommunityFridge/" target="_blank" rel="noopener noreferrer">
                            Facebook
                            </a>
                            <a className="contact-detail" href="https://www.instagram.com/seattlecommunityfridge/?hl=en" target="_blank" rel="noopener noreferrer">
                              Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;