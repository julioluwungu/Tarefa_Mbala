function clone(o) {
    if (o === null || typeof o !== 'object') {
        return o;
    }

    if (Array.isArray(o)) {
        return o.map(i => clone(i));
    }

    const c = {};
    for (const k in o) {
        if (o.hasOwnProperty(k)) {
            c[k] = clone(o[k]);
        }
    }
    
    return c;
}