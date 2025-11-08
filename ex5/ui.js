function executar() {
    try {
        const paths = eval(document.getElementById('input').value);
        const tree = generateTree(paths);
        document.getElementById('output').textContent = 
            JSON.stringify(tree, null, 2);
    } catch(e) {
        document.getElementById('output').textContent = e;
    }
}