import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SingleBook from './SingleBook';

import { UserContext, CartContext } from '../Context';

function Home() {
  const [Books, setBooks] = useState([]);
  const [Reviews, setReviews] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetchBooks(baseUrl + '/all_book');
    fetchReview(baseUrl + '/book-reviews');
  }, []);

  const fetchReview = (baseurl) => {
    axios.get(baseurl)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const fetchBooks = (baseurl) => {
    axios.get(baseurl)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const showStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`fa-solid fa-star ${i <= rating ? 'text-warning' : ''}`}></i>
      );
    }
    return stars;
  };

  return (
    <div className="container">
      <div className='d-flex align-items-center justify-content-between'>
        <h3 className='my-4'>All Books</h3>
        <Link to="/showAllBook" className='mb-4 btn btn-dark text-md-end'>View All Books <i className="fa-solid fa-arrow-right px-1"></i></Link>
      </div>
      <div className='row'>
        {Books.slice(0, 4).map((book, index) => (
          <SingleBook key={index} book={book} />
        ))}
      </div>

      {/* Reviews and rating start */}
      <div id="carouselExampleIndicators" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {Reviews.map((_, index) => (
            <button
              type="button"
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner bg-dark">
          {Reviews.length === 0 ? (
            <div className="carousel-item active p-5">
              <p className="text-white text-center">No Review Found</p>
            </div>
          ) : (
            Reviews.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} p-5`}>
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p className='text-white'>{item.comment}</p>
                  </blockquote>
                  <figcaption className="blockquote-footer warning">
                    {showStars(item.rating)}
                     <cite title="Source Title">{item.user}</cite>
                  </figcaption>
                </figure>
              </div>
            ))
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Reviews and rating end */}
    </div>
  );
}

export default Home;
