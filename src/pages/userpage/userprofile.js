import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { showtoast } from '../../redux/slice/toastslice';
import Loading from '../../component/loading/loading';
import {Button, Form, Col, Row, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Updateprofile } from '../../redux/slice/authslice';


const Userprofile = (props) => {
  const dispatch = useDispatch(); 
  const {token,user} = useSelector((state) => state.auth);  
  const {loading} = useSelector((state) => state.product);
  const [uid, setuid] = useState(null);
  const initialdata = {
    name: '',
    email: '',
    mobileno:'',
    address:'',    
  };

  const [formdata, setformdata] = useState(initialdata);
  const [imgpre, setimgpre] = useState(null);

  
  useEffect(() => {
    
    if (props.user) {
      setformdata({
        name: props.user.name || '',
        email: props.user.email || '',
        mobileno: props.user.mobileno || '',        
        address: props.user.address || '',
      });
      setimgpre(props.user.profile_picurl ? props.user.profile_picurl : null);            
      setuid(props.user._id);
    } else {
      setformdata(initialdata);
      setimgpre(null);
      setuid('');
    }
    // eslint-disable-next-line
  }, [props.user, user]);


  
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
    }     
    else {
        const updatedValue = name === 'mobileno' ? Number(value) : value;
        setformdata({
            ...formdata,
            [name]: updatedValue
        });
    }
};

const handleupdate = async () => {       
   
  
  dispatch(Updateprofile({data:formdata, uid:uid, token:token, showtoast:showtoast }));

};

  return (
    <>
      {loading && <Loading/>}
      <Container className='my-4'>
        <Form id="cpform">  
            <Row className="m-0">
              <Col lg={4} xl={3} className="pe-xl-3">
                <Form.Group className="my-2 text-center">
                <div className='text-center my-4  rounded-circle ratio ratio-1x1 overflow-hidden'>
                {imgpre ? ( <img src={imgpre} alt={formdata.pname} className="img-fluid" /> ) :
                (<FontAwesomeIcon icon={faUserCircle} />)} 
                </div>    
                  <Form.Label htmlFor='image'  className="w-75 btn btn-success fs-6 fw-bold pointer-event">
                    Change Profile Image
                    <input type="file" id="image"  onChange={handlechange} className="form-control d-none" accept="image/*" />
                  </Form.Label>
                  
                </Form.Group>
              </Col>
              <Col lg={8} xl={9} className="p-0 ps-xl-3">
                <Form.Group className="my-4">
                    <Form.Label htmlFor='name' className='mx-2'>Full Name</Form.Label>
                  <Form.Control className='rounded-5 py-2 px-3' type="text" id="name" name="name" placeholder="User Name" value={formdata.name} onChange={handlechange} />
                </Form.Group>
                <Row >
                  <Col xl={6} className="pe-xl-3 my-2">
                  <Form.Label htmlFor='email' className='mx-2'>Email ID</Form.Label>
                    <Form.Control type="text" className='rounded-5 py-2 px-3' id="email" name="email" placeholder="Email ID" value={formdata.email} onChange={handlechange} />
                  </Col>
                  <Col xl={6} className="ps-xl-3 my-2">
                  <Form.Label htmlFor='mobileno' className='mx-2'>Mobile No</Form.Label>
                    <Form.Control type="text" className='rounded-5 py-2 px-3' id="mobileno" name="mobileno" placeholder="Mobile No" value={formdata.mobileno} onChange={handlechange} />
                  </Col>
                </Row> 
                <Row className='mt-4 mx-0'>
                <Form.Label htmlFor='address' className='mx-2'>Address</Form.Label>
                <Form.Control as="textarea" rows={4} className='rounded-5 py-2 px-3' type="text" id="address" name="address" placeholder="Address" value={formdata.address} onChange={handlechange} />
                </Row>              
                <Row className='mt-4 justify-content-center'>
                <Button className='w-50 btn-success fs-5 fw-bold ' onClick={handleupdate}>Update Profile</Button>
                </Row>
              </Col>
            </Row>
            </Form>
            </Container>
        
      
    
    </>
   
  )
};

export default Userprofile;