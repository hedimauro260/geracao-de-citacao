import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import '../styles/HomePages.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Anotado.</Link>
            </div>
            <div className="navbar">
                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/estados" className={({ isActive}) => isActive ? "active" : ""}>Estados</NavLink></li>
                    <li><NavLink to="/top-citacao" className={({ isActive}) => isActive ? "active" : ""}>Top Citação</NavLink></li>
                    <li><NavLink to="/citacao-do-dia" className={({ isActive}) => isActive ? "active" : ""}>Citação do Dia</NavLink></li>
                </ul>
            </div>
            <div className="login">
                <Link to='/login'><FaUser />Login</Link>
            </div>
        </header>
    );
};

export default Header;