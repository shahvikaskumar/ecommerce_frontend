import {Offcanvas, Nav, Collapse} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChild, faContactCard, faCubes, faHome, faMale, faPersonDress} from '@fortawesome/free-solid-svg-icons';
import { NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setmenucanvas } from '../../../redux/slice/headerslice';
import {useState} from 'react';


const Menucanvas = () => {
    
    const menushow = useSelector((state) => state.header.menucanvasshow);
    const dispatch = useDispatch();
    const [opensubmenu, setopensubmenu] = useState(null);

    const handlemenuclose = () => {
        dispatch(setmenucanvas(false));
        setopensubmenu(null);
    }

    const toggleSubmenu = (submenu) => {
      setopensubmenu(opensubmenu === submenu ? null : submenu);
    };  


    
    return (
        <Offcanvas show={menushow} className="bg-body-secondary" onHide={handlemenuclose} style={{width:"280px"}} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={NavLink} className='text-black py-1 my-2'  to="/home" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faHome} />
                <span className='fs-2'>Home</span>
            </Nav.Link>
            <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/product/allproduct" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faCubes} />
                <span className='fs-2'>All Product</span>
            </Nav.Link>
            
      {/* Women Submenu */}
      <Nav.Item>
  <div
    className="text-black d-flex align-items-center justify-content-around py-1 my-2"
    onClick={() => toggleSubmenu('women')}
    aria-controls="women-collapse-text"
    aria-expanded={opensubmenu === 'women'}
    style={{ cursor: 'pointer' }}
  >
    <FontAwesomeIcon className='ms-3' size="2x" icon={faPersonDress} />
    <span className="fs-2 ms-4">Women</span>
    <FontAwesomeIcon className="ms-auto" icon={opensubmenu === 'women' ? faChevronUp : faChevronDown} />
  </div>
  <Collapse in={opensubmenu === 'women'}>
    <div id="women-collapse-text">
      <Nav className="flex-column ms-5">
        <Nav.Link as={NavLink} to="/product/women/all" className="text-black" onClick={handlemenuclose}>
          <span className="fs-3">All</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/product/women/dresses" className="text-black" onClick={handlemenuclose}>
          <span className="fs-3">Dresses</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/product/women/pants" className="text-black" onClick={handlemenuclose}>
          <span className="fs-3">Pants</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/product/women/skirts" className="text-black" onClick={handlemenuclose}>
          <span className="fs-3">Skirts</span>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/product/women/gowns" className="text-black" onClick={handlemenuclose}>
          <span className="fs-3">Gowns</span>
        </Nav.Link>
      </Nav>
    </div>
  </Collapse>
</Nav.Item>

      {/* Men Submenu */}
      <Nav.Item>        
          <div
            className="text-black d-flex align-items-center justify-content-around my-2"
            onClick={() => toggleSubmenu('men')}
            aria-controls="men-collapse-text"
            aria-expanded={opensubmenu === 'men'}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon className="ms-3" size="2x" icon={faMale} />
            <span className="fs-2 ms-4">Men</span>
            <FontAwesomeIcon className="ms-auto" icon={opensubmenu === 'men' ? faChevronUp : faChevronDown} />
          </div>
          <Collapse in={opensubmenu === 'men'}>
            <div id="men-collapse-text">
              <Nav className="flex-column ms-5">
                <Nav.Link as={NavLink} to="/product/men/all" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">All</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/men/shirts" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Shirts</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/men/pants" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Pants</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/men/trousers" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Trousers</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/men/jeans" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Jeans</span>
                </Nav.Link>
              </Nav>
            </div>
          </Collapse>        
      </Nav.Item>
      
      {/* Kids Submenu */}
      <Nav.Item>        
          <div
            className="text-black d-flex align-items-center justify-content-around my-2"
            onClick={() => toggleSubmenu('kids')}
            aria-controls="kids-collapse-text"
            aria-expanded={opensubmenu === 'kids'}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon className="ms-3" size="2x" icon={faChild} />
            <span className="fs-2 ms-4">Kids</span>
            <FontAwesomeIcon className="ms-auto" icon={opensubmenu === 'kids' ? faChevronUp : faChevronDown} />
          </div>
          <Collapse in={opensubmenu === 'kids'}>
            <div id="kids-collapse-text">
              <Nav className="flex-column ms-5">
                <Nav.Link as={NavLink} to="/product/kids/all" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">All</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/kids/tops" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Tops</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/kids/bottoms" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Bottoms</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/kids/onepc" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">OnePc</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product/kids/innerwear" className="text-black" onClick={handlemenuclose}>
                  <span className="fs-3">Innerwears</span>
                </Nav.Link>
              </Nav>
            </div>
          </Collapse>        
      </Nav.Item>
            <Nav.Link as={NavLink} className='text-black py-1 my-2' to="/contactus" onClick={handlemenuclose}>
                <FontAwesomeIcon className='me-3 fs-3' icon={faContactCard} />
                <span className='fs-2'>Contact us</span>
            </Nav.Link>
          </Nav>             
            </Offcanvas.Body>
        </Offcanvas>


    )
};

export default Menucanvas;