import { useState, useEffect, useCallback, JSX } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteCard from '../components/QuoteCard';
import { FaFire, FaBrain, FaBook } from 'react-icons/fa';
import { getRandomQuote } from "../services/quoteService";
import styles from '../styles/HomePage.module.css';

interface Quote {
  text: string;
  author: string;
}

const HomePage: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('Motivado');
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Novo estado para indicar carregamento
  const [error, setError] = useState<string | null>(null); // Novo estado para erros
  
  const moods: { name: string; icon: JSX.Element }[] = [
    { name: 'Motivado', icon: <FaFire /> },
    { name: 'Reflexivo', icon: <FaBrain /> },
    { name: 'Filosófico', icon: <FaBook /> },
  ];

  const handleMoodChange = async (mood: string) => {
    setSelectedMood(mood);
    await generateQuote(mood);
  };

  // Wrap generateQuote com useCallback para evitar recriação desnecessária
  const generateQuote = useCallback(
    async (mood: string) => {
      setLoading(true); // Inicia o estado de carregamento
      setError(null); // Limpa qualquer erro anterior

      try {
        console.log(`Fazendo chamada à API com estado: ${mood}`);
        const response = await getRandomQuote(mood); // Chama o serviço para buscar a citação
        
        setQuote({ text: response.text, author: response.author }); // Define a citação retornada pela API
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Erro ao buscar a citação."); // Trata erros da API
        } else {
          setError("Erro desconhecido ao buscar a citação.");
        }
        setQuote({ text: "", author: "" }); // Reseta a citação em caso de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    },    [] // A função não depende de nenhum estado ou propriedade externa
  );

  useEffect(() => {
    generateQuote(selectedMood); // Gera uma citação assim que a página carrega
  }, [generateQuote, selectedMood]);

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
          {loading && <p>Carregando citação...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
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

      </main>
      <Footer />
    </div>
  );

};

export default HomePage;