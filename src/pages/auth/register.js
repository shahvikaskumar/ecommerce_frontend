import { NavLink, useNavigate } from "react-router-dom";
import { useState} from 'react';
import { register } from "../../redux/slice/authslice";
import {useSelector, useDispatch} from 'react-redux';
import { showtoast } from "../../redux/slice/toastslice";
import Loading from "../../component/loading/loading";



const Register = () => {
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        fname:'',
        mobileno:'',
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
        
        const data = {
            ...formdata,
            utype:'cus',

        };        
        dispatch(register(data, navigate, showtoast ));        
    };


    return (
        <div id="container"
            className="container-fluid px-3 py-4 ">
            {loading && <Loading /> }
            {/* Form container */}
            <form id='registerform' onSubmit={handlesubmit}>
                {/* Form legend */}
                <legend
                    className="text-center display-4 fw-bold">Registration</legend>

                {/* Full Name input field */}
                <div className="row pt-3 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="form-label fs-5 fw-bold" htmlFor="fname">Name
                            :-</label>

                        <input type="text" id="fname" name="fname"
                            placeholder="Enter Your Full Name"
                            className="form-control fs-5 rounded-5 px-4 py-2"
                            onChange={handlechange} value={formdata.fname}/>
                    </div>
                </div> 

                {/* Mobile input field */}
                <div className="row pt-3 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="form-label fs-5 fw-bold" htmlFor="mobileno">Mobile No
                            :-</label>

                        <input type="number" id="mobileno" name="mobileno"
                            placeholder="Enter Your Mobile No"
                            className="form-control fs-5 rounded-5 px-4 py-2" 
                            onChange={handlechange} value={formdata.mobileno}/>
                    </div>
                </div>

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

        {/* Register button */}
        <div className="row pt-4 mt-2 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <input type="submit" id="login"
                    value="Register"
                    className="form-control bg-warning border-0 fs-3 fw-bold rounded-5" />
            </div>
        </div>

        <p className='mt-3 fs-5 text-center'>Already have an account? <NavLink className="fw-bold"  to='/login'>Login here</NavLink></p>
    </form>
</div>
    )
};

export default Register;