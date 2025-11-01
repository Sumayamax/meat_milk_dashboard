import React from "react";
import { Bar } from "react-chartjs-2";
import { gini } from "../../utils/gini";
import { entropy } from "../../utils/entropy";
import regionsData from "../../data/kyrgyz_regions.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



export default function GiniChart({ highlightRegion }) {
  const labels = regionsData.map(r => r.region);
  const values = regionsData.map(r => r.per_capita);
  const data = {
    labels,
    datasets: [
      {
        label: "kg/person",
        data: values,
        backgroundColor: labels.map(l => l === highlightRegion ? "#ff9f43" : "rgba(75,192,192,0.7)")
      }
    ]
  };

  const giniValue = (gini(values) || 0).toFixed(3);
  const entropyValue = (entropy(values) || 0).toFixed(3);

  return (
    <div style={{ padding: 12, background: "white", borderRadius: 12 }}>
      <Bar data={data} />
      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        <div><strong>Gini:</strong> {giniValue}</div>
        <div><strong>Entropy:</strong> {entropyValue}</div>
      </div>
    </div>
  );
}
