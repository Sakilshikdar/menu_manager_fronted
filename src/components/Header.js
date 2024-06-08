import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext, CartContext } from '../Context';

function Header() {
    const userContext = useContext(UserContext);
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg  py-3 px-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="#">Menu Manager</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active" aria-current="page" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link active" aria-current="page" >Contact</Link>
                            </li>

                            {!userContext ?
                                <>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link active" href="#">Resister</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/login' className="nav-link active" href="#">Login</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to='/dashboard' className="nav-link active" href="#">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/logout' className="nav-link active" href="#">Logout</Link>
                                    </li>
                                </>
                            }

                           
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )


}


export default Header;