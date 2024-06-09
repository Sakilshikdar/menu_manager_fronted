import Sidebar from "./Sidebar";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const baseUrl = "http://127.0.0.1:8000/api"

    const [Menus, setMenus] = useState([])
    const [Reviews, setReviews] = useState([])
    useEffect(() => {
        fetchMenus('https://menu-manager-backend.onrender.com/api/menus/');
        fetchReview('https://menu-manager-backend.onrender.com/api/rating/');
      }, []);
    
    const fetchMenus = (baseurl) => {
        axios.get(baseurl)
            .then(response => {
                setMenus(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const fetchReview = (baseurl) => {
        axios.get(baseurl)
            .then(response => {
                setReviews(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Menus</h4>
                                            <h4>
                                                <Link to="/showAllMenu">
                                                    {Menus.length}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div>
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h4>Total Reviews</h4>
                                            <h4>
                                                <Link to="/" >{Reviews.length}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Dashboard;