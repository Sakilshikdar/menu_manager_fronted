import { Link } from "react-router-dom";

function Sidebar() {
    const user_id = localStorage.getItem('customer_id');
    const account_type = localStorage.getItem('account_type');

    return (
        <div >
            <ul className="list-group">
                <Link to="/dashboard" className="list-group-item list-group-item-action active"> Dashboard</Link>
                <Link to="/profile" className="list-group-item list-group-item-action">Profile</Link>
                <Link to={`/allbook/${user_id}`} className="list-group-item list-group-item-action">All Menu</Link>
                {account_type == 'admin' &&

                    <Link to="/addbook" className="list-group-item list-group-item-action">Add Menu</Link>
                }
                <Link to="/customer/ChangePassword" className="list-group-item list-group-item-action">Change Password</Link>

            </ul>
        </div>
    );
}
export default Sidebar;