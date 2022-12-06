import React, { useState } from 'react';
import './Navbar.css'
import { CircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(true)
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className='mt-4' >

            <div className="hamble md:hidden h-6 w-6" onClick={handleClick}>
                {
                    open?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                }
            </div>
            <ul className={`md:flex gap-3 justify-center absolute  md:static duration-500 ${open?'top-[-120px]':'top-6'} ` }>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>

            </ul>

        </div>
    );
};

export default Navbar;