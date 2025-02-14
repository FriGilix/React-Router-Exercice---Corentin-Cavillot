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
                <li><NavLink to="/" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}><span className='number-nav'>00</span> HOME</NavLink></li>
                <li><NavLink to="/destination/" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}><span className='number-nav'>01</span> DESTINATION</NavLink></li>
                <li><NavLink to="/crew" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}><span className='number-nav'>02</span> CREW</NavLink></li>
                <li><NavLink to="/technology" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}><span className='number-nav'>03</span> TECHNOLOGY</NavLink></li>
                <li><NavLink to="/invitation" className={({ isActive}) => "nav-link" + (isActive ? " selected" : "")}><span className='number-nav'>04</span> INVITATION</NavLink></li>
            </ul>
      </div>
    </nav>
  )
}
