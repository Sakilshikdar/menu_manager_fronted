import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';





function Allbook() {
    const baseUrl = "https://book-manager-backend-ngfd.onrender.com/api"
    const { user_id} = useParams();
    console.log(user_id);

    const [Books, setBooks] = useState([])
    useEffect(() => {
        // fetchBooks(baseUrl + '/customer_book/'+user_id)
        fetchBooks(baseUrl + '/all_book/')

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

    const ShowDelete = (book_id) => {
        var deleteConfirm = window.confirm("Are you sure you want to delete?");
        if (deleteConfirm) {
            fetch(baseUrl + '/book_detail/' + book_id,
                {
                    method: 'DELETE'
                }
            )
                .then(response => {
                    if (response.status == 204) {
                        fetchBooks(baseUrl + '/all_book/');
                    }
                })
        }
      }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="table-responsive">
                            <table className="table table-bbooked text-center">
                                <thead>
                                    <tr>
                                        <tr>No</tr>
                                        <th>Product</th>
                                        <th>Author</th>
                                        <th>ISBN No</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        Books.length == 0 ? <tr><td className='text-bg-danger' colSpan="5" >No!! Book Found </td></tr> :
                                        Books.map((book, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Link to={`/book/${book.slug}/${book.id}`}>
                                                        <img src={`${book.image}`} className="image-thumbnail me-3" width={60} alt="..." />
                                                        {book.title}
                                                    </Link>
                                                </td>
                                                <td>{book.author}</td>
                                                <td>{book.isbn}</td>
                                                <td>

                                                    {<>

                                                        <Link onClick={() => ShowDelete(book.id)} className=" my-2 me-2 btn btn-primary btn-sm">Delete </Link>
                                                        <Link to={`/book/${book.slug}/${book.id}`} className=" my-2 me-2 btn btn-primary btn-sm">Upgrade book</Link>
                                                    </>
                                                    }
                                                </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>


                            </table>
                        </div>

                    </div>
                    {/* <div className="col-md-9 mb-2 col-12">
                        <div className="table-responsive">
                            <table className="table table-bbooked text-center">
                                <thead>
                                    <tr>
                                        <tr>No</tr>
                                        <th>Product</th>
                                        <th>Author</th>
                                        <th>ISBN No</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        Booksi.length == 0 ? <tr><td className='text-bg-danger' colSpan="5" >First!! Add a Book </td></tr> :
                                        Books.map((book, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Link to={`/book/${book.slug}/${book.id}`}>
                                                        <img src={`${book.image}`} className="image-thumbnail me-3" width={60} alt="..." />
                                                        {book.title}
                                                    </Link>
                                                </td>
                                                <td>{book.author}</td>
                                                <td>{book.isbn}</td>
                                                <td>

                                                    {<>

                                                        <Link onClick={() => ShowDelete(book.id)} className=" my-2 me-2 btn btn-primary btn-sm">Delete </Link>
                                                        <Link to={`/book/${book.slug}/${book.id}`} className=" my-2 me-2 btn btn-primary btn-sm">Upgrade book</Link>
                                                    </>
                                                    }
                                                </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>


                            </table>
                        </div>

                    </div> */}
                </div>
            </div>

        </div >
    );
}
export default Allbook;