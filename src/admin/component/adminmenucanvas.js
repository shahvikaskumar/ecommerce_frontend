import {Offcanvas, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCubes, faDashboard, faRightFromBracket, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
import { NavLink , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setmenucanvas } from '../../redux/slice/headerslice';
import { logout } from '../../redux/slice/authslice';
import { showtoast } from '../../redux/slice/toastslice';

const Adminmenucanvas = () => {
    
    const menushow = useSelector((state) => state.header.menucanvasshow);
    const dispatch = useDispatch();    
    const navigate= useNavigate();

    // Close menu handler
    const handlemenuclose = () => {
        dispatch(setmenucanvas(false));        
    }

    return (
        <Offcanvas show={menushow} className="bg-body-secondary" onHide={handlemenuclose} style={{width:"280px"}} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav defaultActiveKey="/admin/dashboard" className="flex-column">
            <Nav.Link as={NavLink} className='text-black py-1 my-2'  to="/admin/dashboard" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faDashboard} />
                <span className='fs-2'>Dashboard</span>
            </Nav.Link>
            <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/admin/orders" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faShoppingCart} />
                <span className='fs-2'>Orders</span>
            </Nav.Link>
            
             
            <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/admin/customers" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faUser} />
                <span className='fs-2'>Customers</span>
            </Nav.Link>

            <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/admin/products" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faCubes} />
                <span className='fs-2'>Product</span>
            </Nav.Link>

            <Nav.Link as={NavLink} className='text-black py-1 my-2' onClick={() => dispatch(logout(navigate, showtoast))} to="/admin/login">
                <FontAwesomeIcon className='me-3 fs-3' icon={faRightFromBracket} />
                <span className='fs-2'>logout</span>
            </Nav.Link>
          </Nav>             
            </Offcanvas.Body>
        </Offcanvas>


    )
};

export default Adminmenucanvas;