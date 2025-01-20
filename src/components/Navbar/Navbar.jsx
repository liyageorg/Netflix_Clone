import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
//import search_icon from '../../assets/search_icon.svg'
//import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
//import caret_icon from '../../assets/caret_icon.svg'




const Navbar = () => {
  return (
    <div className="navbar">
   <div className="navbar-left">
    <img src={logo} alt="logo"/>
    <ul>
      <li>Home</li>
      <li>Tv Shows</li>
      <li>Movies</li>
      <li>Recently Added</li>
      <li>My List</li>
      
    </ul>
   </div>
   <div className="navbar-right">
    <p>Kids</p>
    <p>DVD</p>
     <div className="navbar-profile">
     <img src={profile_img} alt="" className='profile'/>
     <div className="dropdown">
      <p>Sign Out of Netflix</p>
     </div>
     </div>
   </div>
   </div>
  )
}

export default Navbar
