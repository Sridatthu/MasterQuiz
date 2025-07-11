import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove token
    localStorage.removeItem("token");
  
    // 2. Clear Redux store
    // dispatch(clearFeed());
    // dispatch(clearRequest());
    // dispatch(removeConnections());
    dispatch(removeUser());
  
    // 3. Redirect to login page
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Master Quiz</Link>
  </div>
 {user &&(<div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/notes">Notes</Link></li>
        <li> <a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
    </div>
  ) }
  
</div>
  )
}

export default NavBar
