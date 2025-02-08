import React from 'react';
import { BsSave, BsShare, BsLightbulb } from "react-icons/bs";
import styles from '../styles/QuoteCard.module.css';

interface Quote {
  text: string;
  author: string;
}

interface QuoteCardProps {
  quote: Quote;
  onSave: () => void;
  onGenerateExplanation: () => void;
  onShare: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  onSave,
  onGenerateExplanation,
  onShare,
}) => {
  return (
    <div className={styles.quoteCard}>
      <p className={styles.quoteText}>"{quote.text}"</p>
      <p className={styles.quoteAuthor}>— {quote.author}</p>
      <div className={styles.quoteActions}>
        <button onClick={onSave} className={styles.actionButton} title="Salvar">
            <BsSave />
        </button>
        <button onClick={onShare} className={styles.actionButton} title='Compartilhar'>
            <BsShare />
        </button>
        <button onClick={onGenerateExplanation} className={styles.actionButton} title='Gerar explicação'>
        <BsLightbulb />
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;