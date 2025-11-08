async function exec_async(ops, m) {
    const cOp = (op) => new Promise(r => {
        setTimeout(() => r({
            id: op.id,
            fim: Date.now()
        }), op.tmp);
    });

    if (m === 'par') {
        const p = ops.map(op => cOp(op));
        return Promise.all(p);
    } else {
        const rs = [];
        for (const op of ops) {
            const r = await cOp(op);
            rs.push(r);
        }
        return rs;
    }
}