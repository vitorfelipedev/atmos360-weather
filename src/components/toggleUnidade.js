let isCelsius = true;

export function initToggleUnidade() {
  const unitToggleBtn = document.getElementById('unit-toggle-btn');
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
