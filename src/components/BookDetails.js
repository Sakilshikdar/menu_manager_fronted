import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

function BookDetails() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [book, setBook] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { book_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + 'book_detail/' + book_id);
    fetchReview(baseUrl + 'review_book/' + book_id);
  }, [baseUrl, book_id]);

  const fetchData = (baseurl) => {
    fetch(baseurl)
      .then(response => response.json())
      .then(data => {
        setBook(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const fetchReview = (baseurl) => {
    axios.get(baseurl)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const imgStyle = {
    width: '70%',
    height: '25vw',
    objectFit: 'contain',
    padding: '20px',
    background: '#f9f9f9'
  }

  const ShowDelete = (id) => {
    const deleteConfirm = window.confirm("Are you sure you want to delete?");
    if (deleteConfirm) {
      fetch(baseUrl + 'review_detail/' + id, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.status === 204) {
            fetchReview(baseUrl + 'book_detail/' + book_id);
          }
        })
        .catch(error => console.error('Error deleting review:', error));
    }
  }

  // const re= reviews || [];

  return (
    <div className='container'>
      <h1>Book Details</h1>
      <div className="card" >
        <img src={book.image} className="card-img-top" style={imgStyle} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Book title: {book.title}</h5>
          <p className="card-text">Description: {book.description}</p>
          <p className="card-text">ISBN: {book.isbn}</p>
          <div>
            <div className='d-flex align-items-center justify-content-between'>
              <h3 className='my-4'>Book Review</h3>
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Review
              </button>
              <Modal book_id={book.id} book_ratings={book.book_ratings} />
            </div>
            {reviews.length === 0 ? <p>No Review Found</p> :
              reviews.map((item, index) => (
                <ul className="card" key={index}>
                  <div className="card-body">
                    <p className="card-text">Review: {item.comment}</p>
                    <p className="card-text">Rating: {item.rating}</p>
                    <p className="card-text">User: {item.user}</p>
                    <button className='btn btn-danger' onClick={() => ShowDelete(item.id)}>Delete</button>
                  </div>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
