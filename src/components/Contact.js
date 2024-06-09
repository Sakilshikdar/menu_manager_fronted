function Contact() {
    return (
        <div>
            <main className="container p-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                        <h1 className="display-5 fw-bold mb-4">Contact Us</h1>
                        <div className="mb-4">
                            <h2 className="h4 fw-semibold">Address</h2>
                            <p className="text-muted">123 Main Street, City, Country</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="h4 fw-semibold">Phone</h2>
                            <p className="text-muted">+1 234 567 890</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center py-4">
                    <div className="col-md-8">
                        <h1 className="display-4 fw-bold text-center mb-4">Our Location</h1>
                        <div className="d-flex justify-content-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192520567043!2d144.96305781531683!3d-37.81410797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1fddf67%3A0x5030bfbca7e2d5f!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614759074720!5m2!1sen!2sus"
                                width="600"
                                height="350"
                                // style={"border:0;"}
                                allowfullscreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Contact;