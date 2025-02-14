import React from 'react';
import styles from '../styles/AuthPage.module.css';

const AuthPage: React.FC = () => {
  

  return (
    <div className={styles.authPage}>
      <div className={styles.container}>
        {/* Your authentication form goes here */}
        <div className={styles.formContainer}>
          <h2><span>"</span>Citações Diarias</h2>
          <p>"Onde suas palavras favoritas ganham vida"</p>
          <div className={styles.toggleButtons}>
            <button className={styles.toggleButton}>Entar</button>
            <button className={styles.toggleButton}>Registrar</button>
          </div>
          <div className={styles.divisor}></div>
          <div className={styles.formContent}>
            <p>Formularios</p>
          </div>
        </div>
        {/* Panel */}
        <div className={styles.panelContainer}>
          <p>Painel de Imagens</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;