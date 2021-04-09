import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../fresh-valley-main/icons/logo.png'
import './Header.css'

const Header = () => {

    return (
        <div className="header container">
            <nav>
                <img src={logo} alt="" />
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/">Admin</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;