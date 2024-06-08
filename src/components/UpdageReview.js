import Sidebar from './Sidebar';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";





function UpdateMenu() {
    const { book_id } = useParams();
    const baseUrl = "http://127.0.0.1:8000/api/"
    const customer_id = localStorage.getItem('customer_id');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [MenuData, setMenuData] = useState({
        "title": '',
        'customer': customer_id,
        "slug": '',
        "description": '',
        "image": '',
        'published_date': '',
        "author": '',
        "price": '',
    });

    useEffect(() => {
        fetchReview(baseUrl + 'review_book/' + book_id);
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setMenuData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }



    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };

        return date.toLocaleString('en-US', options);
    };


    const inputHandler = (e) => {
        setMenuData({ ...MenuData, [e.target.name]: e.target.value });

    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('customer', MenuData.customer);
        formData.append('title', MenuData.title);
        formData.append('slug', MenuData.slug);
        formData.append('author', MenuData.author);
        formData.append('published_date', MenuData.published_date);
        formData.append('price', MenuData.price);
        formData.append('description', MenuData.description);


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
                    setSuccessMsg(response.statusText);
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
                            {successMsg && <div className="text-success mb-2">{successMsg}</div>}
                            {errorMsg && <div className="text-danger mb-2">{errorMsg}</div>}

                            <form>

                                <div className="form-group  mb-2">
                                    <label for="Title">Title</label>
                                    <input name="title" value={MenuData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>
                                <p className="text-danger  pt-2 w-25">Slug and Title are same name</p>
                                <div className="form-group  mb-2">
                                    <label for="slug">Slug</label>
                                    <input name="slug" value={MenuData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>

                                <div className="form-group  mb-2">
                                    <label for="published_date">Published date</label>
                                    <input name="published_date" disabled value={MenuData.published_date.slice(0, 10)} type="text" onChange={inputHandler} className="form-control" id='published_date' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="author">Author</label>
                                    <input name="author" value={MenuData.author} type="text" onChange={inputHandler} className="form-control" id='author' />
                                </div>

                                <div className="form-group  mb-2">
                                    <label for="price">ISBN NO</label>
                                    <input name="price" value={MenuData.price} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>


                                <div className="form-group mb-2">
                                    <label for="description">Description</label>
                                    <textarea name="description" value={MenuData.description} onChange={inputHandler} rows={8} className="form-control" id='price' />
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
export default UpdateMenu;