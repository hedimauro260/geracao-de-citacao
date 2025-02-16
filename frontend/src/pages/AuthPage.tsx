import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
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

    // Atualiza a URL ao alternar entre login e signup
    const updateURL = (mode: string) => {
        navigate(`?mode=${mode}`, { replace: true });
    };

    // styles do Forms Container
    const formStyles = {
        transform: isLogin ? "translateX(0)" : "translateX(150%)",
        borderRight: isLogin ? "3px solid #7454d9" : "none",
        borderLeft: !isLogin ? "3px solid #7454d9" : "none",
    };

    // styles do Panel Container
    const panelStyles = {
        transform: isLogin ? "translateX(0)" : "translateX(-60%)",
    };

    return (
        <div className={styles.authPage}>
          <div className={styles.container} >
              {/* Formularios */}
              <div className={styles.formsContainer} style={formStyles} >
                  <div className={styles.formHeader}>
                      <h2><span>"</span>Citações Diarias</h2>
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
                          <LoginForm onLogin={(email, password) => console.log(email, password)} />
                          :
                          <SignupForm onSignup={(name, email, password) => console.log(name, email, password)} />
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