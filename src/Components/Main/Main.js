import React from 'react';
import './Main.css';


import img1 from '../../images/Capture4.PNG';
import img2 from '../../images/Capture5.PNG';
import img3 from '../../images/Capture6.PNG';

import book1 from '../../images/booklist-1/book1.jpg';
import book2 from '../../images/booklist-1/book2.jpg';
import book3 from '../../images/booklist-1/book3.jpg';
import book4 from '../../images/booklist-1/book4.jpg';
import book5 from '../../images/booklist-1/book5.jpg';

import book6 from '../../images/booklist-2/book1.jpg';
import book7 from '../../images/booklist-2/book2.jpg';
import book8 from '../../images/booklist-2/book3.jpg';
import book9 from '../../images/booklist-2/book4.jpg';
import book10 from '../../images/booklist-2/book5.jpg';
import book11 from '../../images/booklist-2/book6.jpg';

import book12 from '../../images/booklist-3/book1.jpg';
import book13 from '../../images/booklist-3/book2.jpg';
import book14 from '../../images/booklist-3/book3.jpg';
import book15 from '../../images/booklist-3/book4.jpg';
import book16 from '../../images/booklist-3/book5.jpg';
import book17 from '../../images/booklist-3/book6.jpg';

import book18 from '../../images/booklist-4/book1.jpg';
import book19 from '../../images/booklist-4/book2.jpg';
import book20 from '../../images/booklist-4/book3.jpg';
import book21 from '../../images/booklist-4/book4.jpg';
import book22 from '../../images/booklist-4/book5.jpg';
import book23 from '../../images/booklist-4/book6.jpg';

import book24 from '../../images/booklist-5/book1.jpg';
import book25 from '../../images/booklist-5/book2.jpg';
import book26 from '../../images/booklist-5/book3.jpg';
import book27 from '../../images/booklist-5/book4.jpg';
import book28 from '../../images/booklist-5/book5.jpg';
import book29 from '../../images/booklist-5/book6.jpg';

import book30 from '../../images/booklist-6/book1.jpg';
import book31 from '../../images/booklist-6/book2.jpg';
import book32 from '../../images/booklist-6/book3.jpg';
import book33 from '../../images/booklist-6/book4.jpg';
import book34 from '../../images/booklist-6/book5.jpg';
import book35 from '../../images/booklist-6/book6.jpg';

import book36 from '../../images/booklist-7/book1.jpg';
import book37 from '../../images/booklist-7/book2.jpg';
import book38 from '../../images/booklist-7/book3.jpg';
import book39 from '../../images/booklist-7/book4.jpg';
import book40 from '../../images/booklist-7/book5.jpg';
import book41 from '../../images/booklist-7/book6.jpg';


import book42 from '../../images/browse/art.svg';
import book43 from '../../images/browse/science_fiction.svg';
import book44 from '../../images/browse/fantasy.svg';
import book45 from '../../images/browse/biographies.svg';
import book46 from '../../images/browse/recipes.svg';
import book47 from '../../images/browse/romance.svg';

import img01 from '../../images/library/img1.png';
import img02 from '../../images/library/img2.png';
import img03 from '../../images/library/img3.png';
import img04 from '../../images/library/img4.png';
import img05 from '../../images/library/img5.png';





const Main = () => {
	return (
		<div className='home '>
			<div className=' container p-5 '>
				<div className='bg-color border'>
					<h4 className='heading fw-semibold'>Welcome to Open Library</h4>

					<div class="container px-4 ">
						<div class="row gx-3 pb-3">

							<div class="col ">
								<div class="p-3 border bg-light  d-flex height align-items-center">
									<img src={img1} className="read" alt="" />

									<div className='px-3 read-text'>
										<p className='fs-5 text'>Read Free Library <br /> Books Online</p>
										<p className="small font-monospace fw-normal">Millions of books available through 											Controlled Digital Lending</p>
									</div>
								</div>
							</div>

							<div class="col ">
								<div class="p-3 border bg-light  d-flex height align-items-center">
									<img src={img2} className="read" alt="" />

									<div className='px-3 read-text'>
										<p className='fs-5 text'>Keep Track Of Your Favorite Book</p>
										<p className="small font-monospace fw-normal">Organize your Books using Lists &amp; the Reading Log</p>

									</div>
								</div>
							</div>


							<div class="col ">
								<div class="p-3 border bg-light  d-flex height align-items-center">
									<img src={img3} className="read" alt="" />

									<div className='px-3 read-text'>
										<p className='fs-5 text'>Try the virtual Library Explorer</p>
										<p className="small font-monospace fw-normal">Digital shelves organized like a physical library</p>
									</div>
								</div>
							</div>


						</div>
					</div>

					<h4 className=' fw-semibold' id="book-list">Trending Books</h4>


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

					{/* book list 2 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Classic Books</h4>


						<div className='home p-3'>

							<div class="row gx-4 books">

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book6} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book7} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Read</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book8} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Read</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book9} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Read</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book10} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Read</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book11} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Read</a>
									</div>
								</div>


							</div>

						</div>
					</div>

					{/* book list 2 end  */}


					{/* book list 3 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Books We Love</h4>


						<div className='home p-3'>

							<div class="row gx-4 books">

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book12} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book13} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book14} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book15} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book16} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book17} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

							</div>

						</div>
					</div>

					{/* book list 3 end  */}



					{/* book list 4 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Recently Returned</h4>


						<div className='home p-3'>

							<div class="row gx-4 books">

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book18} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book19} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book20} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book21} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book22} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book23} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

							</div>

						</div>
					</div>

					{/* book list 4 end  */}


					{/* book list 5 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Kids</h4>


						<div className='home p-3'>

							<div class="row gx-4 books">

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book24} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book25} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book26} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book27} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book28} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn3">
										<img src={book29} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Not in Library </a>
									</div>
								</div>

							</div>

						</div>
					</div>

					{/* book list 5 end  */}



					{/* book list 6 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Textbooks</h4>


						<div className='home p-3'>

							<div class="row gx-4 books">

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book30} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book31} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book32} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book33} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book34} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book35} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>

							</div>

						</div>
					</div>

					{/* book list 6 end  */}


					{/* book list 7 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Authors Alliance & MIT Press</h4>


						<div className='home p-3'>

							<div class="row gx-4 books">

								<div class="col">
									<div class="p-2 border book-btn3 ">
										<img src={book36} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Not in Library </a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn3">
										<img src={book37} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Not in Library </a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn1">
										<img src={book38} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Preview</a>
									</div>
								</div>

								<div class="col">
									<div class="p-2 border book-btn2 ">
										<img src={book39} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn2">
										<img src={book40} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Borrow</a>
									</div>
								</div>


								<div class="col">
									<div class="p-2 border book-btn3">
										<img src={book41} className="img-fluid mb-3" alt="" />

										<a href="#" className="btn">Not in Library </a>
									</div>
								</div>

							</div>

						</div>
					</div>

					{/* book list 7 end  */}


					{/* book list 8 start  */}

					<div className='list2'>
						<h4 className=' fw-semibold' id="book-list">Browse by Subject</h4>

						<div className=' p-3'>

							<div class="row gx-4">

								<div class="col brose-icon">
									<img src={book42} className="img-fluid mb-3" alt="" />
									<p>Art</p>
									<small className='font-monospace'>81,691 Books</small>
								</div>

								<div class="col brose-icon">
									<img src={book43} className="img-fluid mb-3" alt="" />
									<p>Science Fiction</p>
									<small className='font-monospace'>18,062 Books</small>
								</div>


								<div class="col brose-icon">
									<img src={book44} className="img-fluid mb-3" alt="" />
									<p>Fantasy</p>
									<small className='font-monospace'>13,042 Books</small>
								</div>

								<div class="col brose-icon">
									<img src={book45} className="img-fluid mb-3" alt="" />
									<p>Biographies</p>
									<small className='font-monospace'>20,558 Books</small>
								</div>

								<div class="col brose-icon">
									<img src={book46} className="img-fluid mb-3" alt="" />
									<p>Recipes</p>
									<small className='font-monospace'>9,558 Books</small>
								</div>

								<div class="col brose-icon">
									<img src={book47} className="img-fluid mb-3" alt="" />
									<p>Romance</p>
									<small className='font-monospace'>20,558 Books</small>
								</div>

							</div>

						</div>
					</div>

					{/* book list 8 end  */}


					{/* book list 9 start  */}

					<div className='list2'>
						<p id="book-list2"> <span className=' fw-semibold fs-3 text' >Around the Library</span>  Here's what's happened over the last 28 days. More  <a href="#">recent changes.</a></p>

						<div className=' p-3'>

							<div class="row gx-4">



								<div class="col library-icon">
									<img src={img01} className="img-fluid mb-3" alt="" />
									<p className='fs-5 text fw-semibold'>4,077,683
									</p>
									<small className='font-monospace'>UNIQUE VISITORS</small>
								</div>


								<div class="col library-icon">
									<img src={img02} className="img-fluid mb-3" alt="" />
									<p className='fs-5 text fw-semibold'>206,709
									</p>
									<small className='font-monospace'>NEW MEMBERS</small>
								</div>

								<div class="col library-icon">
									<img src={img03} className="img-fluid mb-3" alt="" />
									<p className='fs-5 text fw-semibold'>1,599,926
									</p>
									<small className='font-monospace'>CATALOG EDITS</small>


								</div>

								<div class="col library-icon">
									<img src={img04} className="img-fluid mb-3" alt="" />
									<p className='fs-5 text fw-semibold'>1,449
									</p>
									<small className='font-monospace'>LISTS CREATED</small>
								</div>

								<div class="col library-icon">
									<img src={img05} className="img-fluid mb-3" alt="" />
									<p className='fs-5 text fw-semibold'>455,233
									</p>
									<small className='font-monospace'>EBOOKS BORROWED</small>

								</div>

							</div>

						</div>
					</div>

					{/* book list 9 end  */}


					{/* book list 9 start  */}

					<div className='list2'>
						<p id="book-list2"> <span className=' fw-semibold fs-3 text' >About the Project</span>  </p>

						<div className=' p-3'>

							<div class="row gx-4">

								<div class="col">

									<p className='fw-semibold fs-4 text text-secondary'>Open Library is an open, editable library catalog, building towards a web page for every book ever published. <a href=""> More</a>
									</p>
									<small className='font-monospace'>Just like Wikipedia, you can contribute new information or corrections to the catalog. You can browse by subjects, authors or lists members have created. If you love books, why not help build a library?</small>
								</div>


								<div class="col">
									<p className='fs-5 text fw-semibold underline'>
										Latest Blog Posts
									</p>

									<p> <span className='underline'>2022 Review </span>- November 23, 2022 <br />
										<span className='underline'>Search for Books in your Reading Log</span> - November 23, 2022 <br />
										<span className='underline'>Improvements to the Main Navigation</span> - November 22, 2022</p>

								</div>

							</div>

						</div>
					</div>

					{/* book list 9 end  */}

				</div>


			</div>


		</div >
	);
};

export default Main;