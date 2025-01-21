import React from 'react';
import './Navbar.css';
import { Search, Bell } from 'lucide-react';
import logo from '../../assets/logo.png';
import profile_img from '../../assets/profile_img.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* Search Icon */}
        <div className="navbar-search">
          <Search size={20} className="icon" />
        </div>

        {/* Kids Section */}
        <p>Kids</p>

        {/* Notification Icon */}
        <div className="navbar-notification">
          <Bell size={20} className="icon" />
        </div>

        {/* Profile with Dropdown */}
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
