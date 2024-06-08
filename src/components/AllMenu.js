import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';






function Allbook() {
    const baseUrl = "http://127.0.0.1:8000/api"
    const { user_id } = useParams();
    const account_type = localStorage.getItem('account_type');

    const [Menus, setMenus] = useState([])
    useEffect(() => {
        fetchMenus(baseUrl + '/menus/')

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

    const ShowDelete = (menu_id) => {
        var deleteConfirm = window.confirm("Are you sure you want to delete?");
        if (deleteConfirm) {
            fetch('http://127.0.0.1:8000/api/menu-detail/' + menu_id + '/',
                {
                    method: 'DELETE'
                }
            )
                .then(response => {
                    if (response.status == 204) {
                        fetchMenus(baseUrl + '/all_menu/');
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
                                        <th>Cook</th>
                                        <th>Price</th>
                                        <th>Action{account_type == 'user' && <span className='text-danger'>( admin only edit)</span>}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        Menus.length == 0 ? <tr><td className='text-bg-danger' colSpan="5" >No!! Menu Found </td></tr> :
                                            Menus.map((menu, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link to={`/menu/${menu.slug}/${menu.id}`}>
                                                            <img src={`${menu.image}`} className="image-thumbnail me-3" width={60} alt="..." />
                                                            {menu.title}
                                                        </Link>
                                                    </td>
                                                    <td>{menu.cook}</td>
                                                    <td>{menu.price}</td>

                                                    {account_type == 'admin' &&
                                                        <td>

                                                            <>

                                                                <Link onClick={() => ShowDelete(menu.id)} className=" my-2 me-2 btn btn-primary btn-sm">Delete </Link>
                                                                <Link to={`/menu/${menu.slug}/${menu.id}`} className=" my-2 me-2 btn btn-primary btn-sm">Upgrade menu</Link>
                                                            </>
                                                        </td>
                                                    }
                                                    {account_type == 'user' &&
                                                        <>
                                                            <td>
                                                                <button disabled className=" my-2 me-2 btn btn-primary btn-sm">Delete
                                                                </button>
                                                                <button disabled className=" my-2 me-2 btn btn-primary btn-sm">Upgrade menu

                                                                </button>
                                                            </td>
                                                        </>
                                                    }
                                                </tr>

                                            ))
                                    }
                                </tbody>


                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}
export default Allbook;