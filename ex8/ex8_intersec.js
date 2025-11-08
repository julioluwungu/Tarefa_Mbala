function intr(vet) {
    if (!vet || vet.length === 0) return [];
    const res = new Set(vet[0]);
    for (let i = 1; i < vet.length; i++) {
        const at = new Set(vet[i]);
        for (const it of res) {
            if (!at.has(it)) {
                res.delete(it);
            }
        }
    }
    return Array.from(res).sort((a, b) => a - b);
}