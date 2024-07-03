function calculateEOQ() {
    var demand = parseFloat(document.getElementById('demand').value);
    var orderingCost = parseFloat(document.getElementById('orderingCost').value);
    var holdingCost = parseFloat(document.getElementById('holdingCost').value);

    if (isNaN(demand) || isNaN(orderingCost) || isNaN(holdingCost)) {
        alert('Please enter valid numbers');
        return;
    }

    var EOQ = Math.round(Math.sqrt((2 * 365 * demand * orderingCost) / holdingCost));


    document.getElementById('result').innerHTML = 'EOQ (Economic Order Quantity): ' + EOQ.toFixed(2) + ' units';
}
