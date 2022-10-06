import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src="../../../images/Logo.svg" alt="logo" />

            <div className='links'>
                <a href="/home">HOME</a>
                <a href="/order">ORDER</a>
                <a href="/orderReview">ORDER REVIEW</a>
                <a href="/inventory">INVENTORY</a>
                <a href="/login">LOGIN</a>
            </div>
        </nav>
    );
};

export default Header;