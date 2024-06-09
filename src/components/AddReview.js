import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


function AddReview(props) {

    const baseUrl = "https://menu-manager-backend.onrender.com/api/"
    const customer_id = localStorage.getItem('customer_id');
    const { menu_id } = useParams();
    const [ErrorMsg, setErrorMsg] = useState('');
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [ReviewData, setReviewData] = useState({
        'comment': '',
        'rating': 1,
        'customer': customer_id,
        'menu': menu_id,
    });

    const inputHandler = (e) => {
        setReviewData({ ...ReviewData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('comment', ReviewData.comment);
        formData.append('rating', ReviewData.rating);
        formData.append('customer', customer_id);
        formData.append('menu', menu_id);
        axios.post(baseUrl + 'menu-reviews' + '/', formData,)
            .then(function (response) {
                if (response.status != 201) {
                    setErrorMsg('Data not saved');
                    setSuccessMsg('');
                } else {
                    setErrorMsg('');
                    setSuccessMsg('Review added successfully');
                }
            }
            )
            .catch(function (error) {
                console.log(error);
            });
            window.location.href = `/menu/${menu_id}`;
    }

    const disbleButton = (ReviewData.reviews == '')

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
                                Add Review
                            </h3>
                        </div>
                        <div className="card-body">
                            {ErrorMsg && <p className="alert alert-danger">{ErrorMsg}</p>}
                            {SuccessMsg && <p className="alert alert-success">{SuccessMsg}</p>}

                            <form>
                                <div className="form-group">
                                    <label for="comment" className="from-label">Add review</label>
                                    <textarea name="comment" value={ReviewData.address} onChange={inputHandler} className="form-control" id='reviews' placeholder="Enter your review" />
                                </div>
                                <div className="form-group">
                                    <label for="rating" className="from-label">Add rating</label>
                                    <select name="rating" onChange={inputHandler} className="form-control" id='rating'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <button onClick={submitHandler} type="submit" className="btn btn-primary my-3" disabled={disbleButton}>Submit</button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default AddReview;