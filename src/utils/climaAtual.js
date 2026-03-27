function obterDataFormatada(dataString) {
  const dataDaCidade = new Date(dataString.replace(/-/g, '/'));
  const opcoes = { weekday: 'long', day: 'numeric', month: 'long' };
  let data = new Date(dataDaCidade).toLocaleDateString('pt-BR', opcoes);
  return data.charAt(0).toUpperCase() + data.slice(1);
}

function obterTempoFormatado(timeStr) {
  const time = new Date(timeStr);
  const horas = String(time.getHours()).padStart(2, '0');
  const minutos = String(time.getMinutes()).padStart(2, '0');
  return `${horas}:${minutos}`;
}

export function renderizarClimaAtual(dados, isCelsius = true) {
  const cityNameElement = document.getElementById('city-name');
  const dateElement = document.getElementById('current-date');
  const timeElement = document.getElementById('current-time');
  const tempElement = document.getElementById('temperature');
  const iconElement = document.getElementById('weather-icon');
  const descElement = document.getElementById('weather-desc');
  const humidityElement = document.getElementById('humidity');
  const windElement = document.getElementById('wind');
  const feelsLikeElement = document.getElementById('feelslike');
  const pressureElement = document.getElementById('pressure');
  const uvElement = document.getElementById('uv-index');
  const visibilityElement = document.getElementById('visibility');
  const unitElement = document.querySelector('.unit');

  cityNameElement.textContent = dados.location.name;
  const dataString = dados.location.localtime;
  dateElement.textContent = obterDataFormatada(dataString);
  timeElement.textContent = obterTempoFormatado(dataString);
  const letraUnidade = isCelsius ? 'C' : 'F';
  const temperatura = isCelsius ? dados.current.temp_c : dados.current.temp_f;
  tempElement.textContent = Math.round(temperatura);
  unitElement.textContent = `°${letraUnidade}`;

  const icon = dados.current.condition.icon;
  const iconHD = icon.replace('64x64', '128x128');
  iconElement.src = iconHD;
  iconElement.alt = dados.current.condition.text;
  descElement.textContent = dados.current.condition.text;
  humidityElement.textContent = `${dados.current.humidity}%`;
  windElement.textContent = `${dados.current.wind_kph} km/h`;
  const sensacao = isCelsius
    ? dados.current.feelslike_c
    : dados.current.feelslike_f;
  feelsLikeElement.textContent = `${Math.round(sensacao)}°${letraUnidade}`;
  pressureElement.textContent = `${dados.current.pressure_mb} mb`;
  uvElement.textContent = dados.current.uv;
  visibilityElement.textContent = `${dados.current.vis_km} km`;
}
