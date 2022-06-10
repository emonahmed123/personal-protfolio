import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    
   
   const menuItems =<>
          <li><NavLink  to='/home'>Home</NavLink></li>
          <li> <a href='#projects'>Project </a></li>
          <li> <a href='#contact'>Contact</a></li>
          <li> <Link to='/about'>About</Link></li>
     </>
      return (
        <>
  <div className="navbar text-dark shadow">
    <div className="navbar-start ">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
           menuItems
       }
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl mx-auto">EMON AHMED</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal  p-0">
     {
         menuItems
     }
      </ul>
    </div>
    <div className="navber-end">
 
    </div>
  </div>
  
        </>
      );
;  }
  
  export default Header;