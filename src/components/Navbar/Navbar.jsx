import React from 'react'
import "./Navbar.css"
import logo from "../../assets/img/logo.jpg"
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt="logo" className='logo' />
        <div className='line'></div>
      </div>
      <div className='menu'>
            <ul>
                <li><NavLink to="/" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}>00 HOME</NavLink></li>
                <li><NavLink to="/destination/" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}>01 DESTINATION</NavLink></li>
                <li><NavLink to="/crew" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}>02 CREW</NavLink></li>
                <li><NavLink to="/technology" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}>03 TECHNOLOGY</NavLink></li>
                <li><NavLink to="/invitation" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}>04 INVITATION</NavLink></li>
            </ul>
      </div>
    </nav>
  )
}
