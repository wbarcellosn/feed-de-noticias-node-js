const express = require('express');
const rotasNoticias = require('./src/routes/feedRoutes');

const app = express();
const porta = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));

app.use('/', rotasNoticias);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
