async function exec() {
    try {
        const e = eval('(' + document.getElementById('input').value + ')');
        document.getElementById('output').textContent = 'Exec...';
        const ti = Date.now();
        
        const r = await exec_async(e.ops, e.m);
        
        const s = {
            t: Date.now() - ti,
            r: r
        };
        
        document.getElementById('output').textContent = 
            JSON.stringify(s, null, 2);
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}