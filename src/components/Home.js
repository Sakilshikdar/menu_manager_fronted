import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
import SingleBook from './SingleBook';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {

const [Books, setBooks] = useState([])
const baseUrl = "http://127.0.0.1:8000/api"
useEffect(() => {
  fetchBooks(baseUrl + '/all_book')
  
}, []);
const fetchBooks = (baseurl) => {
  axios.get(baseurl)
  .then(response => {
    setBooks(response.data)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}



    return (
        <div className="container">
        
          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='my-4 '>All Books
            </h3>
            <Link to="/showAllBook" className='mb-4  btn  btn-dark text-md-end'>View All Books <i className="fa-solid fa-arrow-right px-1"></i></Link>
        </div>
        <div className='row'>

        {
                        Books.map((book, index) => {
                            return <SingleBook key={index} 
                            book={book} />
                        })

                    }
          </div>
  
  
  
  
        {/* Revies and retting start*/}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner bg-dark">
            <div className="carousel-item active p-5">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p className='text-white'>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer text-white">
                <i class="fa-solid fa-star text-warning"> </i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                   Reviews <cite title="Source Title"> name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item active p-5">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p className='text-white'>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer text-white">
                <i class="fa-solid fa-star text-warning"> </i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                   Reviews <cite title="Source Title"> name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item active p-5">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p className='text-white'>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer text-white">
                <i class="fa-solid fa-star text-warning"> </i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                   Reviews <cite title="Source Title"> name</cite>
                </figcaption>
              </figure>
            </div>
          
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
        {/* Revies and retting end */}
  
  
      </div>
    )
}   


export default Home;