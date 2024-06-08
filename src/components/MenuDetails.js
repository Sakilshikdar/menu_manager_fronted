import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';
import UpdateModal from './UpdateModel';
import logo from '../logo.svg';

import { useContext } from 'react';

function MenuDetails() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [menu, setMenu] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { menu_id } = useParams();
  const account_type = localStorage.getItem('account_type');





  useEffect(() => {
    fetchData('http://127.0.0.1:8000/api/menu-detail/' + menu_id + '/');
    fetchReview('http://127.0.0.1:8000/api/rating/');
  }, [baseUrl, menu_id]);

  const fetchData = (baseurl) => {
    fetch(baseurl)
      .then(response => response.json())
      .then(data => {
        setMenu(data);
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
      fetch(baseUrl + 'review_detail/' + id + '/', {
        method: 'DELETE'
      })
        .then(response => {
          if (response.status == 204) {
            fetchReview(baseUrl + 'rating/');
          }
        })
        .catch(error => console.error('Error deleting review:', error));
    }
  }

  const item = reviews;
  console.log(item);


  return (
    <div className='container my-4'>
      <h1 className='mb-4'>All Details</h1>
      <div className="card" >
        <img src={menu.image} className="card-img-top  d-flex align-items-center justify-content-center" style={imgStyle} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Menu title: {menu.title}</h5>
          <p className="card-text">Description: {menu.description}</p>
          <p className="card-text">Price: {menu.price}</p>
          <>
            <div className='d-flex align-items-center justify-content-between'>
              <h3 className='my-4'>Menu Review</h3>
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Review
              </button>
              <Modal menu_id={menu.id} />
            </div>
            {reviews.length === 0 ? <p>No Review Found</p> :
              reviews.map((item, index) => (
                <ul className="card" key={index}>
                  <div className="card-body">

                    <p className="card-text">Comment: {item.comment}</p>

                    {
                      item.rating == 1 && <i class="fa-solid fa-star text-warning"></i>
                    }

                    {
                      item.rating == 2 &&
                      <>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </>
                    }

                    {
                      item.rating == 3 && <>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </>
                    }


                    {
                      item.rating == 4 && <>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                      </>
                    }

                    {
                      item.rating == 5 && <>
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
                    <br></br>
                    {
                      account_type == 'admin' &&
                      <>
                        <button className='btn btn-danger mt-3' onClick={() => ShowDelete(item.id)}>Delete</button>
                        <button className='btn btn-primary ms-3 mt-3' data-bs-toggle="modal" data-bs-target={`#updateModal-${item.id}`}>Edit</button>
                        <UpdateModal review={item} fetchReview={fetchReview} />
                      </>
                    }
                    {
                      account_type == 'user' &&
                      <>
                        <button disabled className='btn btn-danger mt-3' onClick={() => ShowDelete(item.id)}>Delete</button>
                        <button disabled className='btn btn-primary ms-3 mt-3' data-bs-toggle="modal" data-bs-target={`#updateModal-${item.id}`}>Edit</button>
                        <UpdateModal review={item} fetchReview={fetchReview} />
                        <>
                        <p className='mt-2 text-danger'>(only admin edit)</p>
                        </>
                      </>
                    }
                  </div>
                </ul>
              ))
            }

          </>
        </div>
      </div>


    </div>
  );
}

export default MenuDetails;
