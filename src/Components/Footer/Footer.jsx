import React from 'react';
import './Footer.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row pt-5 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-3">
                            <div className='position-relative'>
                                <a class="navbar-brand text-white fs-2" href="#">Akanksh<span className='text-uppercase'>a</span></a>
                                <img src={theme_pattern} className='position-absolute w-75 bottom-0 start-0 theme-pattern-img' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-8">
                            <p className='fs-5'>I am a frontend developer from India with 3 years of experience in companies like Algogenix, Hariox.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-2">
                    <div class="input-container">
                        <i class="fa fa-user icon"></i>
                        <input class="input-field" type="text" placeholder="Username" />
                    </div>
                </div>
                <div className="col-6 col-md-2 ">
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 col-md-6">
                    <p><i class="fa-regular fa-copyright"></i> 2024 Akanksha Goswami. All rights reserved.</p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-4">
                            <p>
                                Terms of service
                            </p>
                        </div>
                        <div className="col-4">
                            <p>Privacy Policy</p>
                        </div>
                        <div className="col-4">
                            Connect with me
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;