export function entropy(arr) {
  const sum = arr.reduce((s,v) => s+v, 0);
  if (sum === 0) return 0;
  return -arr.reduce((acc, x) => {
    const p = x / sum;
    return p > 0 ? acc + p * Math.log2(p) : acc;
  }, 0);
}
