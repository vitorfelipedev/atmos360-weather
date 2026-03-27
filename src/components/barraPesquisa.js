import { pesquisarCidade } from '../services/api.js';
import { renderizarClimaAtual } from '../utils/climaAtual.js';

export function initBarraPesquisa() {
  const form = document.getElementById('search-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const strCidade = formData.get('city');
    const cidade = strCidade.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    try {
      const clima = await pesquisarCidade(cidade);
      renderizarClimaAtual(clima);
    } catch (erro) {
      console.log('Deu erro:', erro.message);
    }
  });
}
