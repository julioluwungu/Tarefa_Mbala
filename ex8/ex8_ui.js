function exec() {
    try {
        const e = eval('(' + document.getElementById('input').value + ')');
        const r = intr(e.vet);
        document.getElementById('output').textContent = 
            JSON.stringify(r, null, 2);
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}