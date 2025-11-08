function executar() {
    try {
        const expression = eval(document.getElementById('input').value);
        const result = calculator(expression);
        document.getElementById('output').textContent = result;
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}