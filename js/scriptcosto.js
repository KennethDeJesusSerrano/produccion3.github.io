function calcularCosto() {
    const horasTotales = parseFloat(document.getElementById('horasTotales').value);
    const mtbfPorcentaje = parseFloat(document.getElementById('mtbfPorcentaje').value) / 100;
    const duracionTarea = parseFloat(document.getElementById('duracionTarea').value);
    const costoHoraTrabajo = parseFloat(document.getElementById('costoHoraTrabajo').value);
    const costoRepuestos = parseFloat(document.getElementById('costoRepuestos').value);
    const costoTareasOperacionales = parseFloat(document.getElementById('costoTareasOperacionales').value);
    const retrasoLogistico = parseFloat(document.getElementById('retrasoLogistico').value);
    const costoHoraParadaProduccion = parseFloat(document.getElementById('costoHoraParadaProduccion').value);
    const costoFallaVezUnica = parseFloat(document.getElementById('costoFallaVezUnica').value);

    const tiempoEntreFallas = mtbfPorcentaje * horasTotales;
    const numeroFallas = Math.round(horasTotales / tiempoEntreFallas);


    const costoTareaMantenimiento = costoHoraTrabajo * duracionTarea * numeroFallas;
    const costoRepuestoTotal = costoRepuestos * numeroFallas;
    const costoTareasOperacionalesTotal = costoTareasOperacionales * numeroFallas;
    const costoParadaProduccion = costoHoraParadaProduccion * duracionTarea * numeroFallas;
    const costoRetrasoLogisticoPorFalla = costoHoraParadaProduccion * retrasoLogistico;
    const costoRetrasoLogisticoTotal = costoRetrasoLogisticoPorFalla * numeroFallas;
    const costoTotal = costoTareaMantenimiento + costoRepuestoTotal + costoTareasOperacionalesTotal + costoParadaProduccion + costoFallaVezUnica + costoRetrasoLogisticoTotal;

    document.getElementById('resultado').innerHTML = `
        <p>Número de fallas: ${numeroFallas.toFixed(2)}</p>
        <p>Costo de tarea de mantenimiento: $${costoTareaMantenimiento.toFixed(2)}</p>
        <p>Costo de repuesto: $${costoRepuestoTotal.toFixed(2)}</p>
        <p>Costo de tareas operacionales: $${costoTareasOperacionalesTotal.toFixed(2)}</p>
        <p>Costo de parada de producción: $${costoParadaProduccion.toFixed(2)}</p>
        <p>Costo de la falla de vez única: $${costoFallaVezUnica.toFixed(2)}</p>
        <p>Costo total de retraso logístico: $${costoRetrasoLogisticoTotal.toFixed(2)}</p>
        <p>Costo total: $${costoTotal.toFixed(2)}</p>
    `;
}
