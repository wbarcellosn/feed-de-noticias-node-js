const axios = require('axios');


const API_KEY = '8f0414f6014441a0b92c75a7c14e9b5d';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

let noticiasArmazenadas = [];

async function buscarRSS() {
  try {
    const resposta = await axios.get(API_URL);
    const dados = resposta.data

    return dados.articles;
  } catch (erro) {
    console.error('Erro ao buscar o RSS:', erro);
    return [];
  }
}

async function buscarEArmazenarNoticias() {
  const noticias = await buscarRSS();
  noticiasArmazenadas = noticias;
}

function obterNoticiasArmazenadas() {
  return noticiasArmazenadas;
}

function buscarNoticiasPorTitulo(termo) {
  return noticiasArmazenadas.filter(noticia =>
    noticia.title.toLowerCase().includes(termo.toLowerCase())
  );
}

function obterNoticiaPorId(id) {
  return noticiasArmazenadas.find(noticia => noticia.guid[0] === id);
}

buscarEArmazenarNoticias();
setInterval(buscarEArmazenarNoticias, 1800000);

module.exports = {
  buscarEArmazenarNoticias,
  obterNoticiasArmazenadas,
  buscarNoticiasPorTitulo,
  obterNoticiaPorId
};

