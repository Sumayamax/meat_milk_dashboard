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

export default function ScenarioChart({ currentValue, forecastValue }) {
  const data = {
    labels: ["Current per capita", "Forecast per capita"],
    datasets: [
      {
        label: "kg/person",
        data: [currentValue, forecastValue],
        backgroundColor: ["#9b5cff", "#00c2a8"]
      }
    ]
  };

  return <Bar data={data} />;
}
