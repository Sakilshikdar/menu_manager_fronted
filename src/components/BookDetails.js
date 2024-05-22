import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';
import UpdateModal from './UpdateModel';
import { UserContext } from '../Context';

import { useContext } from 'react';

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
            fetchReview(baseUrl + 'review_book/' + book_id);
          }
        })
        .catch(error => console.error('Error deleting review:', error));
    }
  }

  // const re= reviews || [];
  console.log(reviews);

  return (
    <div className='container my-4'>
      <h1 className='mb-4'>Book Details</h1>
      <div className="card" >
        <img src={book.image} className="card-img-top  d-flex align-items-center justify-content-center" style={imgStyle} alt="..." />
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
              <Modal book_id={book.id}   />
            </div>
            {reviews.length === 0 ? <p>No Review Found</p> :
              reviews.map((item, index) => (
                <ul className="card" key={index}>
                  <div className="card-body">
                    
                    <p className="card-text">Comment: {item.comment}</p>

                    {
                      item.rating==1 && <i class="fa-solid fa-star text-warning"></i>
                    }

                    {
                      item.rating==2 &&
                      <>
                       <i class="fa-solid fa-star text-warning"></i>
                       <i class="fa-solid fa-star text-warning"></i>
                      </>
                    }

                    {
                      item.rating==3 && <>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                     </>
                    }
                    

                    {
                      item.rating==4 && <>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i  class="fa-solid fa-star text-warning"></i>
                      <i  class="fa-solid fa-star text-warning"></i>
                      <i  class="fa-solid fa-star text-warning"></i>
                     </>
                    }

                    {
                      item.rating==5 && <>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                     </>
                    }
                    {
                      item.rating > 5 && <>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                     </>
                    }
                    {/* <p className="card-text">User: {item.customer.username}</p> */}
                    <br></br>
                    <button className='btn btn-danger mt-3' onClick={() => ShowDelete(item.id)}>Delete</button>
                    <button className='btn btn-primary ms-3 mt-3' data-bs-toggle="modal" data-bs-target={`#updateModal-${item.id}`}>Edit</button>
                    <UpdateModal review={item}  fetchReview={fetchReview} />
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
