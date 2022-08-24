import React from "react";
import {NavLink,} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import {Link} from "react-scroll";

const Header = () => {
    
   
   const menuItems =<>
          <li><NavLink className='bg-neutral ' to='/home'>Home</NavLink></li>
          <li><Link smooth to='/home#projects'>Project </Link></li>
          <li><Link smooth to ='/home#contact'>Contact</Link></li>
          <li><Link smooth to='/home#about' >About</Link></li>
          <li><Link smooth to='/bolg'> Blog </Link></li> 
     </> 
      return (
        <>
  <div className="navbar text-dark shadow  ">
    <div className="navbar-start">
      <div className="dropdown ">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
           menuItems
       }
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-3xl ">EMON  <span className="text-neutral ml-1">  AHMED</span> </a>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal  p-0 ">
     {
         menuItems
     }
      </ul>
    </div>
   
  </div>
  
        </>
      );
;  }
  
  export default Header;