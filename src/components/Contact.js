import React from 'react';
import './Contact.css';

const Contact = () => {
    console.log("Enter Contact");
    const fb_path = process.env.PUBLIC_URL + '/images/fb.png';
    const linkedin_path = process.env.PUBLIC_URL + '/images/linkedin.png';
    const photo = process.env.PUBLIC_URL + '/images/self.jpg';
    return (
        <div className="contact-container">
            <div className="title">
                <h1>Welcome to the Contact Page</h1>
                <div className="logo-container">
                    <a href="https://www.facebook.com/">
                        <img className="logo" src={fb_path} alt="fb_logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/xinxinxin-l/">
                        <img className="logo" src={linkedin_path} alt="linkedin_logo" target/>
                    </a>
                </div>
            </div>
            <div className="personal-info">
                <div className="self-pic">
                    <img src={photo} alt="self-pic" width="640" height="640" />
                </div>
            </div>
            <h3> Tel: +1 858-233-4567</h3>
            <h3> Email: xxxxasd@gmail.com</h3>
            <p><a href={process.env.PUBLIC_URL}>Back to Home</a></p>
        </div>
    );
}

export default Contact;