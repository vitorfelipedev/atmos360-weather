# ⛅ Atmos360

O **Atmos360** é uma aplicação web para consulta da previsão do tempo em tempo real, desenvolvida com foco em desempenho, usabilidade e design moderno. A plataforma permite pesquisar cidades, utilizar a geolocalização do navegador e visualizar informações meteorológicas atualizadas por meio de uma interface responsiva e intuitiva.

Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento frontend, aplicando conceitos como consumo de APIs REST, organização modular com JavaScript ES Modules, persistência de dados no navegador e criação de interfaces modernas.

🌐 **Acesse o projeto:**  
https://atmos360weather.vercel.app/

---

## ✨ Funcionalidades

- 🔍 Busca por cidades
- 📍 Geolocalização do navegador
- 🌡️ Informações meteorológicas em tempo real
- 📅 Previsão para os próximos dias
- 🌙 Alternância entre tema claro e escuro
- 🌡️ Conversão entre Celsius e Fahrenheit
- 🕘 Histórico de pesquisas com localStorage
- 📱 Interface responsiva

---

## 🛠️ Tecnologias utilizadas

- JavaScript (ES Modules)
- Vite
- CSS
- WeatherAPI
- LocalStorage
- Geolocation API

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/vitorfelipedev/atmos360.git
```

> **Obs.:** Caso o nome do repositório seja diferente, substitua pela URL correta.

### 2. Acesse a pasta do projeto

```bash
cd atmos360
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a chave da API

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_KEY=sua_chave_aqui
```

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível no endereço informado pelo Vite (geralmente `http://localhost:5173`).

---

## 📜 Scripts disponíveis

| Comando | Descrição |
| -------- | --------- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Executa a build localmente |

---

## 👨‍💻 Autor

**Vitor Felipe**

- 💼 Desenvolvedor Frontend
- GitHub: https://github.com/vitorfelipedev
- LinkedIn: https://www.linkedin.com/in/vitor-felipe-733892245/

---

## 🌦️ API utilizada

Este projeto utiliza a **WeatherAPI** para obtenção de dados meteorológicos em tempo real e previsão do tempo.
