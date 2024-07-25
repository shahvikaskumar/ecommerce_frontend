import { NavLink, useNavigate} from 'react-router-dom';
import logo from '../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes,  faHome, faRightFromBracket, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authslice';
import { showtoast } from '../../redux/slice/toastslice';
import { setmenucanvas } from '../../redux/slice/headerslice';
import Adminmenucanvas from './adminmenucanvas';

 
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    
    // Show menu handler
    const handlemenushow = () => dispatch(setmenucanvas(true));      
    
    return (
        <>
        <nav className='p-0  navbar navbar-expand-lg navbar-dark bg-dark flex-lg-column custom-min-vh-100'>
            <div className='container-fluid px-0 py-2'>
            <button className="navbar-toggler col-2 col-sm-1 " type="button" onClick={handlemenushow} >
                
                <span className="navbar-toggler-icon"></span> 
                </button>
                <Adminmenucanvas />
                <NavLink className='navbar-brand text-center col-10 col-sm-11 fs-2 fw-bold me-0' activeclassname= 'active-link' to="/admin">
                    <img src={logo}  className='img-fluid' alt='logo'/>
                </NavLink> 
            </div>

            
            <div className="collapse mt-4 navbar-collapse flex-column" id="navbarsupportedcontent">
                    <ul className="navbar-nav mx-3 mr-auto text-start flex-column w-100">
                                    
                        <li className="nav-item mx-2 mb-2">
                            <NavLink className="nav-link fs-4"  activeclassname="active-link" to="/admin/dashboard">
                            <FontAwesomeIcon className='me-4' icon={faHome} />
                            Dashboard
                            </NavLink>
                        </li>

                        <li className="nav-item mx-2 mb-2">
                            <NavLink className="nav-link fs-4"  activeclassname="active-link" to="/admin/orders">
                            <FontAwesomeIcon className='me-4' icon={faShoppingBasket} />
                            Orders
                            </NavLink>
                        </li>

                        <li className="nav-item mx-2 mb-2">
                            <NavLink className="nav-link fs-4"  activeclassname="active-link" to="/admin/customers">
                            <FontAwesomeIcon className='me-4' icon={faUser} />
                            Customers
                            </NavLink>
                        </li>

                        <li className="nav-item mx-2 mb-2">
                            <NavLink className="nav-link fs-4"  activeclassname="active-link" to="/admin/products">
                            <FontAwesomeIcon className='me-4' icon={faCubes} />
                            Products
                            </NavLink>
                        </li>

                        <li className="nav-item mx-2 mb-2">
                            <NavLink className="nav-link fs-4" onClick={() => dispatch(logout(navigate, showtoast))}  activeclassname="active-link" to="/admin/login">
                            <FontAwesomeIcon className='me-4' icon={faRightFromBracket} />
                            Logout
                            </NavLink>
                        </li>
                        </ul>
                    </div>                
        </nav>        
        </>
    )
};

export default Navbar;