import logo  from '../../../images/Logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping,faUser, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { NavLink , useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/slice/authslice';
import { showtoast } from "../../../redux/slice/toastslice";
import { setmenucanvas, setusercanvas } from '../../../redux/slice/headerslice';
import { setsearchproduct, setsearchstr } from '../../../redux/slice/productslice';


const Navbarheader = () => {

    const isauth = useSelector((state) => state.auth.isauth);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {countitem} = useSelector((state) => state.cart); 
    const {searchstr} =useSelector((state) => state.product);    
    const handlemenushow = () => dispatch(setmenucanvas(true));      
    const handleusershow = () => dispatch(setusercanvas(true));
    const handlesearchstrchange = (e) => dispatch(setsearchstr(e.target.value));
    const handlesearchapply = () => {
        navigate('/product/allproduct');
        
        setTimeout(() => {
        dispatch(setsearchproduct(searchstr));
        }, 100);
    }
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-dark px-2 py-0'>
            {/* Logo and mobile menu toggle */}
            <div className='col-12 col-lg-3 py-2 d-flex justify-content-between align-items-center'>
                <button className='navbar-toggler'
                    type='button'
                    onClick={handlemenushow}>
                        <span className='navbar-toggler-icon'></span>
                </button>
                <NavLink className='navbar-brand py-0 w-100 text-center' to="/">
                    <img src={logo} className='img-fluid logo-style' alt='logo' />
                </NavLink>

                <button className='navbar-toggler'
                    type='button'
                    onClick={handleusershow} >
                    <FontAwesomeIcon  className='text-warning fs-2 ' icon={faUserCircle} />
                </button>
            </div>

            {/* Navbar links and search bar */}
            <div id='navbarscrolls' className='collapse py-2 navbar-collapse col-lg-9'>
                
                {/* Search bar */}
                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                    <div className='input-group'>
                        <input className='form-control' type='search' name="searchstr" id="searchstr" onChange={handlesearchstrchange} value={searchstr}
                            placeholder='Search' aria-label='Search' />
                        <input className='btn  fw-bold btn-warning w-25'
                            type='button' value='Search' id='search' onClick={handlesearchapply} />
                    </div>
                </div>

                {/* Login and cart icons */}
                <div className='col-lg-6 m-0 d-flex justify-content-evenly align-items-center'>
                    <div className='nav-item w-25 text-center'>
                        {isauth ? (
                        <div className="btn-group w-100">
                        <button type="button" className="btn text-truncate btn-warning dropdown-toggle fw-bold" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon className='me-3' icon={faUser} />
                          {user.name}
                        </button>
                        <div className="dropdown-menu">
                          <NavLink className="dropdown-item bg-white text-black" to='/user/profile'>Profile</NavLink>
                          <NavLink className="dropdown-item bg-white text-black" to="/user/orderlist">Orders</NavLink>
                          <NavLink className="dropdown-item bg-white text-black" onClick={() => dispatch(logout(navigate, showtoast)) }>Logout</NavLink>
                          
                        </div>
                      </div>
                        ) : (
                            <NavLink id='loginpage' className='nav-link bg-warning fw-bold rounded-3 p-2' to='/login'
                            >Login</NavLink>
                        )}


                        

                    </div>
                    <div className='nav-item text-center'>
                        <NavLink id='cartpage' to='/cart' className='position-relative nav-link text-warning fs-3' >
                            <FontAwesomeIcon className='cart ' icon={faCartShopping}/>
                        
                        {countitem > 0 && (       
                        <span className="badge bg-danger rounded-5 fs-6 position-absolute badge-position  translate-middle">
                        {countitem}
                        
                    </span>
                    )}
                    </NavLink>
                    </div>
                    <div className='nav-item w-25 text-center'>
                        <NavLink id='adminpage' to='/admin' className='nav-link bg-warning fw-bold rounded-3  p-2'
                            >Admin</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Navbarheader;