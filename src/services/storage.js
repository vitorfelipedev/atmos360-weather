const CIDADES_KEY = 'cidades';

export function getCidades() {
  const cidades = localStorage.getItem(CIDADES_KEY);
  if (cidades === null) return [];
  try {
    return JSON.parse(cidades);
  } catch {
    return [];
  }
}

export function saveCidades(cidades) {
  localStorage.setItem('cidades', JSON.stringify(cidades));
}
