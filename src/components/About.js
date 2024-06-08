import React from 'react';

function About() {
  return (
    <div>
      <main className="container py-5">
        <section className="mb-5 text-center">
          <h2 className="display-4 font-weight-bold text-dark">About Us</h2>
          <p className="mt-3 lead text-muted">Discover the story behind our restaurant and what drives our passion for exceptional dining experiences.</p>
        </section>

        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg"
                alt="Restaurant Image"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="h2 font-weight-bold text-dark">Our Story</h3>
              <p className="mt-3 text-muted">
                Founded in 2010, our restaurant has been committed to providing a welcoming atmosphere and delicious food made with the freshest ingredients. Our journey began with a simple mission: to create a place where people can enjoy good food and great company.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h3 className="h2 font-weight-bold text-dark text-center">Our Mission & Vision</h3>
          <div className="row mt-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h4 className="h4 font-weight-bold text-dark">Mission</h4>
              <p className="mt-3 text-muted">
                Our mission is to deliver an unparalleled dining experience that delights our guests and creates lasting memories. We strive to offer exceptional service, innovative cuisine, and a warm, inviting atmosphere.
              </p>
            </div>
            <div className="col-lg-6">
              <h4 className="h4 font-weight-bold text-dark">Vision</h4>
              <p className="mt-3 text-muted">
                Our vision is to be recognized as a leader in the restaurant industry, known for our commitment to quality, creativity, and sustainability. We aim to grow our brand while maintaining the values that have made us a beloved destination for food lovers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h3 className="h2 font-weight-bold text-dark text-center">Meet the Team</h3>
          <div className="row mt-4 justify-content-center">
            <div className="col-sm-6 col-lg-3 mb-4">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="Team Member"
                className="img-fluid rounded-circle shadow-sm"
              />
              <h4 className="h5 font-weight-bold text-dark mt-3">John Doe</h4>
              <p className="text-muted">Founder & Head Chef</p>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="Team Member"
                className="img-fluid rounded-circle shadow-sm"
              />
              <h4 className="h5 font-weight-bold text-dark mt-3">Jane Smith</h4>
              <p className="text-muted">General Manager</p>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="Team Member"
                className="img-fluid rounded-circle shadow-sm"
              />
              <h4 className="h5 font-weight-bold text-dark mt-3">Emily Johnson</h4>
              <p className="text-muted">Sous Chef</p>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="Team Member"
                className="img-fluid rounded-circle shadow-sm"
              />
              <h4 className="h5 font-weight-bold text-dark mt-3">Michael Brown</h4>
              <p className="text-muted">Marketing Director</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="h2 font-weight-bold text-dark text-center">Our Values</h3>
          <div className="row mt-4">
            <div className="col-lg-4 mb-4">
              <h4 className="h5 font-weight-bold text-dark">Quality</h4>
              <p className="mt-3 text-muted">We believe in using only the highest quality ingredients and preparing each dish with care and precision.</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4 className="h5 font-weight-bold text-dark">Innovation</h4>
              <p className="mt-3 text-muted">We are constantly exploring new culinary trends and techniques to keep our menu exciting and fresh.</p>
            </div>
            <div className="col-lg-4">
              <h4 className="h5 font-weight-bold text-dark">Sustainability</h4>
              <p className="mt-3 text-muted">We are committed to sustainable practices, including sourcing locally and reducing waste.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
