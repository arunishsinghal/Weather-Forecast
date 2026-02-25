import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function convertTemp(temp, unit) {
  return unit === "F" ? (temp * 9) / 5 + 32 : temp;
}

function TemperatureChart({ weather, unit }) {
  if (!weather) return null;

  const forecastDays = weather.forecast.forecastday;

  const labels = forecastDays.map((day) => day.date);
  const maxTemps = forecastDays.map((day) =>
    convertTemp(day.day.maxtemp_c, unit)
  );
  const minTemps = forecastDays.map((day) =>
    convertTemp(day.day.mintemp_c, unit)
  );

  const data = {
    labels,
    datasets: [
      {
        label: `Max Temp (°${unit})`,
        data: maxTemps,
        borderColor: "#ff4d4f",
        backgroundColor: "rgba(255,77,79,0.2)",
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: `Min Temp (°${unit})`,
        data: minTemps,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: { size: 14 },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Temperature Trend</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default TemperatureChart;