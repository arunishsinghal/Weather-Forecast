import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import TemperatureChart from "./components/TemperatureChart";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("C");

  const fetchWeather = async (city) => {
    try {
      setError("");
      const response = await axios.get(
        `http://localhost:5000/api/weather/${city}`
      );
      setWeather(response.data);
    } catch (error) {
      setError("City not found or API error");
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Weather Dashboard</h1>

          {/* Unit Toggle */}
          <div className="flex gap-2 bg-slate-800 rounded-full p-1">
            <button
              onClick={() => setUnit("C")}
              className={`px-4 py-1 rounded-full ${unit === "C" ? "bg-indigo-600" : ""}`}
            >
              °C
            </button>
            <button
              onClick={() => setUnit("F")}
              className={`px-4 py-1 rounded-full ${unit === "F" ? "bg-indigo-600" : ""}`}
            >
              °F
            </button>
          </div>
        </div>

        <SearchBar onSearch={fetchWeather} />

        {error && <p className="text-red-400">{error}</p>}

        <CurrentWeather weather={weather} unit={unit} />

        <ForecastList weather={weather} unit={unit} />

        <TemperatureChart weather={weather} unit={unit} />

      </div>
    </div>
  );
}

export default App;