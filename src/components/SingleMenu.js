import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


function SingleMenu(menu) {
    return (
    
            <div className="col-12 col-md-3 my-2">
                <div className="card" style={{ width: " 18rem;" }}> 
                    <img src={menu.menu.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Menu title: {menu.menu.title}</h5>
                        <p className="card-text">Description: {menu.menu.description.slice(0,50)} </p>
                        {/* <a href="#" className="btn btn-primary"><i className="fa-solid fa-info"></i> Details: </a> */}
                        <Link to={`/memu/${menu.menu.id}`}>Details</Link>
                    </div>

                </div>
            </div>

    )
}

export default SingleMenu;