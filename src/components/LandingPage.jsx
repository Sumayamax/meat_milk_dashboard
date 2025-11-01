import React from "react";
import Dashboard from "./Dashboard";

export default function LandingPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Milk Consumption Dashboard - Kyrgyzstan 2022</h1>
      <Dashboard />
    </div>
  );
}
