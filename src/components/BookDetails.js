import React from 'react';
import logo from '../logo.svg';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {  UserContext } from '../Context';

function BookDetails()
{

const baseUrl = "http://127.0.0.1:8000/api/"
const [book, setBook] = useState([]);
const {  book_id } = useParams();

useEffect(() => {
    fetchData(baseUrl + 'book_detail/' + book_id)
}, []);

function fetchData(baseurl) {
    fetch(baseurl)
    .then(response => response.json())
    .then(data => {
        setBook(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

console.log(book);

const imgStyle = {
    width: '100%',
    height: '20vw',
    objectfit: 'contain',
    padding: '20px',
    background: '#f9f9f9'
}

const bookRatings = book.book_ratings || [];
    return (
        <div className='container'>
            <h1>Book Details</h1>
            <div className="card" style={{ width: " 18rem;" }}>
                    <img src={book.image} className="card-img-top" style={imgStyle} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Book title: {book.title}</h5>
                        <p className="card-text">Description:{book.description}</p>
                        <p className="card-text">ISBN: {book.isbn}</p>
                        <div>
      <h1>Book Ratings</h1>
      <ul>
        {bookRatings.map((rating, index) => {
          const [score, description] = rating.split(' - ');
          return (
            <li key={index}>
              <strong>Score:</strong> {score}<br />
              <strong>Description:</strong> {description}
            </li>
          );
        })}
      </ul>
    </div>
                        
             </div>

                </div>
        </div>
    );
}

export default BookDetails;