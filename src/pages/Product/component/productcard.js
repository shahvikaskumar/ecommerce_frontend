import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setsingleproduct } from '../../../redux/slice/productslice';
import { useNavigate } from 'react-router-dom';
import { adjustqty, setadditem } from '../../../redux/slice/cartslice';

const Productcard = (props) => {
    const [product, setproduct] = useState([]);
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {cartitem} = useSelector((state) => state.cart);
    const itemInCart = cartitem.find(item => item._id === product._id);
    
    useEffect(() => {
        if(props.product){
            setproduct(props.product);
        }else{
            setproduct(null);
        }
    },[props.product]);

    const goproductdetail = () => {
        dispatch(setsingleproduct(product));
        navigate(`/productdetail/${product._id}`);
    };    

    const addtocart = () => {
        dispatch(setadditem(product));
        console.log(cartitem);
    }

    const handleincreaseqty = () => {
        
        if(itemInCart.qty >= 1){
            dispatch(adjustqty({id:product._id, qty:itemInCart.qty + 1}));
        }
    };

    const handledecreaseqty = () => {
        if(itemInCart.qty >= 1){
            dispatch(adjustqty({id:product._id, qty:itemInCart.qty - 1}));
        }else {
            dispatch(adjustqty({id:product._id, qty:0}));
        }


    };

    return (
        <>
        
        <div key={product._id} className="col-sm-6 col-xxl-3 px-xl-5 py-3 ">
            <div className="card text-center">
                <button className='border-0 bg-transparent p-0 mb-3' onClick={goproductdetail}>
                <div className="h-50">
                    <img className="card-img-top img-fluid" src={product.imageurl} alt={product.pname} />
                </div>
                <div className="card-body mt-4">
                    <h5 className="card-title fs-4 fw-bold">{product.pname}</h5>
                    <h6 className="card-text fs-5 fw-bold">₹ {product.price}</h6>
                    <p className="text-truncate">{product.pdesc}</p>

                </div>
                </button>
                <div className='d-flex w-100 justify-content-center mb-4'>
                {!itemInCart ? (
                   
                <button className="btn btn-warning fs-5 fw-bold rounded-4" onClick={addtocart}>
                        <FontAwesomeIcon className='cart me-3' icon={faCartShopping}/>
                        Add to Cart  
                </button>
                
                ) : (

                    <div className='w-50 d-flex'>
                    <button className="btn btn-warning px-3 me-2"
                                    onClick={handledecreaseqty}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>

                                <div className="form-outline">
                                    <span id="form1" min="0" name="quantity"
                                        value="1" type="number"
                                        className="form-control">
                                            {itemInCart.qty}
                                        </span>
                                </div>
                                <button className="btn btn-warning px-3 ms-2"
                                    onClick={handleincreaseqty} >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                    </div>
                )}
                </div>
            </div>
        </div>
    
        </>
    );
};

export default Productcard;