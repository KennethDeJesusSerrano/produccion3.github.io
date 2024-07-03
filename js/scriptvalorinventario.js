document.getElementById('inventoryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío del formulario

    const demand = parseFloat(document.getElementById('demand').value);
    const time = parseFloat(document.getElementById('time').value);
    const safetyStock = parseFloat(document.getElementById('safetyStock').value);

    if (!isNaN(demand) && !isNaN(time) && !isNaN(safetyStock)) {
        const averageInventory = ((demand * time) / 2) + safetyStock;
        document.getElementById('result').innerText = `El valor promedio del inventario es: ${averageInventory}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, introduce valores válidos.';
    }
});

