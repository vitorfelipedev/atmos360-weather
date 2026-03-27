//Elementos Gerais
const cityNameElement = document.getElementById('city-name');
const dateElement = document.getElementById('current-date');
const timeElement = document.getElementById('current-time');
const tempElement = document.getElementById('temperature');
const descElement = document.getElementById('weather-desc');
//Elementos de detalhes
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const feelsLikeElement = document.getElementById('feelslike');
const pressureElement = document.getElementById('pressure');
const uvElement = document.getElementById('uv-index');
const visibilityElement = document.getElementById('visibility');

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

export function renderizarClimaAtual(dados) {
  cityNameElement.textContent = dados.location.name;
  const dataString = dados.location.localtime;
  dateElement.textContent = obterDataFormatada(dataString);
  timeElement.textContent = obterTempoFormatado(dataString);
  tempElement.textContent = Math.round(dados.current.temp_c);
  descElement.textContent = dados.current.condition.text;
  humidityElement.textContent = `${dados.current.humidity}%`;
  windElement.textContent = `${dados.current.wind_kph} km/h`;
  feelsLikeElement.textContent = `${Math.round(dados.current.feelslike_c)}°C`;
  pressureElement.textContent = `${dados.current.pressure_mb} mb`;
  uvElement.textContent = dados.current.uv;
  visibilityElement.textContent = `${dados.current.vis_km} km`;
}
