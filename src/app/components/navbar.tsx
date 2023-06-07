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
                <Image src={hamburger} alt="hamburger menu icon"/>
            </button>
      </nav>
    );
}
 
export default NavBar;