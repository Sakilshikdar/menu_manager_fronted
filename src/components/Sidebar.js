import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div >
            <ul className="list-group">
                <Link to="/dashboard" className="list-group-item list-group-item-action active"> Dashboard</Link>
                <Link to="/profile" className="list-group-item list-group-item-action">Profile</Link>
                <Link to="/allbook" className="list-group-item list-group-item-action">All Book</Link>
                <Link to="/addbook" className="list-group-item list-group-item-action">Add Book</Link>
                <Link to="/customer/ChangePassword" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/customer/address" className="list-group-item list-group-item-action">Address</Link>
                <Link
                    to="" className="list-group-item list-group-item-action">Logout</Link>
            </ul>
        </div>
    );
}
export default Sidebar;