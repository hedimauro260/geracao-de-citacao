import React from 'react';
import leftPanelImage from '../assets/panel-img-02.png';
import rightPanelImage from '../assets/panel-img-01.png';
import styles from '../styles/Panels.module.css';

interface PanelsProps {
  isLogin: boolean;
}

const Panels: React.FC<PanelsProps> = ({ isLogin }) => {
  
  return (
    <div className={styles.panelsContainer}>
      <div className={`${styles.panel} ${styles.leftPanel} ${isLogin ? '' : styles.hidden} `}>
        <img src={leftPanelImage} alt="Left Panel" />
      </div>
      <div className={`${styles.panel} ${styles.rightPanel} ${!isLogin ? '' : styles.hidden}`}>
        <img src={rightPanelImage} alt="Right Panel" />
      </div>
    </div>
  );
};

export default Panels;