function calculator(str) {
    str = str.replace(/\s+/g, '');
    
    while (str.includes('(')) {
        str = str.replace(/\(([^()]+)\)/g, (match, expr) => calculator(expr));
    }
    
    while (str.match(/(\d+\.?\d*)([\*\/])(\d+\.?\d*)/)) {
        str = str.replace(/(\d+\.?\d*)([\*\/])(\d+\.?\d*)/, (match, a, op, b) => {
            return op === '*' ? Number(a) * Number(b) : Number(a) / Number(b);
        });
    }
    
    while (str.match(/(\d+\.?\d*)([\+\-])(\d+\.?\d*)/)) {
        str = str.replace(/(\d+\.?\d*)([\+\-])(\d+\.?\d*)/, (match, a, op, b) => {
            return op === '+' ? Number(a) + Number(b) : Number(a) - Number(b);
        });
    }
    
    return Number(str);
}