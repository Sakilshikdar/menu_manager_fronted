import SingleBook from './SingleBook';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowAllBook() {


    const [Books, setBooks] = useState([])
    const baseUrl = "http://127.0.0.1:8000/api"
    useEffect(() => {
        fetchBooks(baseUrl + '/all_book')

    }, []);
    const fetchBooks = (baseurl) => {
        axios.get(baseurl)
            .then(response => {
                setBooks(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    return (
        <div className='container d-flex align-items-center justify-content-between'>
            <div className='row'>

                {
                    Books.map((book, index) => {
                        return <SingleBook key={index}
                            book={book} />
                    })

                }
            </div>
        </div>
    )
}

export default ShowAllBook