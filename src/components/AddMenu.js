
import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "./Sidebar";

function AddMenu() {
    const baseurl = 'http://127.0.0.1:8000/api/'
    const customer_id = localStorage.getItem('customer_id');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [productData, setProductData] = useState({
        "title": '',
        'customer': customer_id,
        "slug": '',
        "description": '',
        "image": '',
        'published_date': '',
        "cook": '',
        "price": '',
    });




    const inputHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    }
    const fileHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.files[0] });
    }






    const submitHandler = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Your form submission logic here
        const formData = new FormData();
        formData.append('customer', productData.customer);
        formData.append('title', productData.title);
        formData.append('slug', productData.slug);
        formData.append('cook', productData.cook);
        formData.append('published_date', productData.published_date);
        formData.append('price', productData.price);
        formData.append('description', productData.description);
        formData.append('image', productData.image);

        axios.post(baseurl + 'menus/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {

                if (response.status == 201) {
                    setProductData({
                        "title": '',
                        'customer': '',
                        "slug": '',
                        "description": '',
                        "image": '',
                        'published_date': '',
                        "cook": '',
                        "price": '', 
                    })
                    setErrorMsg(
                        ''
                    );
                    setSuccessMsg('Menu added Successfully')
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
                                Add Menu
                            </h3>
                        </div>
                        <div className="card-body">
                            {successMsg && <div className="text-success mb-2 p-2 w-25">Menu added</div>}
                            {errorMsg && <div className="text-danger p-3 mb-2">{errorMsg}</div>}

                            <form>
                                <div className="form-group  mb-2">
                                    <label for="Title">Title</label>
                                    <input name="title" value={productData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>
                                <p className="text-danger  pt-2 w-25">Slug and Title are same name</p>
                                <div className="form-group  mb-2">
                                    <label for="slug">Slug</label>
                                    <input name="slug" value={productData.title} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>
                               
                                <div className="form-group  mb-2">
                                    <label for="published_date">Published date</label>
                                    <input name="published_date" value={productData.published_date} type="date" onChange={inputHandler} className="form-control" id='published_date' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="cook">Cook</label>
                                    <input name="cook" value={productData.suthor} type="text" onChange={inputHandler} className="form-control" id='author' />
                                </div>
                                <div className="form-group  mb-2">
                                    <label for="price">Price</label>
                                    <input name="price" value={productData.price} type="text" onChange={inputHandler} className="form-control" id='Title' />
                                </div>


                                <div className="form-group mb-2">
                                    <label for="description">Description</label>
                                    <textarea name="description" value={productData.description} onChange={inputHandler} rows={8} className="form-control" id='price' />
                                </div>

                              

                                <div className="form-group  mb-2">
                                    <label for="Product_Imgs">Product Images: </label>
                                    <input name="image"  type="file" onChange={fileHandler} className="form-control" id='Product_Imgs' />
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
export default AddMenu;