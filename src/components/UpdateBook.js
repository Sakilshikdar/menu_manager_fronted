import Sidebar from './Sidebar';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";





function UpdateBook() {
    const { book_id } = useParams();
    const baseUrl = "https://book-manager-backend-ngfd.onrender.com/api/"
    const customer_id = localStorage.getItem('customer_id');
    const [categoryData, setCategoryData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [BookData, setBookData] = useState({
        "title": '',
        'customer': customer_id,
        "slug": '',
        "description": '',
        "image": '',
        'published_date': '',
        "author": '',
        "isbn": '',
    });

    useEffect(() => {
        fetchData(baseUrl + 'book_detail/' + book_id)
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setBookData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
   


    const formatDate = (dateString) => {
        const date = new Date(dateString);
      
        // Options for formatting the date into a 12-hour format with AM/PM
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        };
      
        return date.toLocaleString('en-US', options);
      };
      
      const DateDisplay = ({ dateString }) => {
        return (
          <div>
            <h1>Formatted Date</h1>
            <p>{formatDate(dateString)}</p>
          </div>
        );
      };
      

    const inputHandler = (e) => {
        setBookData({ ...BookData, [e.target.name]: e.target.value });

    }

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData();
        formData.append('customer', BookData.customer);
        formData.append('title', BookData.title);
        formData.append('slug', BookData.slug);
        formData.append('author', BookData.author);
        formData.append('published_date', BookData.published_date);
        formData.append('isbn', BookData.isbn);
        formData.append('description', BookData.description);
       

        axios.patch(baseUrl + 'book_detail/' + book_id + '/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {

                if (response.status == 200) {

                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg('Book Updated Successfully');  
                }

                else {
                    setSuccessMsg('');
                    setErrorMsg(response.statusText);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 mb-2 col-12">
                        <div className="card-header">

                            <h3 className="mb-4">
                                Update Product
                            </h3>
                        </div>
                        <div className="card-body">
                            {successMsg && <p className="gittext-success h4 mb-2 text-success">{successMsg}</p>}
                            {errorMsg && <div className="text-danger p-3 mb-2">{errorMsg}</div>}

                            <form>

                                <div className="form-group  mb-2">
                                    <label for="Title">Title</label>
                                    <input name="title" value={BookData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>
                                <p className="text-danger  pt-2 w-25">Slug and Title are same name</p>
                                <div className="form-group  mb-2">
                                    <label for="slug">Slug</label>
                                    <input name="slug" value={BookData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>

                                <div className="form-group  mb-2">
                                    <label for="published_date">Published date</label>
                                    <input name="published_date" disabled value={BookData.published_date.slice(0,10)} type="text" onChange={inputHandler} className="form-control" id='published_date' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="author">Author</label>
                                    <input name="author" value={BookData.author} type="text" onChange={inputHandler} className="form-control" id='author' />
                                </div>

                                <div className="form-group  mb-2">
                                    <label for="isbn">ISBN NO</label>
                                    <input name="isbn" value={BookData.isbn} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>


                                <div className="form-group mb-2">
                                    <label for="description">Description</label>
                                    <textarea name="description" value={BookData.description} onChange={inputHandler} rows={8} className="form-control" id='isbn' />
                                </div>
                                <button onClick={submitHandler} type="button" className="btn btn-primary my-3">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


const styles = {
    'deleteBtn': {
        'position': 'absolute',

    }
}
export default UpdateBook;