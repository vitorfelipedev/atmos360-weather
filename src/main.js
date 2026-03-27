import { initBarraPesquisa } from './components/barraPesquisa.js';
import { renderizarCidadesRecentes } from './components/recentes.js';
import { pesquisarCidade } from './services/api.js';
import { renderizarClimaAtual } from './utils/climaAtual.js';
import { renderizarPrevisao } from './utils/previsao.js';

export async function realizarBuscaCompleta(nomeDaCidade) {
  try {
    const clima = await pesquisarCidade(nomeDaCidade);
    renderizarClimaAtual(clima);
    renderizarPrevisao(clima.forecast.forecastday);
    renderizarCidadesRecentes(clima.location.name);
  } catch (erro) {
    console.error('Deu erro:', erro.message);
  }
}

async function initApp() {
  initBarraPesquisa();
  document.addEventListener('buscaHistorico', (event) => {
    const cidadeEscolhida = event.detail.cidadeClicada;
    realizarBuscaCompleta(cidadeEscolhida);
  });
  renderizarCidadesRecentes();
  realizarBuscaCompleta('Curitiba');
}

initApp();
