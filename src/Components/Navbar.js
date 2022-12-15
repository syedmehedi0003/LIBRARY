import React from 'react';
import img1 from '../images/Capture3.PNG';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <div className='navbar pb-3'>
            <div className='container px-5 content'>
                <div className='d-flex'>
                    <img src={img1} alt="" />
                    <p className='font-monospace'>
                        <hr />
                        LIBRARY
                        <hr />
                    </p>

                    <p className='nav-button'>
                        <a href="">My Books</a>
                    </p>

                    <p className='nav-button'>
                        <a href="">Browse</a>
                    </p>

                    <div class="input-group input">
                        <span class="input-group-text" >All</span>
                        <input type="text" class="form-control" placeholder="Search" />
                    </div>


                    <p className='nav-button'>
                        <a href="">Log In</a>
                    </p>

                    <p className='sign-up'>
                        <a href="">Sign Up</a>
                    </p>



                    <p className='m-4 pt-2'> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </p>
                </div>

            </div>
        </div>
    );
};

export default Navbar;