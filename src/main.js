import { pesquisarCidade } from './services/api.js';

async function initApp() {
  try {
    console.log('Chamando a Api...');
    const clima = await pesquisarCidade('Curitiba');
    console.log('Dados da API:', clima);
  } catch (erro) {
    console.log('Deu erro:', erro.message);
  }
}

initApp();
