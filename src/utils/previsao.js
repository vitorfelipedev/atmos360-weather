const forecastContainer = document.getElementById('forecast-container');

export function renderizarPrevisao(arrayDeDias) {
  forecastContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();

  const proximosDias = arrayDeDias.slice(1);
  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

  proximosDias.forEach((dia, index) => {
    const maxTemp = Math.round(dia.day.maxtemp_c);
    const minTemp = Math.round(dia.day.mintemp_c);
    const iconHD = dia.day.condition.icon.replace('64x64', '128x128');
    const descricao = dia.day.condition.text;

    let nomeDia = '';
    if (index === 0) {
      nomeDia = rtf.format(1, 'day');
    } else {
      const dataObj = new Date(dia.date.replace(/-/g, '/'));
      nomeDia = dataObj.toLocaleDateString('pt-BR', {
        weekday: 'short',
        day: 'numeric',
        month: 'numeric',
      });
    }

    nomeDia = nomeDia.charAt(0).toUpperCase() + nomeDia.slice(1);

    const card = document.createElement('div');
    card.classList.add('forecast-card');
    card.style.setProperty('--i', index + 1);

    const day = document.createElement('p');
    day.classList.add('day');
    day.textContent = nomeDia;

    const img = document.createElement('img');
    img.src = iconHD;
    img.alt = descricao;
    img.title = descricao;

    const temp = document.createElement('p');
    temp.classList.add('forecast-temp');
    temp.innerHTML = `${maxTemp}° <span class="min-temp">${minTemp}°</span>`;

    card.appendChild(day);
    card.appendChild(img);
    card.appendChild(temp);

    fragment.appendChild(card);
  });

  forecastContainer.appendChild(fragment);
}
