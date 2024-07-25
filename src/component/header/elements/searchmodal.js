import { Modal,Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchshow } from '../../../redux/slice/headerslice';
import { setsearchproduct, setsearchstr } from '../../../redux/slice/productslice';
import { useNavigate } from 'react-router-dom';

const SearchModal = () => {
    const dispatch = useDispatch();
    const searchshow = useSelector((state) => state.header.searchshow);
    const {searchstr} = useSelector((state) => state.product);
    const navigate = useNavigate();
    const handlesearchclose = () => {
        dispatch(setsearchshow(false));
    }

    const handlesearchstrchange = (e) => dispatch(setsearchstr(e.target.value));
    const handlesearchapply = () =>{
      navigate('/product/allproduct');

      setTimeout(() => {
      dispatch(setsearchproduct(searchstr));
      dispatch(setsearchshow(false));
    }, 100);
    } 

        
    return (

        <Modal  className='modal' show={searchshow} onHide={handlesearchclose}>
      
        <Modal.Header closeButton >
          <Modal.Title className='flex-grow-1 text-center fw-bold'>Search Product</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <Form.Group className="my-2">
             <Form.Control className='rounded-5 py-2 px-3' type="text" id="searchstr" name="searchstr" placeholder="Search Product" onChange={handlesearchstrchange} value={searchstr} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>          
            
          <Button variant="primary" className='fs-5 px-5' onClick={handlesearchapply}>
            Search
          </Button>
          
          <Button variant="secondary" className='fs-5 px-5' onClick={handlesearchclose}>
            Close
          </Button>          
        </Modal.Footer>

        </Modal>


    )
};

export default SearchModal;