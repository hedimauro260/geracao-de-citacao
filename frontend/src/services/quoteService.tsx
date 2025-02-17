import api from './api';

interface FullQuoteResponse {
    id: string;
    text: string;
    author: string;
    mood: string;
    userId?: string | null;
    isAdmin: boolean;
  }
  
  interface Quote {
    text: string;
    author: string;
  }

  export const getRandomQuote = async (mood: string): Promise<Quote> => {
    const response = await api.get('/quotes', { params: { mood } });
    const fullQuotes = response.data as FullQuoteResponse[];
  
    // Verifica se a resposta é um array e seleciona a primeira citação
    if (Array.isArray(fullQuotes) && fullQuotes.length > 0) {
      const randomQuote = fullQuotes[Math.floor(Math.random() * fullQuotes.length)];
      return { text: randomQuote.text, author: randomQuote.author };
    } else {
      throw new Error("Nenhuma citação encontrada para este estado.");
    }
  };


export const createQuote = async (text: string, author: string, mood: string, userID: string, isAdmin: boolean) => {
    const response = await api.post('/quotes', { text, author, mood, userID, isAdmin });
    return response.data;
};