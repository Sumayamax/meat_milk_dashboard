import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BeforeAfterChart({ currentValue, forecastValue }) {
  const data = {
    labels: ["Current", "Forecast"],
    datasets: [
      { label: "kg/person", data: [currentValue, forecastValue], backgroundColor: ["#64748b", "#10b981"] }
    ]
  };
  return <Bar data={data} />;
}
