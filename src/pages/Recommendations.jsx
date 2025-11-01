import React from "react";
import regionsData from "../data/kyrgyz_regions.json";
import { gini } from "../utils/utils";

export default function Recommendations() {
  const values = regionsData.map(r => r.per_capita);
  const currentAverage = (values.reduce((a,b) => a+b, 0) / values.length).toFixed(1);
  const currentRank = 31;
  const targetRank = 15;

  const giniValue = gini(values).toFixed(2);

  const requiredGrowth = 15; // kg per capita (пример)

  return (
    <div className="page-container">
      <h1 className="page-title">Recommendations to Improve Ranking</h1>

      <div className="card">
        <h3>🎯 Goal Summary</h3>
        <p>Current global rank: <strong>#{currentRank}</strong></p>
        <p>Target rank: <strong>#{targetRank}</strong></p>
        <p>Current per capita: <strong>{currentAverage} kg/person</strong></p>
        <p>Estimated needed increase: <strong>+{requiredGrowth} kg/person</strong></p>
      </div>

      <div className="card">
        <h3>📍 Why KR is at #31?</h3>
        <ul>
          <li>Unequal consumption across regions (Gini = {giniValue})</li>
          <li>Lack of dairy product variety awareness</li>
          <li>Price accessibility varies by region</li>
          <li>Low school & public institution dairy coverage</li>
        </ul>
      </div>

      <div className="card">
        <h3>🚀 Strategy to Move to #15</h3>
        <ol>
          <li>
            <strong>Reduce inequality</strong> (lower Gini to 0.10 – 0.15)
            <br/>→ Improve dairy access in Osh, Batken, Jalal-Abad
          </li>
          <li>
            <strong>Increase production & variety</strong>
            <br/>→ Support farmers, increase milk productivity, invest in dairy products (cheese, yogurt, kefir)
          </li>
          <li>
            <strong>Improve affordability</strong>
            <br/>→ Subsidies, farmer-to-market support, reduce transportation cost
          </li>
          <li>
            <strong>School milk program</strong>
            <br/>→ Free or discounted dairy for students = long-term growth in consumption
          </li>
        </ol>
      </div>

      <div className="card">
        <h3>📊 Expected Impact</h3>
        <ul>
          <li>+6 to +8 kg/person from reducing inequality</li>
          <li>+5 kg/person through production boost</li>
          <li>+3 to +4 kg/person through school & public programs</li>
          <li>+2 to +3 kg/person through marketing & awareness</li>
        </ul>
        <p><strong>Total potential improvement: +16 to +20 kg/person</strong></p>
      </div>

      <div className="card">
        <h3>✅ Final Outcome</h3>
        <p>If the above steps are implemented, Kyrgyzstan can realistically reach:</p>
        <p><strong>Rank #15 – #18</strong> within 3–5 years</p>
      </div>
    </div>
  );
}
