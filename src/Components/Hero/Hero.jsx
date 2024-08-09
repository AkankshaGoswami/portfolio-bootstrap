import React from 'react';
import './Hero.css';
import Profile_Img from '../../assets/Profile_Img.jpg'

const Hero = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-6 text-center hero">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6">
                            <img src={Profile_Img} className='img-fluid rounded-circle profile-img' alt="" />
                        </div>
                    </div>
                    <h1 className='mt-4 fw-bold'><span>I'm Akanksha Goswami,</span> Frontend Developer Based In India.</h1>
                    <p className='fs-5 my-4'>I am a frontend developer from Noida, India with 3 years of experience.</p>
                    <button className='hero-contact-btn me-3 mb-4 mb-md-0'>Contact with Me</button>
                    <button className='hero-resume-btn'>My Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;