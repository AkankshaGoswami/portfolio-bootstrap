import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Profile_Img from '../../assets/Profile_Img.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-4 position-relative text-center">
                            <h1 className='title'>About Me</h1>
                            <img src={theme_pattern} className='img-fluid position-absolute bottom-0 theme-pattern-img w-25' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row my-5 py-5 d-flex justify-content-between">
                        <div className="col-12 col-md-4">
                            <img src={Profile_Img} className='img-fluid rounded' alt="" />
                        </div>
                        <div className="col-12 col-md-8 ps-2 ps-md-5 mt-md-0 mt-5">
                            <div className="about-skill">
                                <p>HTML & CSS</p><hr style={{ width: "100%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Bootstrap</p><hr style={{ width: "80%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Javascript</p><hr style={{ width: "70%" }} />
                            </div>
                            <div className="about-skill">
                                <p>MUI</p><hr style={{ width: "80%" }} />
                            </div>
                            <div className="about-skill">
                                <p>ReactJS</p><hr style={{ width: "70%" }} />
                            </div>
                            <div className="about-skill">
                                <p>NextJS</p><hr style={{ width: "50%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About