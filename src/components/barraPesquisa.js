import { realizarBuscaCompleta } from '../main.js';
import { pesquisarCidade } from '../services/api.js';
import { renderizarClimaAtual } from '../utils/climaAtual.js';
import { renderizarPrevisao } from '../utils/previsao.js';
import { renderizarCidadesRecentes } from './recentes.js';

export function initBarraPesquisa() {
  const form = document.getElementById('search-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const strCidade = formData.get('city');
    const cidade = strCidade.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').trim();
    try {
      realizarBuscaCompleta(cidade);
      form.reset();
    } catch (erro) {
      console.log('Deu erro:', erro.message);
    }
  });
}
