import world from "../data/world_milk.json";

/**
 * estimate rank: count countries with per_capita > value
 * returns { rank, total }
 */
export function estimateRank(perCapita) {
  const greater = world.filter(c => c.Value > perCapita || (c.Value === undefined && c.per_capita > perCapita)).length;
  const total = world.length;
  return { rank: greater + 1, total };
}
