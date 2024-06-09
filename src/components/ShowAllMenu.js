import SingleMenu from './SingleMenu';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowAllMenu() {


    const [Menus, setMenus] = useState([])
    const baseUrl = "http://127.0.0.1:8000/api"
    useEffect(() => {
        fetchMenus('https://menu-manager-backend.onrender.com/api/menus/')

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
    return (
        <div className='container '>
            <h1 className='my-4'>All Menus</h1>
            <div className='row'>

                {
                    Menus.map((menu, index) => {
                        return <SingleMenu key={index}
                            menu={menu} />
                    })

                }
            </div>
        </div>
    )
}

export default ShowAllMenu