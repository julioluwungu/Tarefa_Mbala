function top3Numbers(arr) {
  const freq = {};
  arr.forEach(x => {
    const n = Number(x);
    const key = Number.isNaN(n) ? String(x) : n;
    freq[key] = (freq[key] || 0) + 1;
  });
  return Object.entries(freq)
    .sort((a,b) => b[1] - a[1])
    .slice(0,3)
    .map(([k,v]) => ({
      numero: isFinite(Number(k)) ? Number(k) : k,
      vezes: v
    }));
}