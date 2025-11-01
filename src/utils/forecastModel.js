import coeffs from "../data/model_coefficients.json";

/**
 * currentParams: baseline indexes (production,income,price,infrastructure) - numeric
 * deltas: relative changes { production: 0.1, ... }
 * returns predicted per_capita (number)
 */
export function forecastPerCapita(currentParams, deltas) {
  const model = coeffs;
  const intercept = model.intercept || 0;
  const coefficients = model.coefficients || {};

  const inputs = {};
  Object.keys(coefficients).forEach(k => {
    const base = currentParams[k] ?? 1;
    const delta = deltas[k] ?? 0;
    inputs[k] = base * (1 + delta);
  });

  let pred = intercept;
  Object.keys(coefficients).forEach(k => {
    pred += coefficients[k] * inputs[k];
  });

  return Math.round(Math.max(0, pred));
}
