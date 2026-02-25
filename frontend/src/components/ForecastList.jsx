import { motion } from "framer-motion";

function convertTemp(temp, unit) {
  return unit === "F" ? (temp * 9) / 5 + 32 : temp;
}

function ForecastList({ weather, unit }) {
  if (!weather) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">5-Day Forecast</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {weather.forecast.forecastday.map((day, index) => (
          <motion.div
            key={day.date}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg"
          >
            <p className="mb-2">{day.date}</p>

            <motion.img
              src={`https:${day.day.condition.icon}`}
              alt=""
              className="mx-auto w-14"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <p className="mt-2 text-gray-300">
              {day.day.condition.text}
            </p>

            <p className="mt-2 font-semibold">
              {convertTemp(day.day.maxtemp_c, unit).toFixed(1)}° / 
              {convertTemp(day.day.mintemp_c, unit).toFixed(1)}°
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ForecastList;