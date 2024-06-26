import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div id="container"
    className="container-fluid p-4  my-5">

    {/* Form container */}
    <form id='loginform' action="#" method="post">
        {/* Form legend */}
        <legend
            className="text-center display-4 fw-bold">Login</legend>

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

        {/* Login button */}
        <div className="row pt-4 mt-2 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">

                <input type="button" id="login"
                    value="Login"
                    className="form-control bg-warning border-0 fs-3 fw-bold rounded-5" />
            </div>
        </div>

        <p className='mt-3 fs-5 text-center'>Don't have an account? <NavLink className="fw-bold"  to='/register'>Register here</NavLink></p>
    </form>
</div>

    );
};

export default Login;