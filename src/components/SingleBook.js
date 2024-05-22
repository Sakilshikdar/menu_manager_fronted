import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


function SingleBook(book) {
    return (
    
            <div className="col-12 col-md-3 my-2">
            {/* <h1>Book Details</h1> */}
                <div className="card" style={{ width: " 18rem;" }}> 
                    <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Book title: {book.book.title}</h5>
                        <p className="card-text">Description: {book.book.description} </p>
                        {/* <a href="#" className="btn btn-primary"><i className="fa-solid fa-info"></i> Details: </a> */}
                        <Link to={`/book/${book.book.id}`}>Details</Link>
                    </div>

                </div>
            </div>

    )
}

export default SingleBook;