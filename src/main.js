import { initBarraPesquisa } from './components/barraPesquisa.js';
import { initLocalizacao } from './components/localizacao.js';
import { renderizarCidadesRecentes } from './components/recentes.js';
import { initDarkMode } from './components/toggleDarkMode.js';
import {
  getUnidadeAtual,
  initToggleUnidade,
} from './components/toggleUnidade.js';
import { pesquisarCidade } from './services/api.js';
import { getCidades } from './services/storage.js';
import { renderizarClimaAtual } from './utils/climaAtual.js';
import { renderizarPrevisao } from './utils/previsao.js';

let dadosAtuais = null;

export async function realizarBuscaCompleta(nomeDaCidade) {
  try {
    const clima = await pesquisarCidade(nomeDaCidade);
    dadosAtuais = clima;
    const isCelsius = getUnidadeAtual();
    renderizarClimaAtual(clima, isCelsius);
    renderizarPrevisao(clima.forecast.forecastday, isCelsius);
    renderizarCidadesRecentes(clima.location.name);
  } catch (erro) {
    console.error('Deu erro:', erro.message);
  }
}

async function initApp() {
  initDarkMode();
  initBarraPesquisa();
  initToggleUnidade();
  initLocalizacao();
  document.addEventListener('buscaHistorico', (event) => {
    const cidadeEscolhida = event.detail.cidadeClicada;
    realizarBuscaCompleta(cidadeEscolhida);
  });
  document.addEventListener('mudouUnidade', (event) => {
    const isCelsius = event.detail.isCelsius;
    if (dadosAtuais) {
      renderizarClimaAtual(dadosAtuais, isCelsius);
      renderizarPrevisao(dadosAtuais.forecast.forecastday, isCelsius);
    }
  });
  document.addEventListener('buscaLocalizacao', (event) => {
    const localizacao = event.detail.query;
    realizarBuscaCompleta(localizacao);
  });
  renderizarCidadesRecentes();
  const ultimaCidade = getCidades()[0] || 'Colombo';
  realizarBuscaCompleta(ultimaCidade);
}

initApp();
