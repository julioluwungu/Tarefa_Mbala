function find(o, p) {
    const pts = p.split('.');
    let c = o;
    
    for (const p of pts) {
        if (c === undefined || c === null || 
            typeof c !== 'object') {
            return undefined;
        }
        c = c[p];
    }
    
    return c;
}