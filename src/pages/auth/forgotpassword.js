import React , {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from "../../component/loading/loading";
import { forgotpassword } from '../../redux/slice/authslice';
import { showtoast } from '../../redux/slice/toastslice';

const Forgotpassword = () => {

    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const [formdata, setformdata] = useState({
        email:''        
    });

    const handlechange = (e) => {
        setformdata({
            ...formdata, [e.target.name]:e.target.value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();       
        dispatch(forgotpassword(formdata, navigate, showtoast ));        
    };


    return (
        <div id="container"
    className="container-fluid p-4">
    {loading && <Loading />}
    {/* Form container */}
    <form id='forgotpassword' onSubmit={handlesubmit}>
        {/* Form legend */}
        <legend
            className="text-center display-4 fw-bold">Forgot Password</legend>

        {/* Email input field */}
        <div className="row pt-3 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label fs-5 fw-bold" htmlFor="email">Email
                    :-</label>

                <input type="email" id="email" name="email"
                    placeholder="Enter Your E-mail"
                    className="form-control fs-5 rounded-5 px-4 py-2"
                    onChange={handlechange} value={formdata.email} />
            </div>

        </div>

        <div className="row pt-4 mt-2 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <input type="submit" id="login"
                    value="Send Email"
                    className="form-control bg-warning border-0 fs-3 fw-bold rounded-5" />
            </div>
        </div>
        </form>
        </div>
    )
};

export default Forgotpassword;