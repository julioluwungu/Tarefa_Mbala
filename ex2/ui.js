function executar() {
  try {
    const arr = eval(document.getElementById('input').value);
    document.getElementById('output').textContent = 
      JSON.stringify(flatten(arr), null, 2);
  } catch(e) {
    document.getElementById('output').textContent = e;
  }
}