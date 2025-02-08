import React from 'react';
import styles from '../styles/FavoriteQuotes.module.css';

interface Quote {
  text: string;
  author: string;
}

interface FavoriteQuotesProps {
  favorites: Quote[];
}

const FavoriteQuotes: React.FC<FavoriteQuotesProps> = ({ favorites }) => {
  return (
    <div className={styles.favoriteQuotes}>
      <h3>Citações Favoritas</h3>
      <ul>
        {favorites.map((quote, index) => (
          <li key={index} className={styles.favoriteQuoteItem}>
            <p className={styles.favoriteQuoteText}>{quote.text}</p>
            <p className={styles.favoriteQuoteAuthor}>— {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteQuotes; // Exportação padrão corrigida