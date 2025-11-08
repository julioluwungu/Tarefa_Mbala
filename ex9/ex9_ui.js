function exec() {
    try {
        const e = eval('(' + document.getElementById('input').value + ')');
        const r = proc(e.v, e.ops);
        document.getElementById('output').textContent = 
            JSON.stringify(r, null, 2);
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}