const express = require('express');
const { obterNoticiasArmazenadas, buscarNoticiasPorTitulo, obterNoticiaPorId } = require('../services/feedServices');
const router = express.Router();

router.get('/noticias', (req, res) => {
  const noticias = obterNoticiasArmazenadas();
  res.json(noticias);
});

router.get('/noticias/search', (req, res) => {
  const termo = req.query.q;
  if (!termo) {
    return res.status(400).send('Você deve fornecer um termo de pesquisa.');
  }
  const noticiasFiltradas = buscarNoticiasPorTitulo(termo);
  res.json(noticiasFiltradas);
});

router.get('/noticias/:id', (req, res) => {
  const noticia = obterNoticiaPorId(req.params.id);
  if (!noticia) {
    return res.status(404).send('Notícia não encontrada');
  }
  res.json(noticia);
});

module.exports = router;

