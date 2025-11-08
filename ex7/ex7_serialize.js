function serializar(obj) {
    const vistos = new WeakSet();
    
    return JSON.stringify(obj, (chave, valor) => {
        if (typeof valor === 'object' && valor !== null) {
            if (vistos.has(valor)) {
                return '[Referência Circular]';
            }
            vistos.add(valor);
        }
        return valor;
    }, 2);
}