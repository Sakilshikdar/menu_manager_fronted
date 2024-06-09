import Sidebar from "./Sidebar";
import React, { useState } from 'react';
import axion from 'axios';


function CustomerChangePassword() {
    const baseurl = 'https://menu-manager-backend.onrender.com/api/'
    const [PasswordData, setPasswordData] = useState({
        'password': '',
        'c_password': ''
    })
    const [ConfirmError, setConfirmError] = useState(false)
    const inputHandler = (event) => {
        event.preventDefault();

        setPasswordData({
            ...PasswordData,
            [event.target.name]: event.target.value
        });


    }
    const customer_id = localStorage.getItem('customer_id');

    const submitHandler = (event) => {
        event.preventDefault();
        if (PasswordData.password != PasswordData.c_password) {
            setConfirmError(true);
        } else {
            setConfirmError(false);
            const formdata = new FormData();
            formdata.append('password', PasswordData.password);
            axion.post(baseurl + 'admincustomer-change-password/' + customer_id + '/', formdata)
                .then(data => {
                    alert('Password Changed Successfully');
                }).catch(error => {
                    console.log(error);
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
                        {
                            ConfirmError && <p className="text-danger">Password does not match</p>
                        }
                        <div className="card-header">

                            <h3 className="mb-4">
                                Change Password
                            </h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="pwd">Change Password</label>
                                    <input onChange={inputHandler} type="password" className="form-control" id="pwd" placeholder="Password"
                                        name="password" value={PasswordData.password} />
                                </div>
                                <div className="form-group">
                                    <label for="cpwd">New Password</label>
                                    <input onChange={inputHandler} type="password" className="form-control" id="cpwd" placeholder="Password"
                                        name="c_password" value={PasswordData.c_password} />
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
export default CustomerChangePassword;