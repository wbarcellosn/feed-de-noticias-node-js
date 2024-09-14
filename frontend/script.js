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

  noticias.forEach(item => {
    const li = document.createElement('li');
      
    if (item.urlToImage == null) {

      li.style.display ="none";
    }

      li.innerHTML = `
      <h2>${item.title}</h2>
      <img src="${item.urlToImage}" />
      <p>${item.description ? item.description : 'Sem descrição disponível'}</p>
      <a href="${item.url}" target="_blank">Leia mais</a>
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
