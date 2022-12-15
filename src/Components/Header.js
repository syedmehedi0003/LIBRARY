import React from 'react';
import './Header.css';
import img1 from '../images/Capture1.PNG';
import img2 from '../images/Capture2.PNG'



// import { FontAwesomeIcon } from "react-icons/fa";
{/* <FontAwesomeIcon icon="fa-regular fa-landmark" /> */ }

const Header = () => {
    return (
        <div className='header'>
            <div className='container px-5 d-flex header-btn'>



                <p className='mt-2'>
                    <img src={img1} alt="" className='img-fluid' />
                    INTERNET ARCHIVE</p>

                <div className='mt-2 translate'>
                    <a href="">Donate</a>

                    <img src={img2} alt="" className='ms-4' />

                </div>



            </div>
        </div>
    );
};

export default Header;