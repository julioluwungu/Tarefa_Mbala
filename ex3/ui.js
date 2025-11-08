function exec() {
    try {
        const i = eval('(' + document.getElementById('input').value + ')');
        const c = clone(i);
        document.getElementById('output').textContent = 
            JSON.stringify(c, null, 2);
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}