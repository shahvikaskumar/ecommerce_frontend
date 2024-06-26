import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div id="container"
            className="container-fluid p-4  my-5">

            {/* Form container */}
            <form id='registerform' action="#" method="post">
                {/* Form legend */}
                <legend
                    className="text-center display-4 fw-bold">Register</legend>

                {/* Full Name input field */}
                <div className="row pt-3 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="form-label fs-5 fw-bold" for="fname">Email
                            :-</label>

                        <input type="text" id="fname" name="fname"
                            placeholder="Enter Your Full Name"
                            className="form-control fs-5 rounded-5 px-4 py-2" />
                    </div>
                </div> 

                {/* Mobile input field */}
                <div className="row pt-3 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="form-label fs-5 fw-bold" for="mno">Mobile No
                            :-</label>

                        <input type="number" id="mno" name="mno"
                            placeholder="Enter Your Mobile No"
                            className="form-control fs-5 rounded-5 px-4 py-2" />
                    </div>
                </div>

                {/* Email input field */}
                <div className="row pt-3 justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <label className="form-label fs-5 fw-bold" for="email">Email
                            :-</label>

                        <input type="email" id="email" name="email"
                            placeholder="Enter Your E-mail"
                            className="form-control fs-5 rounded-5 px-4 py-2" />
                    </div>
                </div>

        {/* Password input field */}
        <div className="row pt-3 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
                <label className="form-label fs-5 fw-bold"
                    for="password">Password :-</label>

                <input type="password" id="password" name="password"
                    placeholder="Enter Your Password"
                    className="form-control fs-5 rounded-5 px-4 py-2" />
            </div>

        </div>

        {/* Register button */}
        <div className="row pt-4 mt-2 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <input type="button" id="login"
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