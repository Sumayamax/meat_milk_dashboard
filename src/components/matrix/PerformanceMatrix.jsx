import React from "react";

export default function PerformanceMatrix({ effects }) {
  // effects: [{ param, current, potential, weight }, ...]
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ background: "#f3f3f3" }}>
          <th>Parameter</th>
          <th>Current</th>
          <th>Potential</th>
          <th>Weight (impact)</th>
        </tr>
      </thead>
      <tbody>
        {effects.map((e,i) => (
          <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "8px 12px" }}>{e.param}</td>
            <td style={{ padding: "8px 12px" }}>{e.current}</td>
            <td style={{ padding: "8px 12px" }}>{e.potential}</td>
            <td style={{ padding: "8px 12px" }}>{e.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
