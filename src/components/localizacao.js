const localizacaoElement = document.getElementById('location-btn');
const htmlLocalicacaoElement = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg><span>Localização</span>`;

export function initLocalizacao() {
  localizacaoElement.addEventListener('click', (event) => {
    localizacaoElement.textContent = 'Carregando...';
    const localizacao = navigator.geolocation.getCurrentPosition(
      (position) => {
        const query =
          position.coords.latitude + ',' + position.coords.longitude;
        localizacaoElement.innerHTML = htmlLocalicacaoElement;
        const buscaLocalizacao = new CustomEvent('buscaLocalizacao', {
          detail: { query },
        });
        document.dispatchEvent(buscaLocalizacao);
      },
      (error) => {
        console.error('Erro:', error.message);
        localizacaoElement.innerHTML = htmlLocalicacaoElement;
      },
    );
  });
}
