import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className='header'>
    <link rel='stylesheet' href='CSS/Header.css'></link>
    <div>
        <h1>
            <Link to="/" className='logo'>
                Cloth shopping
            </Link>
        </h1>
    </div>
    <div className='headerlinks'>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
            <li><Link to="/SignUp">Register</Link></li>
        </ul>
        <ul>
            <li>
                <Link to="/Cart" className='cart'>Cart                </Link></li>
        </ul>

    </div>
    </header>
  )
}

export default Header