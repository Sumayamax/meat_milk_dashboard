import React from "react";
import { Bar } from "react-chartjs-2";
import regionsData from "../data/kyrgyz_regions.json";

export default function Overview() {
  const values = regionsData.map(r => r.per_capita);

  const chartData = {
    labels: regionsData.map(r => r.region),
    datasets: [
      {
        label: "Milk Consumption (kg per capita)",
        data: values,
        backgroundColor: "rgba(99, 132, 255, 0.6)",
      },
    ],
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Milk Consumption Overview – Kyrgyzstan</h1>

      <div className="card">
        <h3>📊 National Summary</h3>
        <p>
          This dashboard provides a detailed overview of milk consumption across regions
          of Kyrgyzstan. You can explore inequality levels, analyze scenarios for improvement,
          and compare regions to identify key growth opportunities.
        </p>
      </div>

      <div className="card">
        <h3>🥛 Consumption by Region</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
}
