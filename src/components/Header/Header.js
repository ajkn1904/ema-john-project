import logo from '../../images/Logo.svg';
import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    
    const {user, logOut} = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="logo" />

            <div className='links'>
                <Link to="/">HOME</Link>
                <Link to="/order">ORDER</Link>
                <Link to="/inventory">INVENTORY</Link>
                <Link to="/about">ABOUT</Link>
                { user?.uid ?
                    <button onClick={logOut}>LOG OUT</button>
                    :
                    <>
                        <Link to="/login">LOG IN</Link>
                        <Link to="/signup">SIGN UP</Link>
                    </>
                }

                <a>{user?.email}</a>
            </div>
        </nav>
    );
};

export default Header;