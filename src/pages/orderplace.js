import { useDispatch, useSelector } from "react-redux";
import { Createpayment } from "../redux/slice/orderslice";
import { showtoast } from "../redux/slice/toastslice";
import { useNavigate, NavLink } from "react-router-dom";
import {Form} from 'react-bootstrap';

const Orderplace = () => {

    const navigate= useNavigate();
    const {cartitem} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {user, token} = useSelector((state) => state.auth);
        
    const totalCost = cartitem.reduce((total, item) => total + item.price * item.qty, 0);
    const shipcost =  Math.ceil(totalCost > 10000 ? 0: totalCost / 1500 * 50) ;
    const totalamount = totalCost+ shipcost;
    
    const handlePayment = async () => {
        const orderdata = {
            userid:user._id,
            items:cartitem.map(item => ({
                productid:item._id,
                qty:item.qty,
                price:Number(item.price),
            })), 
            totalcost:totalCost,
            shipingcost:shipcost,           
            totalamount:totalamount,
            status:"Pending",
        };
        
        dispatch(Createpayment(token,user,orderdata,showtoast, navigate));
        

      };



    return (
        <>
            {/* Container for the cart items */}
            <div id="container" className="container-fluid  container-xxl px-0 my-4 ">
                {/* Row containing cart items */}
                <div className="row mx-0">
                    {/* Column for cart item details */}
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="card">
                            <div className="card-header py-2 mb-3">
                                <h2 className="text-center bg-light">Delivery Address</h2>
                            </div>
                            <div className="card-body px-2 py-0">
                            {user.address && (
                            <Form.Label className="w-100 text-center fs-4 my-3 fw-bold">{user.address}</Form.Label>
                            ) }  
                            <div className="text-center my-3">
                            <NavLink className="fs-5" to='/user/profile'>Update Address click here</NavLink>
                            </div>

                                
                </div>
            </div>
        </div>

        {/* Column for cart summary */}
        <div className="col-lg-4">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">Summary</h2>
                </div>
                <div className="card-body justify-content-center text-center">
                    <ul className="list-group list-group-flush">
                        {/* Cart summary items */}
                        <li
                            className="list-group-item fs-5 d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Cost<span>Rs. {totalCost}</span>
                        </li>
                        <li
                            className="list-group-item fs-5 d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Shiping<span>Rs. {shipcost}</span>
                        </li>
                        <hr />
                        <li
                            className="list-group-item fs-4 fw-bold d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Total<span>Rs. {totalamount}</span>
                        </li>
                    </ul>

                    {/* Checkout button */}
                    
                    <button type="button" disabled={totalCost === 0 || !user.address} onClick={handlePayment} 
                        className="btn btn-warning mt-4 fs-4 fw-bold btn-lg btn-block">Place Order</button>
                    
                        </div>
                <p className="text-danger mx-4">If order value is more then Rs.10,000 then no shiping cost charged.</p>
            </div>
        </div>
    </div>
</div>

        </>
    )
};

export default Orderplace;