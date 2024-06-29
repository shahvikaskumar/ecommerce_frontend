import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Loading from "../../component/loading/loading";
import { login } from "../../redux/slice/authslice";
import { showtoast } from "../../redux/slice/toastslice";

const Login = ({formname , register}) => {
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const [formdata, setformdata] = useState({
        email:'',
        password:''
    });

    const handlechange = (e) => {
        setformdata({
            ...formdata, [e.target.name]:e.target.value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();       
        dispatch(login(formdata, navigate, showtoast ));        
    };


    return (
        <div id="container"
    className="container-fluid p-4  my-5">
    {loading && <Loading />}
    {/* Form container */}
    <form id='loginform' onSubmit={handlesubmit}>
        {/* Form legend */}
        <legend
            className="text-center display-4 fw-bold">{formname}</legend>

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

        {/* Login button */}
        <div className="row pt-4 mt-2 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <input type="submit" id="login"
                    value="Login"
                    className="form-control bg-warning border-0 fs-3 fw-bold rounded-5" />
            </div>
        </div>
        {register=== "true" && ( 
        <>
        <p className='mt-3 fs-5 text-center'>Don't have an account? <NavLink className="fw-bold"  to='/register'>Register here</NavLink></p>
        <p className='mt-3 fs-5 text-center'>Don't remember password?<NavLink className="fw-bold"  to='/forgotpassword'>Forgot Password</NavLink></p>
        </>
        )};
    </form>
</div>

    );
};

export default Login;