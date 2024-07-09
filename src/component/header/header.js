import React from 'react';
import logo  from '../../images/Logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { NavLink , useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authslice';
import { showtoast } from "../../redux/slice/toastslice";


const Header = () => {
    const isauth = useSelector((state) => state.auth.isauth);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {countitem} = useSelector((state) => state.cart);
    
    return(
        <>
        {/* Main navbar container */}
        <div className='navbar navbar-expand-lg navbar-dark bg-dark px-4 py-0'>
            {/* Logo and mobile menu toggle */}
            <div className='col-12 col-lg-3 py-2 d-flex justify-content-between align-items-center'>
                <NavLink className='navbar-brand' href='/'>
                    <img src={logo} className='img-fluid' alt='logo' />
                </NavLink>
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
                        {isauth ? (
                        <div className="btn-group w-100">
                        <button type="button" className="btn text-truncate btn-warning dropdown-toggle fw-bold" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon className='me-3' icon={faUser} />
                          {user.name}
                        </button>
                        <div className="dropdown-menu">
                          <NavLink className="dropdown-item bg-white text-black" href="#">Profile</NavLink>
                          <NavLink className="dropdown-item bg-white text-black" href="#">Orders</NavLink>
                          <NavLink className="dropdown-item bg-white text-black" onClick={() => dispatch(logout(navigate, showtoast)) }>Logout</NavLink>
                          
                        </div>
                      </div>
                        ) : (
                            <NavLink id='loginpage' className='nav-link bg-warning fw-bold rounded-3 fs-5 p-2' to='/login'
                            >Login</NavLink>
                        )}


                        

                    </div>
                    <div className='nav-item text-center position-relative'>
                        <NavLink id='cartpage' to='/cart' className='nav-link text-warning fs-3' >
                            <FontAwesomeIcon className='cart ' icon={faCartShopping}/>
                        </NavLink>
                        {countitem > 0 && (       
                        <span className="badge bg-danger rounded-5 fs-6 position-absolute top-0 start-100 translate-middle">
                        {countitem}
                    </span>
                    )}
                    </div>
                    <div className='nav-item w-25 text-center'>
                        <NavLink id='adminpage' to='/admin' className='nav-link bg-warning fw-bold rounded-3  p-2'
                            >Admin</NavLink>
                    </div>
                </div>
            </div>
        </div>

        {/* Secondary navigation bar */}
        <nav className='nav nav-pills justify-content-center bg-body-secondary bg-opacity-75 px-4 py-0'>
            
            {/* Home link */}
            <li className='nav-item mx-1'>
                <NavLink id='homepage'
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    aria-current='page'
                    to='/home'>Home</NavLink>
            </li>
            
            {/* All Product link */}
            <li className='nav-item mx-1'>
                <NavLink id='allproduct'
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    aria-current='page'
                    to='/product/allproduct'>All Product</NavLink>
            </li>

            {/* Women dropdown menu */}
            <li className='nav-item dropdown mx-1'>
                <a className='nav-link dropdown-toggle py-1 text-black fs-5 fw-bold'
                    href="/"
                    aria-expanded='false' role='button'>Women
                </a>

                <ul className='dropdown-menu fs-5 fw-bold'>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="all_women" 
                            to="/product/women/all">All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className='dropdown-item' 
                            id="women_dresses" 
                            to="/product/women/dresses">Dresses
                        </NavLink>
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
                <NavLink id='contactpage' 
                    className='nav-link py-1 text-black fs-5 fw-bold'
                    to="/contactus">Contact</NavLink>
            </li>
        </nav>
        </>
    );
}

export default Header;