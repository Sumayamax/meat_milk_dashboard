// Gini index
export function gini(array) {
  const n = array.length;
  const sorted = array.slice().sort((a,b)=>a-b);
  let cumSum = 0;
  for (let i=0;i<n;i++) cumSum += (2*(i+1) - n -1) * sorted[i];
  const sum = sorted.reduce((a,b)=>a+b,0);
  return cumSum / (n*sum);
}

// Энтропия
export function entropy(array) {
  const sum = array.reduce((a,b)=>a+b,0);
  return -array.reduce((acc, x) => {
    const p = x/sum;
    return p>0 ? acc + p*Math.log2(p) : acc;
  },0);
}
