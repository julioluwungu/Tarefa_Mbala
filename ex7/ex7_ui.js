function exec() {
    try {
        const entrada = eval('(' + document.getElementById('input').value + ')');
        if (entrada.a && entrada.a.b && entrada.a.b.c) {
            entrada.a.b.c = entrada.a;
        }
        const resultado = serializar(entrada);
        document.getElementById('output').textContent = resultado;
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}