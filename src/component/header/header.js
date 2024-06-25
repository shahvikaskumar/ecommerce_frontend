import React from 'react';
import logo  from '../../images/Logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
    return(
        <>
        {/* Main navbar container */}
        <div className='navbar navbar-expand-lg navbar-dark bg-dark px-4 py-0'>
            {/* Logo and mobile menu toggle */}
            <div className='col-12 col-lg-3 py-2 d-flex justify-content-between align-items-center'>
                <a className='navbar-brand' href='/'>
                    <img src={logo} className='img-fluid' alt='logo' />
                </a>
                <button className='navbar-toggler'
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarscroll"
                    aria-controls='navbarscroll' aria-expanded='false'
                    aria-label='Toggle Navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
            </div>

            {/* Navbar links and search bar */}
            <div id='navbarscroll' className='collapse navbar-collapse col-lg-9'>
                
                {/* Search bar */}
                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                    <div className='input-group'>
                        <input className='form-control fs-5' type='search'
                            placeholder='Search' aria-label='Search' />
                        <input className='btn fs-5 fw-bold btn-warning w-25'
                            type='button' value='Search' id='search' />
                    </div>
                </div>

                {/* Login and cart icons */}
                <div className='col-lg-6 py-3 m-0 d-flex justify-content-evenly align-items-center'>
                    <div className='nav-item w-25 text-center'>
                        <a id='loginpage' className='nav-link bg-warning fw-bold rounded-3 fs-5 p-2' href='/'
                            >Login</a>
                    </div>
                    <div className='nav-item text-center'>
                        <a id='cartpage' href='/' className='nav-link text-warning fs-2'>
                            <FontAwesomeIcon className='cart' icon={faCartShopping}/>
                        </a>       
                            
                    </div>
                    <div className='nav-item w-25 text-center'>
                        <a id='loginpage' className='nav-link bg-warning fw-bold rounded-3 fs-5 p-2' href='/'
                            >Admin</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Secondary navigation bar */}
        <nav className='nav nav-pills justify-content-center bg-body-secondary bg-opacity-75 px-4 py-0'>
            
            {/* Home link */}
            <li className='nav-item mx-1'>
                <a id='homepage'
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    aria-current='page'
                    href='/'>Home</a>
            </li>
            
            {/* All Product link */}
            <li className='nav-item mx-1'>
                <a id='allproduct'
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    aria-current='page'
                    href='/'>All Product</a>
            </li>

            {/* Women dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <a className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold'
                    href="/"
                    aria-expanded='false' role='button'>Women
                </a>

                <ul className='dropdown-menu fs-5 fw-bold'>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="all_women" 
                            href="/">All
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="women_dresses" 
                            href="/">Dresses
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="women_pants" 
                            href="/">Pants
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="women_skirts" 
                            href="/">Skirts
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="women_gowns" 
                            href="/">Gowns
                        </a>
                    </li>
                </ul>
            </li>

            {/* Men dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <a className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold'
                    href="/"
                    aria-expanded='false' role='button'>Men
                </a>

                <ul className='dropdown-menu fs-5 fw-bold'>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="all_men" 
                            href="/">All
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="men_shirts" 
                            href="/">Shirts
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="men_pants" 
                            href="/">Pants
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="men_trousers" 
                            href="/">Trousers
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="men_jeans" 
                            href="/">Jeans
                        </a>
                    </li>
                </ul>
            </li>

            {/* Kids dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <a className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold'
                    href="/"
                    aria-expanded='false' role='button'>Kids
                </a>

                <ul className='dropdown-menu fs-5 fw-bold'>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="all_kid" 
                            href="/">All
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="kid_tops" 
                            href="/">Tops
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="kid_bottoms" 
                            href="/">Bottoms
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="kid_onepcs" 
                            href="/">One Pieces
                        </a>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item' 
                            id="kid_inners" 
                            href="/">Innerwears
                        </a>
                    </li>
                </ul>
            </li>

            {/* Contact link */}
            <li className='nav-item mx-1'>
                <a id='contactpage' 
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    href="/">Contact</a>
            </li>
        </nav>
        </>
    );
}

export default Header;