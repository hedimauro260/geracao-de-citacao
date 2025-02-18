import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu suspenso
    const navigate = useNavigate();

    // Verifica o estado de autenticação no localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

    // Função para lidar com logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Define o estado de autenticação como false
    localStorage.removeItem('authToken'); // Remove o token do localStorage
    navigate('/'); // Redireciona para a HomePage
    setIsMenuOpen(false); // Fecha o menu suspenso após o logout
  };

  // Função para alternar a visibilidade do menu suspenso
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Alterna o estado do menu
  };

  // Função para fechar o menu suspenso quando o usuário clica fora dele
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">Anotado.</Link>
            </div>
            <div className={styles.navbar}>
                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? styles.active : ""}>Home</NavLink></li>
                    <li><NavLink to="/estados" className={({ isActive}) => isActive ? styles.active : ""}>Estados de Espirito</NavLink></li>
                    <li><NavLink to="/top-citacao" className={({ isActive}) => isActive ? styles.active : ""}>Top Citação</NavLink></li>
                    <li><NavLink to="/citacao-do-dia" className={({ isActive}) => isActive ? styles.active : ""}>Citação do Dia</NavLink></li>
                </ul>
            </div>
            <div className={styles.login}>
            {isLoggedIn ? (
          // Se o usuário estiver logado, exibe o menu suspenso
          <div className={styles.userMenu}>
            <div className={styles.userAvatar}
            onClick={toggleMenu} // Alternar o menu ao clicar no avatar
            style={{ cursor: 'pointer' }}
            >
              <FaUser />
            </div>
            <div className={styles.menuDropdown}
            style={{ display: isMenuOpen ? 'block' : 'none' }} // Controla a visibilidade do menu
            >
              <ul>
                <li>
                  <Link to="/minha-conta" onClick={closeMenu}>Minha Conta</Link>
                </li>
                <li>
                  <Link to="/citacoes" onClick={closeMenu}>Citações</Link>
                </li>
                <li>
                  <Link to="/editar-perfil" onClick={closeMenu}>Editar Perfil</Link>
                </li>
                <li onClick={handleLogout} className={styles.logout} >
                  <p>Logout</p> <FaSignOutAlt />
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // Se o usuário não estiver logado, exibe o link para login/cadastro
          <Link to="/auth" className={styles.loginLink}>
            <FaUser /> Entrar | Cadastrar
          </Link>
        )}
            </div>
        </header>
    );
};

export default Header;