import { motion } from "framer-motion";

function convertTemp(temp, unit) {
  return unit === "F" ? (temp * 9) / 5 + 32 : temp;
}

function CurrentWeather({ weather, unit }) {
  if (!weather) return null;

  const temp = convertTemp(weather.current.temp_c, unit);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 mt-8 shadow-xl"
    >
      <div className="flex justify-between items-center">
  <div>
    <h2 className="text-3xl font-bold">
      {weather.location.name}, {weather.location.country}
    </h2>
    <p className="text-lg text-gray-300 mt-1">
      {weather.current.condition.text}
    </p>
  </div>

  <div className="text-right">
    <p className="text-6xl font-extrabold">
      {temp.toFixed(1)}°{unit}
    </p>
          <motion.img
            src={`https:${weather.current.condition.icon}`}
            alt=""
            className="w-16 mt-2"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </div>
      </div>

      <div className="flex gap-8 mt-6 text-gray-300">
        <p>Humidity: {weather.current.humidity}%</p>
        <p>Wind: {weather.current.wind_kph} kph</p>
      </div>
    </motion.div>
  );
}

export default CurrentWeather;