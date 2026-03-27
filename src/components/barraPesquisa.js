import { realizarBuscaCompleta } from '../main.js';

export function initBarraPesquisa() {
  const form = document.getElementById('search-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const strCidade = formData.get('city');
    const cidade = strCidade.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').trim();
    if (!cidade) return;
    try {
      await realizarBuscaCompleta(cidade);
      form.reset();
    } catch (erro) {
      console.error('Erro ao buscar cidade:', erro.message);
    }
  });
}
