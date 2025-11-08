function proc(v, ops) {
    let r = v;
    for (const o of ops) {
        const f = eval(o.fn);
        if (o.tp === 'mapa') {
            r = r.map(f);
        } else if (o.tp === 'filtro') {
            r = r.filter(f);
        }
    }
    return r;
}