import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-4 position-relative text-center">
                            <h1 className='title'>Get In Touch</h1>
                            <img src={theme_pattern} className='img-fluid position-absolute bottom-0 theme-pattern-img w-25' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 mb-md-0 mb-5">
                    <div className='contact-left'>
                        <h1>Let's talk</h1>
                        <p className='mt-3'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2 col-md-1">
                            <img src={mail_icon} className='img-fluid' alt="" />
                        </div>
                        <div className="col-10 col-md-11">
                            <p>akankshagoswami96.ag59@gmail.com</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-2 col-md-1">
                            <img src={call_icon} className='img-fluid' alt="" />
                        </div>
                        <div className="col-10 col-md-11">
                            <p>9068197608</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-2 col-md-1">
                            <img src={location_icon} className='img-fluid' alt="" />
                        </div>
                        <div className="col-10 col-md-11">
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 contact-right">
                     <p>Your Name</p>
                     <input type="text" placeholder='Enter Your Name' />
                     <p className='mt-3'>Your Email</p>
                     <input type="email" placeholder='Enter Your Email' />
                     <p className='mt-3'>Write Your Message Here</p>
                     <textarea rows='8'></textarea>
                     <button className='mt-3'>Submit Now</button>
                </div>
            </div>
        </div>
    )
}

export default Contact