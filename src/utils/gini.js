export function gini(arr) {
  const array = arr.slice().sort((a,b)=>a-b);
  const n = array.length;
  const sum = array.reduce((s,v)=> s+v, 0);
  if (sum === 0) return 0;
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += (2*(i+1) - n - 1) * array[i];
  }
  return acc / (n * sum);
}
