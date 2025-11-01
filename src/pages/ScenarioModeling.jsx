import React, { useState } from "react";
import KyrgyzstanMap from "../components/maps/KyrgyzstanMap";
import RegionInfo from "../components/RegionInfo";
import ScenarioSliders from "../components/sliders/ScenarioSliders";
import ScenarioChart from "../components/charts/BeforeAfterChart";
import GiniChart from '../components/charts/GiniChart';
import { forecastPerCapita } from "../utils/forecastModel";
import { estimateRank } from "../utils/ranking";
import regions from "../data/kyrgyz_regions.json";

export default function ScenarioModeling() {
  const baselineParams = { production: 1, income: 1, price: 1, infrastructure: 1 };
  const currentPerCapita = Math.round(regions.reduce((s,r) => s + r.per_capita, 0) / regions.length);

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [deltas, setDeltas] = useState({ production: 0, income: 0, price: 0, infrastructure: 0 });

  const forecast = forecastPerCapita(baselineParams, deltas);
  const currentRank = estimateRank(currentPerCapita).rank;
  const forecastRank = estimateRank(forecast).rank;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20 }}>
      <div>
        <div style={{ marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>Карта регионов</h3>
          <KyrgyzstanMap onSelect={setSelectedRegion} selectedRegion={selectedRegion} />
        </div>

        <div style={{ marginTop: 14 }}>
          <h3 style={{ margin: 0 }}>Region info</h3>
          <RegionInfo region={selectedRegion} />
        </div>
      </div>

      <div>
        <h2>Scenario Modeling</h2>
        <p>Средний per capita (по регионам): <strong>{currentPerCapita} kg</strong> — текущий ранг #{currentRank}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
          <div>
            <h4>Adjust parameters</h4>
            <ScenarioSliders values={deltas} onChange={setDeltas} />
          </div>

          <div>
            <h4>Forecast & Rank</h4>
            <ScenarioChart currentValue={currentPerCapita} forecastValue={forecast} />
            <div style={{ marginTop: 12 }}>
              <div><strong>Forecast per capita:</strong> {forecast} kg</div>
              <div><strong>Estimated new rank:</strong> #{forecastRank}</div>
            </div>
            <div style={{ marginTop: 12 }}>
              <h4>Distribution (Gini/Entropy)</h4>
              <GiniChart highlightRegion={selectedRegion ? selectedRegion.region : null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
