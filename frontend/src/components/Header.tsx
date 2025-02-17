import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">Anotado.</Link>
            </div>
            <div className={styles.navbar}>
                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? styles.active : ""}>Home</NavLink></li>
                    <li><NavLink to="/estados" className={({ isActive}) => isActive ? styles.active : ""}>Estados</NavLink></li>
                    <li><NavLink to="/top-citacao" className={({ isActive}) => isActive ? styles.active : ""}>Top Citação</NavLink></li>
                    <li><NavLink to="/citacao-do-dia" className={({ isActive}) => isActive ? styles.active : ""}>Citação do Dia</NavLink></li>
                </ul>
            </div>
            <div className={styles.login}>
                <Link to='/auth'><FaUser />Entrar | Cadastrar</Link>
            </div>
        </header>
    );
};

export default Header;