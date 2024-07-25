import { showtoast } from "../../../redux/slice/toastslice";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRightFromBracket, faRightToBracket, faShoppingBasket, faUserCircle, faUserPen, faUserPlus, faUserTie} from '@fortawesome/free-solid-svg-icons';
import { NavLink , useNavigate} from 'react-router-dom';
import {Offcanvas, Nav} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/slice/authslice';
import { setusercanvas } from "../../../redux/slice/headerslice";

const Usercanvas = () => {

    const isauth = useSelector((state) => state.auth.isauth);
    const user = useSelector((state) => state.auth.user);
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const usershow = useSelector((state) => state.header.usercanvasshow);
    const handleuserclose = () => {
        dispatch(setusercanvas(false));
    }

    return (
        <Offcanvas show={usershow} placement='end' className="bg-body-secondary" onHide={handleuserclose} style={{width:"280px"}} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>User</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex justify-content-between flex-column'>
             
              <Nav className='flex-column'>
              
              {isauth ? (
                <>
                <FontAwesomeIcon icon={faUserCircle} size="5x" />
                <div className='text-center text-truncate my-3'>
                <h1>{user.name}</h1>
                <h5>{user.email}</h5>
                <h5>{user.mobileno}</h5>
                </div>
                <hr />
                <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/user/profile" onClick={handleuserclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faUserPen} />
                <span className='fs-2'>Profile</span>
              </Nav.Link>  
              <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/user/orderlist" onClick={handleuserclose}>
              <FontAwesomeIcon className='me-3 fs-3' icon={faShoppingBasket} />
              <span className='fs-2'>Orders</span>
            </Nav.Link>
            
            {user.usertype==="admin" && (
              <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/admin" onClick={handleuserclose}>
              <FontAwesomeIcon className='me-3 fs-3' icon={faUserTie} />
              <span className='fs-2'>Admin</span>
            </Nav.Link>
            )}


            <Nav.Link as={NavLink} className='text-black py-1 my-2' onClick={() =>{dispatch(logout(navigate, showtoast)); handleuserclose() }}>
              <FontAwesomeIcon className='me-3 fs-3' icon={faRightFromBracket} />
              <span className='fs-2'>Logout</span>
            </Nav.Link>
            
            </>
              ) : (
               <>
              <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/login" onClick={handleuserclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faRightToBracket} />
                <span className='fs-2'>Login</span>
              </Nav.Link>

              <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/register" onClick={handleuserclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faUserPlus} />
                <span className='fs-2'>Register</span>
              </Nav.Link>
              </> 
            )}

              </Nav>             
            </Offcanvas.Body>

        </Offcanvas>
    )
};

export default Usercanvas;