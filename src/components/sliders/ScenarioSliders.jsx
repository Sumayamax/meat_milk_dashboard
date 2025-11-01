import React from "react";

/**
 * values: { production, income, price, infrastructure } (ratios, e.g. 0.1 = +10%)
 * onChange: fn(newValues)
 */
export default function ScenarioSliders({ values, onChange }) {
  const entries = [
    { key: "production", label: "Производство (%)", min: -50, max: 200 },
    { key: "income", label: "Доход (GDP %) ", min: -50, max: 200 },
    { key: "price", label: "Цена молока (%)", min: -50, max: 50 },
    { key: "infrastructure", label: "Инфраструктура (%)", min: 0, max: 200 },
  ];

  const handle = (k, raw) => {
    const v = Number(raw) / 100;
    onChange({ ...values, [k]: v });
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {entries.map(e => (
        <div key={e.key} style={{ background: "rgba(255,255,255,0.02)", padding: 10, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
            <div>{e.label}</div>
            <div>{Math.round((values[e.key] || 0) * 100)}%</div>
          </div>
          <input
            type="range"
            min={e.min}
            max={e.max}
            value={Math.round((values[e.key] || 0) * 100)}
            onChange={(ev) => handle(e.key, ev.target.value)}
            style={{ width: "100%", marginTop: 8 }}
          />
        </div>
      ))}
    </div>
  );
}
