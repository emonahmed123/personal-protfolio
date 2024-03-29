import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// import {Link} from "react-scroll";
import Toggole from "../Home/Toggole/Toggole";
const Header = () => {
    
   
   const menuItems =<>
          <li><Link className='font-bold ' to='/home'>HOME</Link></li>
          <li><Link className='font-bold  ' smooth to='/home#projects'>PROJECT </Link></li>
          <li><Link className='font-bold  ' smooth to ='/home#contact'>CONTACT</Link></li>
          <li><Link className='font-bold  ' smooth to='/home#about' >ABOUT</Link></li>
          <li><Link className='font-bold  ' smooth to='/bolg'> BLOG </Link></li> 
          <li><Toggole/> </li> 
                  
     </> 
      return (
        <>
  <div className="navbar text-white shadow   ">
    <div className="navbar-start ">
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
      <a className="btn btn-ghost normal-case text-3xl ml-11 ">EMON  <span className="text-neutral ml-1">  AHMED</span> </a>
    </div>
    <div className="navbar-center hidden lg:flex  mx-auto">
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