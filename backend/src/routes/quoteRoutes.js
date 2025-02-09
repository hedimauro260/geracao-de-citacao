import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Criar um novo quote (usuário ou admin)
router.post('/', async (req, res) => {
  const { text, author, mood, userId, isAdmin } = req.body;

  try {
    const quote = await prisma.quote.create({
      data: {
        text,
        author,
        mood,
        userId: isAdmin ? null : userId, // userId é nulo para quotes do admin
        isAdmin,
      },
    });
    res.status(201).json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar citação.' });
  }
});

// Buscar citações por estado de espírito
router.get('/', async (req, res) => {
  const { mood } = req.query;

  try {
    const quotes = await prisma.quote.findMany({
      where: { mood: mood },
    });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar citações.' });
  }
});

// Adicionar um quote aos favoritos
router.post('/:quoteId/favorite', async (req, res) => {
  const { quoteId } = req.params;
  const { userId } = req.body;

  try {
    const favorite = await prisma.favoriteQuote.create({
      data: {
        userId,
        quoteId,
      },
    });
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar aos favoritos.' });
  }
});

// Listar os quotes favoritos do usuário
router.get('/favorites/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const favorites = await prisma.favoriteQuote.findMany({
      where: { userId },
      include: { quote: true }, // Inclui os detalhes do quote
    });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar favoritos.' });
  }
});

export default router;