function calcular() {
  try {
    const input = document.getElementById('input').value;
    const arr = input.split(/[,\s]+/).filter(Boolean);
    document.getElementById('output').textContent = 
      JSON.stringify(top3Numbers(arr), null, 2);
  } catch(e) {
    document.getElementById('output').textContent = e;
  }
}