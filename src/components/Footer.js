import React from 'react';



function Footer() {


    return (

        <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5 border">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="#!"
                        role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        href="#!"
                        role="button"
                    ><i className="fab fa-google"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="#!"
                        role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: " #0082ca" }}
                        href="#!"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Menu Manager
                            </h6>
                            <p>
                                Ecommerce-Shop is a leading online shopping platform that offers a wide range of products at competitive prices. Our platform is user-friendly, secure, and reliable. Shop with us today!
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Menus</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Bike</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Car</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Shirt</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3 text-primary"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>

                © 2024 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Ecommerce-Shop.com</a>
            </div>
        </footer >
    );
}

export default Footer;