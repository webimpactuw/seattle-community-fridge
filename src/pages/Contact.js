import React from 'react';
import '../styles/Contact.css';
import emailIcon from '../assets/mail.png';
import phoneIcon from '../assets/phone.png';
import socialIcon from '../assets/social.png';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Get in touch</h2>
            <div className="contact-content">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                        <div className="line"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <div className="line"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                        <div className="line"></div>
                    </div>
                    <button type="submit">Submit</button>
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