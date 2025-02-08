import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="/sobre-nos">Sobre Nós</a>
        <a href="/contacto">Contacto</a>
        <a href="/politica-de-privacidade">Política de Privacidade</a>
        <a href="/termos">Termos</a>
      </div>
      <p>&copy; 2025 Anotado. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;