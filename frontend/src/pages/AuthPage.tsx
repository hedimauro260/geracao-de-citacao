import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm';
import SignupForm  from '../components/SignupForm';
import Panels from '../components/Panels';
import styles from '../styles/AuthPage.module.css'

const AuthPage: React.FC = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Verifica o parâmetro "mode" ao carregar a página
    useEffect(() => {
        const mode = searchParams.get('mode');
        if (mode === 'signup') {
        setIsLogin(false);
        } else {
        setIsLogin(true);
        }
    }, [searchParams]);

    // Função para alternar entre login e cadastro
    const toggleMode = () => {
        setIsLogin((prev) => !prev); // Alterna o estado entre true (login) e false (cadastro)
        updateURL(isLogin ? "signup" : "login"); // Atualiza a URL com base no modo atual
    };

    // Atualiza a URL ao alternar entre login e signup
    const updateURL = (mode: string) => {
        navigate(`?mode=${mode}`, { replace: true });
    };

    // Função para redirecionar para HomePage após login
  const handleLoginSuccess = () => {
    navigate('/'); // Redireciona para a HomePage
    window.dispatchEvent(new Event('login')); // Dispara um evento global para atualizar o Header
  };

    // Estilos dinâmicos para o container de formulários
    const formStyles = {
        transform: isLogin ? "translateX(0)" : "translateX(150%)",
        borderRight: isLogin ? "3px solid var(--color-02)" : "none",
        borderLeft: !isLogin ? "3px solid var(--color-02)" : "none",
    };

    // Estilos dinâmicos para o container de painéis
    const panelStyles = {
        transform: isLogin ? "translateX(0)" : "translateX(-60%)",
    };

    return (
        <div className={styles.authPage}>
            <Helmet>
                <title>Login / Cadastrar | Anotado.</title>
            </Helmet>
          <div className={styles.container} >
              {/* Formularios */}
              <div className={styles.formsContainer} style={formStyles} >
                  <div className={styles.formHeader}>
                      <h2><span>"</span>Citações Diárias</h2>
                      <p>"Onde suas palavras favoritas ganham vida"</p>
                      <div className={styles.toggleButtons}>
                          <button className={`${styles.toggleButton} ${isLogin ? styles.active : ''}`} onClick={() => {setIsLogin(true); updateURL('login');}}>
                              Entrar
                          </button>
                          <button className={`${styles.toggleButton} ${!isLogin ? styles.active : ''}`} onClick={() => {setIsLogin(false); updateURL('signup');}}>
                              Cadastrar
                          </button>
                      </div>
                      <div className={styles.divisor}></div>
                      <div className={styles.formContent} >
                          {isLogin ?
                          <LoginForm onToggleMode={toggleMode} onLoginSuccess={handleLoginSuccess} />
                          :
                          <SignupForm onToggleMode={toggleMode} />
                          }
                      </div>
                  </div>
              </div>
              {/* Paineis */}
              <div className={styles.panelContainer} style={panelStyles}>
                  <Panels isLogin={isLogin}/>
              </div>
          </div>
        </div>
    );
};

export default AuthPage;