import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import regionsData from "../data/kyrgyz_regions.json";
import { gini, entropy } from "../utils/utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,  // ← добавляем это
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Inequality() {
  const values = regionsData.map(r => r.per_capita);

  const giniValue = gini(values).toFixed(3);
  const entropyValue = entropy(values).toFixed(3);

  const barData = {
    labels: regionsData.map(r => r.region),
    datasets: [
      {
        label: "Milk Consumption (kg per capita)",
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      }
    ]
  };

  const pieData = {
    labels: regionsData.map(r => r.region),
    datasets: [
      {
        data: values,
        backgroundColor: [
          "rgba(75,192,192,0.6)",
          "rgba(255,159,64,0.6)",
          "rgba(255,205,86,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(153,102,255,0.6)",
          "rgba(201,203,207,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(99,132,255,0.6)",
        ]
      }
    ]
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Inequality of Milk Consumption</h1>

      <div className="card">
        <h3>🧮 Inequality Metrics</h3>
        <p><strong>Gini Index:</strong> {giniValue}</p>
        <p><strong>Entropy:</strong> {entropyValue}</p>

        <p style={{ marginTop: 12 }}>
          <strong>How to interpret:</strong><br/>
          • Gini close to 0 → low inequality, close to 1 → high inequality<br/>
          • Entropy: higher value = more inequality / diversity in consumption
        </p>
      </div>

      <div className="card">
        <h3>📊 Distribution by Region (Bar Chart)</h3>
        <Bar data={barData} />
      </div>

      <div className="card">
        <h3>🥧 Distribution Share (Pie Chart)</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}
