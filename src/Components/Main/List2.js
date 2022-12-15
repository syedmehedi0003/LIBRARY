import React from 'react';
import './Main.css';


import book1 from '../../images/book1.jpg';
import book2 from '../../images/book2.jpg';
import book3 from '../../images/book3.jpg';
import book4 from '../../images/book4.jpg';
import book5 from '../../images/book5.jpg';

const List2 = () => {
    return (
        <div className='home'>
            <div className='container px-5'>
                <div className='border2'>
                    <h4 className=' fw-semibold' id="book-list2">Trending Books</h4>


                    <div className='home p-3'>

                        <div class="row gx-4 books">

                            <div class="col">
                                <div class="p-2 border book-btn1">
                                    <img src={book1} className="img-fluid mb-3" alt="" />

                                    <a href="#" className="btn">Preview</a>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-2 border book-btn2">
                                    <img src={book2} className="img-fluid mb-3" alt="" />

                                    <a href="#" className="btn">Join Waitlist </a>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-2 border book-btn3">
                                    <img src={book3} className="img-fluid mb-3" alt="" />

                                    <a href="#" className="btn">Not in Library </a>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-2 border book-btn3">
                                    <img src={book4} className="img-fluid mb-3" alt="" />

                                    <a href="#" className="btn">Not in Library </a>
                                </div>
                            </div>


                            <div class="col">
                                <div class="p-2 border book-btn3">
                                    <img src={book5} className="img-fluid mb-3" alt="" />

                                    <a href="#" className="btn">Not in Library </a>
                                </div>
                            </div>


                            <div class="col">
                                <div class="p-2 border book-btn3">
                                    <img src={book3} className="img-fluid mb-3" alt="" />

                                    <a href="#" className="btn">Not in Library </a>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default List2;