# 🌤️ Weather Dashboard

A full-stack weather application built with **React** (Vite) on the frontend and **Node.js/Express** on the backend. It fetches real-time weather data and 5-day forecasts using the [WeatherAPI](https://www.weatherapi.com/), and displays current conditions, forecast cards, and a temperature chart — all with Celsius/Fahrenheit toggle support.

---

## 📸 Features

- 🔍 Search weather by city name
- 🌡️ Current weather display (temperature, condition, humidity, wind, etc.)
- 📅 5-day forecast cards
- 📊 Temperature chart (via chart component)
- 🔄 Toggle between °C and °F
- 💅 Tailwind CSS styled UI with gradient dark theme

---

## 🗂️ Project Structure

```
root/
├── backend/
│   ├── controllers/
│   │   └── weatherController.js   # Fetches data from WeatherAPI
│   ├── routes/
│   │   └── weather.js             # Express route: GET /api/weather/:city
│   ├── server.js                  # Express app entry point
│   ├── .env                       # Environment variables (API key)
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── SearchBar.jsx
    │   │   ├── CurrentWeather.jsx
    │   │   ├── ForecastList.jsx
    │   │   └── TemperatureChart.jsx
    │   ├── App.jsx                # Root component
    │   ├── main.jsx               # React DOM entry point
    │   ├── App.css
    │   └── index.css              # Tailwind directives
    └── package.json
```

---

## ⚙️ Tech Stack

| Layer    | Technology                                    |
| -------- | --------------------------------------------- |
| Frontend | React 18, Vite, Tailwind CSS, Axios           |
| Backend  | Node.js, Express 5, Axios, dotenv             |
| API      | [WeatherAPI.com](https://www.weatherapi.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A free API key from [weatherapi.com](https://www.weatherapi.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
WEATHER_API_KEY=your_api_key_here
```

Start the backend server:

```bash
npm start
```

The server runs on **http://localhost:5000**

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on **http://localhost:5173** (Vite default)

---

## 🔌 API Reference

### Backend Endpoint

```
GET /api/weather/:city
```

**Example:**

```
GET http://localhost:5000/api/weather/London
```

**Response:** Proxied JSON from WeatherAPI — includes `current` conditions and `forecast.forecastday` array (5 days).

**Error Response:**

```json
{
  "message": "Error fetching weather data"
}
```

---

## 🌐 Environment Variables

| Variable          | Description                      | Required |
| ----------------- | -------------------------------- | -------- |
| `WEATHER_API_KEY` | Your API key from weatherapi.com | ✅ Yes   |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📦 Dependencies

### Backend

| Package | Purpose                       |
| ------- | ----------------------------- |
| express | HTTP server & routing         |
| axios   | HTTP requests to WeatherAPI   |
| cors    | Cross-origin resource sharing |
| dotenv  | Load env variables from .env  |

### Frontend

| Package     | Purpose                     |
| ----------- | --------------------------- |
| react       | UI library                  |
| axios       | HTTP requests to backend    |
| tailwindcss | Utility-first CSS framework |

---

## 🛡️ Security Notes

- The API key is stored server-side in `.env` — it is **never exposed to the frontend**.
- The frontend calls your own backend (`/api/weather/:city`), not WeatherAPI directly.
- CORS is enabled globally on the backend — restrict it to your frontend origin in production:

```js
app.use(cors({ origin: "https://your-frontend-domain.com" }));
```

---

## 🔧 Known Issues / Improvements

- [ ] Error response from backend does not forward the WeatherAPI error code or message — makes debugging city-not-found vs. API failure ambiguous. Fix: inspect `error.response.status` and return appropriate HTTP codes (404, 401, etc.).
- [ ] `PORT` is hardcoded to `5000` in `server.js` — should fall back to `process.env.PORT` for deployment.
- [ ] No loading state in the frontend — users get no feedback while the request is in-flight.
- [ ] Frontend API base URL (`http://localhost:5000`) is hardcoded — use `import.meta.env.VITE_API_URL` for environment-aware builds.

---

## 📄 License

ISC
