import React from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <div className='position-relative'>
                    <a class="navbar-brand text-white fs-2" href="#">Akanksh<span className='text-uppercase'>a</span></a>
                    <img src={theme_pattern} className='position-absolute w-50 end-0 bottom-0 theme-pattern-img' alt="" />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span className='text-white fs-3'><i class="fa-solid fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn navbar-btn" type="submit">Contact Me</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar