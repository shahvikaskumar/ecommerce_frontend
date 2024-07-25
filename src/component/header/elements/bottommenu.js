import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping,  faCubes, faFilterCircleDollar, faHome, faSearch} from '@fortawesome/free-solid-svg-icons';
import { NavLink} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { setfiltershow, setsearchshow } from '../../../redux/slice/headerslice';
import { Button } from 'react-bootstrap';

const Bottommenu = () => {
    
    const {sidefilter} = useSelector((state) => state.product);
    const {countitem} = useSelector((state) => state.cart);    
    const dispatch = useDispatch();

    // Search modal show on mobile and tab devices only
    const handlesearchshow = () => {      
        dispatch(setsearchshow(true));  
    }

    // Filter Modal Show on mobile and tab devices only
    const handlefiltershow = () => {
        dispatch(setfiltershow(true));
    }
    
    return (
        <div className='nav py-2 nav-pills justify-content-around d-lg-none bg-dark fixed-bottom start-0 bottom-0 w-100'>
            
            <li className='nav-item'>
                <NavLink className='nav-link p-2 text-warning' to='/home'>
                    <FontAwesomeIcon className='fs-4'  icon={faHome} />
                </NavLink>
            </li>

            <li className='nav-item'>
                <NavLink className='nav-link  text-warning' to='/product/allproduct'>
                    <FontAwesomeIcon className='fs-4'  icon={faCubes} />
                </NavLink>
            </li>

            <li className='nav-item'>
                <Button className='bg-transparent border-0 py-2 px-3 text-warning' onClick={handlesearchshow}>
                    <FontAwesomeIcon className='fs-4'  icon={faSearch} />
                </Button>
            </li>

            <li className='nav-item'>
                <NavLink className='position-relative  nav-link  text-warning' to='/cart'>
                    <FontAwesomeIcon className='fs-4'  icon={faCartShopping} />
                
                {countitem > 0 && (       
                        <span className="badge bg-danger rounded-5 fs-6 position-absolute badge-position translate-middle">
                        {countitem}
                    </span>
                )}
                </NavLink>
            </li>

            <li className='nav-item '>
                <Button className='bg-transparent position-relative border-0 py-2 px-3  text-warning' onClick={handlefiltershow}>
                    <FontAwesomeIcon className='fs-4'  icon={faFilterCircleDollar} />
                
                {sidefilter.length > 0 && (       
                        <span className="badge bg-danger rounded-5 fs-6 position-absolute badge-position translate-middle">
                        A
                    </span>
                )}
                </Button>
            </li>               
            
        </div>

    )
};

export default Bottommenu