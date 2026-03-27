import { getCidades, saveCidades } from '../services/storage.js';

export function renderizarCidadesRecentes(novaCidade) {
  const recentesElemento = document.getElementById('history-list');
  let cidades = getCidades();
  if (novaCidade) {
    cidades = cidades.filter(
      (c) => c.toLowerCase() !== novaCidade.toLowerCase(),
    );
    cidades.unshift(novaCidade);
    if (cidades.length > 10) {
      cidades.pop();
    }
    saveCidades(cidades);
  }

  recentesElemento.innerHTML = '';
  if (cidades.length === 0) {
    const vazioMensagem = document.createElement('p');
    vazioMensagem.textContent = 'Nenhuma cidade foi pesquisada ainda';
    vazioMensagem.classList.add('empty-messagem');
    recentesElemento.appendChild(vazioMensagem);
  } else {
    const fragment = document.createDocumentFragment();
    cidades.forEach((c) => {
      const itemCidade = document.createElement('li');
      itemCidade.classList.add('history-item');
      itemCidade.textContent = c;
      itemCidade.addEventListener('click', () => {
        const eventoBuscaHistorico = new CustomEvent('buscaHistorico', {
          detail: { cidadeClicada: c },
        });
        document.dispatchEvent(eventoBuscaHistorico);
      });
      fragment.appendChild(itemCidade);
    });
    recentesElemento.appendChild(fragment);
  }
}
