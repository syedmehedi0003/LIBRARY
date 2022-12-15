import React from 'react';
import './Footer.css';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

import logo from '../images/Capture.PNG';



const Footer = () => {
    return (
        <div className='footer home'>
            <div className='container p-5'>

                {/* book list 9 start  */}

                <div className='px-5'>

                    <div class="row gx-2 ">



                        <div class="col">
                            <p className='fs-5 text fw-semibold'>Open Library
                            </p>

                            <div className='footer-tag'>
                                <a href="#">Vision</a> <br />
                                <a href="#">Volunteer</a> <br />
                                <a href="#">Partner With Us</a> <br />
                                <a href="#">Careers</a> <br />
                                <a href="#">Blog</a> <br />
                                <a href="#">Terms of Service</a> <br />
                                <a href="#">Donate</a>

                            </div>
                        </div>


                        <div class="col">
                            <p className='fs-5 text fw-semibold'>Discover
                            </p>

                            <div className='footer-tag'>
                                <a href="#">Home</a> <br />
                                <a href="#">Books</a> <br />
                                <a href="#">Authors</a> <br />
                                <a href="#">Subjects</a> <br />
                                <a href="#">Collections</a> <br />
                                <a href="#">Advanced Search</a> <br />
                                <a href="#">Return to Top</a>

                            </div>
                        </div>

                        <div class="col">
                            <p className='fs-5 text fw-semibold'>Develop
                            </p>

                            <div className='footer-tag'>
                                <a href="#">Developer Center</a> <br />
                                <a href="#"> API Documentation</a> <br />
                                <a href="#">Bulk Data Dumps</a> <br />
                                <a href="#">Writing Bots</a> <br />
                                <a href="#"> Add a Book</a> <br />

                            </div>
                        </div>

                        <div class="col">
                            <p className='fs-5 text fw-semibold'>Help
                            </p>

                            <div className='footer-tag'>
                                <a href="#">Help Center</a> <br />
                                <a href="#"> Report A Problem</a> <br />
                                <a href="#">Suggesting Edits</a> <br />

                                <div className='footer-icon'>
                                    <span> <FaTwitterSquare /></span>
                                    <span><FaGithubSquare /></span>
                                </div>

                            </div>
                        </div>

                        <div class="col">
                            <p className='fs-5 text fw-semibold'>Change Website Language
                            </p>

                            <div className='footer-tag'>
                                <a href="#">Čeština (cs)</a> <br />
                                <a href="#">Deutsch (de)</a> <br />
                                <a href="#">English (en)</a> <br />
                                <a href="#">Español (es)</a> <br />
                                <a href="#"> Français (fr)</a> <br />
                                <a href="#"> Hrvatski (hr)</a> <br />
                                <a href="#"> Português (pt)</a> <br />
                                <a href="#">తెలుగు (te)</a> <br />
                                <a href="#">  Українська (uk)</a> <br />
                                <a href="#">  中文 (zh)</a> <br />

                            </div>
                        </div>

                    </div>

                </div>

                <div className='mt-5'>
                    <hr />
                </div>


                <div className='footer-text d-flex'>
                    <img src={logo} className='img-fluid' alt="" />

                    <p>Open Library is an initiative of the <span className='underline'> Internet Archive,</span> a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other <span className='underline'> projects</span> include the <span className='underline'>Wayback Machine,</span> archive.org and  <span className='underline'>archive-it.org</span></p>
                </div>

            </div>

            {/* book list 9 end  */}
        </div>

    );
};

export default Footer;