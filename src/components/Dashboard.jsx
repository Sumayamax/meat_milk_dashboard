import React from "react";
import GiniChart from "./charts/GiniChart";
import PerformanceMatrix from "./matrix/PerformanceMatrix";

export default function Dashboard() {
  return (
    <div style={{ marginTop: "30px" }}>
      <section>
        <h2>Current Milk Consumption: #31</h2>
        <p>Kyrgyzstan per capita (2022): 100 kg/person (пример)</p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Gini Index / Entropy by Region</h2>
        <GiniChart />
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Performance Matrix - Parameters to Improve Ranking</h2>
        <PerformanceMatrix />
      </section>
    </div>
  );
}
