async function carregarNoticias() {

  try {
    const resposta = await fetch('http://localhost:3000/noticias');
    const noticias = await resposta.json();

    exibirNoticias(noticias);
  } catch (erro) {
    console.error('Erro ao carregar notícias:', erro);
  }
}

function exibirNoticias(noticias) {

  const listaNoticias = document.getElementById('lista-noticias');
  
  listaNoticias.innerHTML = '';

  if (noticias.length === 0) {
    listaNoticias.innerHTML = '<li>Não foram encontradas notícias.</li>';
    return;
  }

  function substituirLeiaMais(conteudo, url) {
    const conteudoLimpo = conteudo.replace(/\[\+\d+\s+chars\]/, '');
    return conteudoLimpo + ` <a href="${url}" target="_blank">Leia mais</a>`;
  }
    
  noticias.forEach(item => {
    
    const li = document.createElement('li');
    
    if (item.urlToImage == null) {
      li.style.display ="none";
    }

    const conteudoComLeiaMais = substituirLeiaMais(item.content, item.url)
    
      li.innerHTML = `
      <img class="imagem-noticia" src="${item.urlToImage}" />
      <h2 class="titulo-noticia">${item.title}</h2>
      <p class="conteudo-noticia">${conteudoComLeiaMais}</p>
    `;

    listaNoticias.appendChild(li);
  });
}

async function pesquisarNoticias() {
  const termo = document.getElementById('pesquisa').value;

  if (termo != null) {
    try {
      const resposta = await fetch(`http://localhost:3000/noticias/search?q=${termo}`);
      const noticias = await resposta.json();
      exibirNoticias(noticias);
    } catch (erro) {
      console.error('Erro ao buscar notícias:', erro);
    }
    
  }

  
  
}

carregarNoticias();
