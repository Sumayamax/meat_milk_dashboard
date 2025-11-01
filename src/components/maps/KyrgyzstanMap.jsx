import React from "react";
import regionsData from "../../data/kyrgyz_regions.json";

/**
 * Glassmorphism map blocks with heat colors and hover tooltip.
 * onSelect receives full region object { region, per_capita }.
 */
export default function KyrgyzstanMap({ onSelect, selectedRegion }) {
  const values = regionsData.map(r => r.per_capita);
  const min = Math.min(...values);
  const max = Math.max(...values);

  const getColor = (value) => {
    const ratio = (value - min) / (max - min || 1);
    // gradient red -> yellow -> green (simple)
    if (ratio < 0.33) return "#ff7b7b";
    if (ratio < 0.66) return "#ffd36b";
    return "#7be58a";
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
      {regionsData.map(r => {
        const isSelected = selectedRegion && selectedRegion.region === r.region;
        return (
          <div
            key={r.region}
            onClick={() => onSelect && onSelect(r)}
            title={`${r.region}: ${r.per_capita} kg/person`}
            style={{
              borderRadius: 12,
              padding: 14,
              background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
              backdropFilter: "blur(6px)",
              boxShadow: isSelected ? "0 8px 30px rgba(0,0,0,0.25)" : "0 4px 18px rgba(2,6,23,0.08)",
              border: isSelected ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.04)",
              cursor: "pointer",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, opacity: 0.12, pointerEvents: "none", background: getColor(r.per_capita) }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ fontWeight: 700, color: "#061226" }}>{r.region}</div>
              <div style={{ fontSize: 12, marginTop: 6, color: "#0b2336" }}>{r.per_capita} kg</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
