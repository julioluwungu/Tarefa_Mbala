function exec() {
    try {
        const i = eval('(' + document.getElementById('input').value + ')');
        const r = find(i.o, i.p);
        document.getElementById('output').textContent = 
            JSON.stringify(r, null, 2);
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}