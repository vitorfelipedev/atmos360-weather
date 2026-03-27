import { initBarraPesquisa } from './components/barraPesquisa.js';
import { pesquisarCidade } from './services/api.js';
import { renderizarClimaAtual } from './utils/climaAtual.js';

async function initApp() {
  try {
    initBarraPesquisa();
    const climaInicial = await pesquisarCidade('Curitiba');
    renderizarClimaAtual(climaInicial);
  } catch (erro) {
    console.log('Deu erro:', erro.message);
  }
}

initApp();
