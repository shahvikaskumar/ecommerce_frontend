import React , {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from "../../component/loading/loading";
import { Resetpassword } from '../../redux/slice/authslice';
import { showtoast } from '../../redux/slice/toastslice';

const Resetpasswordform = () => {
    const {token} = useParams();
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const [formdata, setformdata] = useState({
        password:'',
        cpassword:''        
    });

    const handlechange = (e) => {
        setformdata({
            ...formdata, [e.target.name]:e.target.value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();       
        if(formdata.password !== formdata.cpassword){
            dispatch(showtoast({message:"Password do not match"}));
            return;
        }

        const data ={
            token:token,
            password: formdata.password,
        };

        dispatch(Resetpassword(data, navigate, showtoast ));        
    };


    return (
        <div id="container"
    className="container-fluid p-4  my-5">
    {loading && <Loading />}
    {/* Form container */}
    <form id='forgotpassword' onSubmit={handlesubmit}>
        {/* Form legend */}
        <legend
            className="text-center display-4 fw-bold">Reset Password</legend>

        {/* Password input field */}
        <div className="row pt-3 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label fs-5 fw-bold"
                    htmlFor="password">Password :-</label>

                <input type="password" id="password" name="password"
                    placeholder="Enter Your Password"
                    className="form-control fs-5 rounded-5 px-4 py-2"
                    onChange={handlechange} value={formdata.password} />
            </div>

        </div>

        {/* Confirm Password input field */}
        <div className="row pt-3 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label fs-5 fw-bold"
                    htmlFor="cpassword">Confirm Password :-</label>

                <input type="password" id="cpassword" name="cpassword"
                    placeholder="Enter Your Confirm Password"
                    className="form-control fs-5 rounded-5 px-4 py-2"
                    onChange={handlechange} value={formdata.cpassword} />
            </div>
        </div>       

        <div className="row pt-4 mt-2 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <input type="submit" id="Reset"
                    value="Reset"
                    className="form-control bg-warning border-0 fs-3 fw-bold rounded-5" />
            </div>
        </div>
        </form>
        </div>
    )
};

export default Resetpasswordform;