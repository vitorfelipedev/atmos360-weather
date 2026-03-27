let isCelsius = true;
const unitToggleBtn = document.getElementById('unit-toggle-btn');
export function initToggleUnidade() {
  unitToggleBtn.addEventListener('click', () => {
    isCelsius = !isCelsius;
    unitToggleBtn.textContent = isCelsius ? '°C' : '°F';
    const eventoMudouUnidade = new CustomEvent('mudouUnidade', {
      detail: { isCelsius },
    });
    document.dispatchEvent(eventoMudouUnidade);
  });
}

export function getUnidadeAtual() {
  return isCelsius;
}
