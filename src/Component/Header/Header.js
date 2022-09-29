import React from 'react';
import './Header.css'
import logo from '../../Images/logos.png'
const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className='logos' />
            <span className='ml-4'>Health-Fit</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a>Home</a></li>
           
            <li><a>About</a></li>
            <li><a>Blog</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;