import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteCard from '../components/QuoteCard';
import FavoriteQuotes from '../components/FavoriteQuotes';
import styles from '../styles/HomePage.module.css';

interface Quote {
  text: string;
  author: string;
}

const HomePage: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });
  const [favorites, setFavorites] = useState<Quote[]>([]);
  
  const moods: { name: string; icon: string }[] = [
    { name: 'Motivado', icon: '💪' },
    { name: 'Reflexivo', icon: '🤔' },
    { name: 'Filosófico', icon: '📜' },
  ];

  const quotesByMood: { [key: string]: Quote[] } = {
    Motivado: [
      { text: 'A persistência é o caminho do êxito.', author: 'Charles Chaplin' },
      { text: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', author: 'Robert Collier' },
    ],
    Reflexivo: [
      { text: 'A vida é 10% o que acontece comigo e 90% como eu reajo a isso.', author: 'Charles Swindoll' },
      { text: 'Conhece-te a ti mesmo e conhecerás o universo.', author: 'Sócrates' },
    ],
    Filosófico: [
      { text: 'Penso, logo existo.', author: 'René Descartes' },
      { text: 'A única coisa que sei é que nada sei.', author: 'Sócrates' },
    ],
  };

  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood);
    generateQuote(mood);
  };

  const generateQuote = (mood: string) => {
    const quotes = quotesByMood[mood];
    if (quotes && quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } else {
      setQuote({ text: 'Nenhuma citação disponível para este estado.', author: '' });
    }
  };

  const addToFavorites = () => {
    if (quote.text) {
      setFavorites([...favorites, quote]);
    }
  };

  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.moodSelector}>
          <h2>Citação Inspiradora</h2>
          <p>Escolha um estado para gerar uma citação inspiradora.</p> 
          <div className={styles.moodButtonsContainer}>
            <div className={styles.moodButtons}>
              {moods.map((mood, index) => (
                <button key={index} onClick={() => handleMoodChange(mood.name)} className={styles.moodButton}>
                  <span className={styles.moodIcons}>{mood.icon}</span>
                  <span>{mood.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.quoteSection}>
          {quote.text && (
            <>
              <QuoteCard
                quote={quote}
                onSave={addToFavorites}
                onGenerateExplanation={() => alert('Explicação gerada!')}
                onShare={() => alert('Citação compartilhada!')}
              />
              <button
                onClick={() => generateQuote(selectedMood)}
                className={styles.generateAnotherButton}
              >
                Gerar outra citação
              </button>
            </>
          )}
        </section>
        <p>Estado atual: {selectedMood || 'Nenhum estado selecionado'}</p>
        <section className={styles.favoritesSection}>
          <FavoriteQuotes favorites={favorites} />
        </section>

      </main>
      <Footer />
    </div>
  );

};

export default HomePage;