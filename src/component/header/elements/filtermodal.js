import { useDispatch, useSelector } from "react-redux";
import { setfiltershow } from "../../../redux/slice/headerslice";
import { Modal} from 'react-bootstrap';
import React from 'react';
import Sidebar from "../../../pages/Product/component/sidebar";

const Filtermodal = () => {

    const dispatch = useDispatch();
    const filtershow = useSelector((state) => state.header.filtershow);
  
    // Close modal and update state
    const handlefilterclose = () => {
        dispatch(setfiltershow(false));
    }
   
    return (
        <Modal  className='modal' scrollable show={filtershow} onHide={handlefilterclose} centered>
      
        <Modal.Header closeButton >
          <Modal.Title className='flex-grow-1 text-center fw-bold'>Filter & Sort Product</Modal.Title>
        </Modal.Header> 
        <Modal.Body>       
            <Sidebar />
        </Modal.Body>        
        </Modal>

    )
};

export default Filtermodal;