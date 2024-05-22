
import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context";
import { useContext } from "react";


function Modal(props) {
    const { book_id} = props;
    const baseUrl = "http://127.0.0.1:8000/api/"
    const customer_id = localStorage.getItem('customer_id');
    // const { book_id } = useParams();
    const [ErrorMsg, setErrorMsg] = useState('');
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [ReviewData, setReviewData] = useState({
        'comment': '',
        'rating': 1,
        'customer': customer_id,
        'book': book_id,
    });

    const userContext = useContext(UserContext);
    if(!userContext){
        window.location.href = '/login';
    }
    
  useEffect(() => {
  }, [baseUrl, book_id]);

 

    const inputHandler = (e) => {
        setReviewData({ ...ReviewData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('comment', ReviewData.comment);
        formData.append('rating', ReviewData.rating);
        formData.append('customer', customer_id);
        formData.append('book', book_id);
        axios.post(baseUrl + 'book-reviews' + '/', formData,)
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
            window.location.reload()
            
        }
        
        const disbleButton = (ReviewData.reviews == '')

    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        
                        <div class="modal-body">
                            <div>
                                <div className="container mt-5">
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
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
                            <button onClick={submitHandler} type="submit" data-bs-dismiss="modal" className="btn btn-primary my-3" disabled={disbleButton}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;