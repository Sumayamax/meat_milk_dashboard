import React from "react";

/**
 * Показывает подробности выбранного региона.
 * region: { region, per_capita }
 */
export default function RegionInfo({ region }) {
  if (!region) {
    return (
      <div style={{
        borderRadius: 12,
        padding: 16,
        background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
        backdropFilter: "blur(6px)"
      }}>
        <div style={{ fontWeight: 700 }}>Выберите регион</div>
        <div style={{ marginTop: 8, color: "#7a8590" }}>Нажмите на область на карте, чтобы увидеть детали.</div>
      </div>
    );
  }

  // Здесь можно добавить более продвинутые KPI (trend, gini_local и т.д.)
  return (
    <div style={{
      borderRadius: 12,
      padding: 16,
      background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      backdropFilter: "blur(6px)",
      boxShadow: "0 6px 24px rgba(2,6,23,0.06)"
    }}>
      <div style={{ fontWeight: 800, fontSize: 18 }}>{region.region}</div>
      <div style={{ marginTop: 8, color: "#1b2b36" }}>
        <div><strong>Per capita:</strong> {region.per_capita} kg/person</div>
        {/* Заглушки — можно добавить реальные показатели */}
        <div style={{ marginTop: 8 }}><strong>Рекомендация:</strong> увеличить доступность и логистику в отстающих районах</div>
      </div>
    </div>
  );
}
