export async function pesquisarCidade(cidade) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const urlBase = 'https://api.weatherapi.com/v1';
  const days = 15;
  const urlCompleta = `${urlBase}/forecast.json?key=${API_KEY}&q=${cidade}&days=${days}&lang=pt`;
  try {
    const response = await fetch(urlCompleta);
    if (!response.ok) {
      throw new Error('Cidade não encontrada!');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Não foi possível carregar as informações:', error);
    throw error;
  }
}
