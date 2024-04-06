function actualizarInventario() {
    var producto = document.getElementById("producto").value;
    var cantidadActual = parseInt(document.getElementById("cantidadActual").value, 10);
    var cantidadAgregar = parseInt(document.getElementById("cantidadAgregar").value, 10);
    var stockSeguridad = parseInt(document.getElementById("stockSeguridad").value, 10);

    // Aplicando la fórmula Q/2 + SS
    var ajusteInventario = (cantidadAgregar / 2) + stockSeguridad;
    var nuevaCantidad = cantidadActual + ajusteInventario;

    document.getElementById("resultado").innerHTML = `Con el ajuste de inventario, el nuevo total para <strong>${producto}</strong> es: <strong>${ajusteInventario.toFixed(2)}</strong>`;
}
