
import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


function Header(){


    return (
        <nav className="nav-bar">
            <Link to={'/'}><h1><span style={{padding: '0px 15px'}}></span>Mega Quiz</h1></Link>
            <ul className="nav-item">
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/figure'}>Figures</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </nav>
        
    );
}

export default Header;