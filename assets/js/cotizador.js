function calcularPrecio() {
  // Obtenemos los valores seleccionados en los campos
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const peso = document.getElementById("peso").value;

  // Definimos los precios por kilómetro según la distancia

  let precio = 0;
  if (origen === "Antofagasta" && destino === "Iquique") {
    precio = 1000;
  } else if (origen === "Iquique" && destino === "Calama") {
    precio = 1500;
  } else if (origen === "Calama" && destino === "Arica") {
    precio = 2000;
  } else {
    precio = 0;
  }

  totalPeso(peso);

  console.log(precioFinal);
  // Calculamos el precio total según el peso y la distancia
  const precioTotal = precio + precioFinal;

  // Mostramos el resultado en la etiqueta p con el id "resultado"
  const resultadoEl = document.getElementById("resultado");
  resultadoEl.textContent = `El precio total es: $${precioTotal}`;
}
function totalPeso(kg) {
  if (kg > 0 && kg < 99) {
    precioFinal = 50000;
  } else if (kg >= 100 && kg <= 199) {
    precioFinal = 100000;
  } else if (kg >= 200 && kg <= 299) {
    precioFinal = 200000;
  }
  return precioFinal;
}
