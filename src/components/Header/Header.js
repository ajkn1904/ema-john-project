import logo from '../../images/Logo.svg';
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />

            <div className='links'>
                <Link to="/">HOME</Link>
                <Link to="/order">ORDER</Link>
                <Link to="/inventory">INVENTORY</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/login">LOGIN</Link>
            </div>
        </nav>
    );
};

export default Header;