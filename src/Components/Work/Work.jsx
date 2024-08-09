import React from 'react';
import './Work.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import youtube_clone_img from '../../assets/youtube_clone_img.jpg';
import youtube_clone_img1 from '../../assets/youtube_clone_img1.jpg';
import youtube_clone_img2 from '../../assets/youtube_clone_img2.jpg';

const Work = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-4 position-relative text-center">
                            <h1 className='title'>My Latest Work</h1>
                            <img src={theme_pattern} className='img-fluid position-absolute bottom-0 theme-pattern-img w-25' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 mywork-container">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-md-0 mb-5">
                            <a href="https://github.com/AkankshaGoswami/youtube-clone" target='blank'>
                                <img src={youtube_clone_img} className='img-fluid' alt="" />
                            </a>
                        </div>
                        <div className="col-12 col-md-4 mb-md-0 mb-5">
                            <a href="https://github.com/AkankshaGoswami/youtube-clone" target='blank'>
                                <img src={youtube_clone_img1} className='img-fluid' alt="" />
                            </a>
                        </div>
                        <div className="col-12 col-md-4 mb-md-0 mb-5">
                            <a href="https://github.com/AkankshaGoswami/youtube-clone" target='blank'>
                                <img src={youtube_clone_img2} className='img-fluid' alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work