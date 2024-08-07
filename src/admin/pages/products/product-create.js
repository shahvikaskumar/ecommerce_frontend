import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Createproduct, setmodalshow, Updateproduct } from '../../../redux/slice/productslice';
import { showtoast } from '../../../redux/slice/toastslice';
import Loading from '../../../component/loading/loading';
import {Button, Modal, Form, Col, Row} from 'react-bootstrap';


const ProductCreate = (props) => {
  const dispatch = useDispatch(); 
  const {token} = useSelector((state) => state.auth);  
  const {loading, showmodal} = useSelector((state) => state.product);
  const [edit, setedit] = useState(false);
  const [pid, setpid] = useState(null);
  const initialdata = {
    pname: '',
    cate: '',
    subcate: '',
    brand: '',
    pdesc: '',
    price: '',
    color: '',
    pspeci: '',
  };

  const [formdata, setformdata] = useState(initialdata);
  const [imgpre, setimgpre] = useState(null);  
  const [pfeatured, setpfeatured] = useState(false);

  useEffect(() => {
    if (props.product) {
      setformdata({
        pname: props.product.pname || '',
        cate: props.product.cate || '',
        subcate: props.product.subcate || '',
        brand: props.product.brand || '',
        pdesc: props.product.pdesc || '',
        price: props.product.price || '',
        color: props.product.color || '',
        pspeci: props.product.pspeci || '',                
      });
      setimgpre(props.product.imageurl ? props.product.imageurl : null);
      setpfeatured(props.product.pfeatured === "true" ? true : false);
      setedit(true);
      setpid(props.product._id);
    } else {
      setformdata(initialdata);
      setimgpre(null);
      setpfeatured(false);
      setedit(false);
      setpid('');
    }
    // eslint-disable-next-line
  }, [props.product]);


  // Product categories
  const categories = {
    Women: ['Dresses', 'Pants', 'Skirts','Gowns'],
    Men: ['Shirts', 'Pants', 'Trousers','Jeans'],
    Kids: ['Tops', 'Bottoms', 'One Pieces', 'Innerwears'],
  };  

  // Close modal handler
  const handleclose = () => {
    setformdata(initialdata);
    setimgpre(null);
    setpfeatured(false);
    dispatch(setmodalshow(false));
  };

  // Handle form input changes
  const handlechange = (event) => {
    const { name, value, type, files } = event.target;
    
    if (type === 'file') {
        const file = files[0];
        
        if (file) {
            setformdata({
                ...formdata,
                image: file,
            });
            setimgpre(URL.createObjectURL(file));
        }
    } else if(type === 'checkbox'){
      setpfeatured(event.target.checked);
    }     
    else {
        setformdata({
            ...formdata,
            [name]: value
        });
    }
};

// Submit new product
const handlesubmit = async () => {    

  const data = { ...formdata, pfeatured: pfeatured };
  
  dispatch(Createproduct({data:data, token:token, showtoast:showtoast, modalclose:handleclose }));

};

// Update existing product
const handleupdate = async () => {    
    
  const data = { ...formdata, pfeatured: pfeatured };
  
  dispatch(Updateproduct({data:data, pid:pid, token:token, showtoast:showtoast, modalclose:handleclose }));

};

  return (
    <>
      {loading && <Loading/>}
      <Modal  className='modal-xl'  scrollable show={showmodal} onHide={handleclose} centered>
      
        <Modal.Header closeButton >
          <Modal.Title className='flex-grow-1 text-center fw-bold'>{edit ? "Edit Product" : "Create Product"}</Modal.Title>
        </Modal.Header>      
        <Modal.Body>
        <Form id="cpform">  
            <Row className="m-0">
              <Col lg={4} xl={3} className="pe-xl-3">
                <Form.Group className="my-2">
                  <Form.Group className='mb-3 d-flex justify-content-center'>
                  <Form.Check type="checkbox" label="Featured Product"
                    id="featured" className='fs-5 fw-bold '
                    checked={pfeatured}
                    onChange={handlechange}
                  />
                  </Form.Group>
                  <Form.Label htmlFor='image'  className="w-100 btn btn-success fs-6 fw-bold pointer-event">
                    Upload Images
                    <input type="file" id="image"  onChange={handlechange} className="form-control d-none" accept="image/*" />
                  </Form.Label>
                  {imgpre && <img src={imgpre} alt={formdata.pname} className="img-fluid" />}
                </Form.Group>
              </Col>
              <Col lg={8} xl={9} className="p-0 ps-xl-3">
                <Form.Group className="my-2">
                  <Form.Control className='rounded-5 py-2 px-3' type="text" id="pname" name="pname" placeholder="Product Name" value={formdata.pname} onChange={handlechange} />
                </Form.Group>
                <Row>
                  <Col xl={6} className="pe-xl-3 my-2">
                    <Form.Control as="select" className='rounded-5 py-2 px-3' id="cate" name="cate" value={formdata.cate} onChange={handlechange}>
                      <option value="" disabled>Select Category</option>
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                      <option value="Kids">Kids</option>
                    </Form.Control>
                  </Col>
                  <Col xl={6} className="ps-xl-3 my-2">
                    <Form.Control as="select" className='rounded-5 py-2 px-3' id="subcate" name="subcate" value={formdata.subcate} onChange={handlechange} disabled={!formdata.cate}>
                      <option value="" disabled>Select Sub-Category</option>
                      {formdata.cate &&
                        categories[formdata.cate].map((subcate) => (
                          <option key={subcate} value={subcate}>{subcate}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                </Row>
                <Row >
                  <Col xl={6} className="pe-xl-3 my-2">
                    <Form.Control type="text" className='rounded-5 py-2 px-3' id="brand" name="brand" placeholder="Brand" value={formdata.brand} onChange={handlechange} />
                  </Col>
                  <Col xl={6} className="ps-xl-3 my-2">
                    <Form.Control type="text" className='rounded-5 py-2 px-3' id="pdesc" name="pdesc" placeholder="Description" value={formdata.pdesc} onChange={handlechange} />
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} className="pe-xl-3 my-2">
                    <Form.Control type="number" className='rounded-5 py-2 px-3' id="price" name="price" placeholder="Price" value={formdata.price} onChange={handlechange} />
                  </Col>
                  <Col xl={6} className="ps-xl-3 my-2">
                    <Form.Control type="text" className='rounded-5 py-2 px-3' id="color" name="color" placeholder="Color" value={formdata.color} onChange={handlechange} />
                  </Col>
                </Row>
                <Form.Group className="my-3">
                  <Form.Control as="textarea" className='rounded-4 py-2 px-3' id="pspeci" name="pspeci" placeholder="Product specification" style={{ resize: "none" }} rows={7} value={formdata.pspeci} onChange={handlechange} />
                </Form.Group>
              </Col>
            </Row>
            </Form>
        </Modal.Body>
          <Modal.Footer className='justify-content-center'>
           {edit ? ( 
            <Button variant="primary" className='fs-5 px-5' onClick={handleupdate}>
            Update
          </Button>  
           ) : ( 
          <Button variant="primary" className='fs-5 px-5' onClick={handlesubmit}>
            Save
          </Button>
          )}
          <Button variant="secondary" className='fs-5 px-5' onClick={handleclose}>
            Close
          </Button>          
        </Modal.Footer>
        
      </Modal>
    
    </>
   
  )
};

export default ProductCreate;