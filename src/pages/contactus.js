import contactus from '../images/contactus.jpg';

const Contactus = () => {
    return (
        <>
        {/* Container for the contact form */}
<div id="container" className="container text-center my-4">
    <h1>Contact Us</h1>

    {/* Row containing two columns: one for image and one for form */}
    <div className="row my-4">
        {/* Column for the image */}
        <div className="col-lg-6 py-4">
            <img src={contactus}
                className="img-fluid h-100 object-fit-fill"
                alt="contactus" />
        </div>
        {/* Column for the form */}
        <div className="col-lg-6 text-start py-4">
            {/* Form for contacting */}
            <form action="#" post="method">

                {/* Row for the name input field */}
                <div
                    className="row justify-content-lg-start justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <label className="form-label fs-5 px-3 fw-bold"
                            for="name">Name
                            :-</label>

                        <input type="name" id="name" name="name"
                            placeholder="Enter Your Name"
                            className="form-control fs-5 rounded-5 px-4 py-2" />
                    </div>
                </div>

                {/* Row for the email input field */}
                <div
                    className="row justify-content-lg-start justify-content-center py-4">
                    <div className="col-12 col-md-10 col-lg-8">
                        <label className="form-label fs-5 px-3 fw-bold"
                            for="email">Email
                            :-</label>

                        <input type="email" id="email" name="email"
                            placeholder="Enter Your E-mail"
                            className="form-control fs-5 rounded-5 px-4 py-2" />
                    </div>
                </div>

                {/* Row for the phone number input field */}
                <div
                    className="row justify-content-lg-start justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <label className="form-label fs-5 px-3 fw-bold"
                            for="phoneno">Phone Number
                            :-</label>

                        <input type="tel" id="phoneno" name="phoneno"
                            placeholder="Enter Your Phone Number"
                            className="form-control fs-5 rounded-5 px-4 py-2" />
                    </div>
                </div>

                {/* Row for the message input field */}
                <div
                    className="row justify-content-lg-start justify-content-center py-4">
                    <div className="col-12 col-md-10 col-lg-8">
                        <label className="form-label fs-5 px-3 fw-bold"
                            for="message">Message
                            :-</label>

                        <textarea type="message" id="message" name="message"
                            placeholder="Enter Your Message" rows="4"
                            className="form-control fs-5 rounded-5 px-4 py-2"></textarea>
                    </div>
                </div>

                {/* Row for the submit button */}
                <div
                    className="row justify-content-center justify-content-lg-start py-2">
                    <div className="col-12 col-md-10 col-lg-8">

                        <input type="submit" id="sumbit"
                            value="Submit"
                            className="form-control bg-warning border-0 fs-3 fw-bold rounded-5" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</>
    )
};

export default Contactus;