import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BackgroundPage from './BackgroundPage';
import './Service.css'

function sendEmail(e) {
    console.log('send email is called');
    e.preventDefault();
    // service ID, template ID, target, public keys 
    emailjs.sendForm('service_03yby4n', 'template_iy6y0vh', e.target, 'bzPF9LcDwhs1Xjco6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}

const Service = () => {
    console.log("Enter Service Page");

    const [showDefaultMessage, setShowDefaultMessage] = useState(true);
    const [clickCompleted, setClickCompleted] = useState(false);

    const handleContainerClick = () => {
        setShowDefaultMessage(false);
    };

    const handleSubmitClick = () => {
        setClickCompleted(true);
    };

    return (
        <div className="ServicePage">
            <BackgroundPage image="images/background2.jpeg" />

            <div className='top-page'>
                <h1> Welcome to the service page </h1>
                <p>If you want to work with me, welcome to fill in the info bottom</p>
            </div>

            {clickCompleted ? (
                <p className="success-message">Click completed successfully!</p>
            ) : (
                <div>
                    <form onSubmit={sendEmail}>
                        <h4> Name </h4>
                        <input type="text" name="name"/> 
                        <h4> Email </h4>
                        <input type="email" name="email"/>
                        <h4> Message </h4>
                        <div className="text-container" onClick={handleContainerClick}>
                            {/* {showDefaultMessage && <p className="default-message">Click to enter message</p>} */}
                            {/* {showDefaultMessage && <p className="default-message"> Click below to enter your brief Intro </p>} */}
                            <textarea name="message" className="IntroBox" placeholder={showDefaultMessage ? "Write intro Message here": ""}/>
                        </div>

                        <button type="submit" onClick={handleSubmitClick}>Send</button>
                    </form>
                </div> 
            )}
            <div className="back-button"><a href="/">Back to Home</a></div>
        </div>
    );
}

export default Service;
