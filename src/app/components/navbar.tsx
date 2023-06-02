"use client";
import { useState } from "react";
import Image from 'next/image';

import hamburger from '/public/navbar/menu.svg';


const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <div
            className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
            >
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <button
            className="hamburger"
            onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                {/* icon from Heroicons.com */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                    />
                </svg> */}
                
                <Image src={hamburger} alt="hamburger menu icon"/>
            </button>
      </nav>
    );
}
 
export default NavBar;