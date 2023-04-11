function calcularPrecio() {
  const tarifas = [
    { distancia: 0, tarifa: 0 },
    { distancia: 50, tarifa: 100 },
    { distancia: 100, tarifa: 200 },
    { distancia: 200, tarifa: 300 },
    { distancia: 500, tarifa: 500 },
  ];

  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const peso = document.getElementById("peso").value;

  let distancia = Math.abs(origen.charCodeAt(0) - destino.charCodeAt(0));
  let tarifa;

  for (let i = tarifas.length - 1; i >= 0; i--) {
    if (distancia >= tarifas[i].distancia) {
      tarifa = tarifas[i].tarifa;
      break;
    }
  }

  const precio = peso * tarifa;
  const resultado = `El precio del envío es $${precio}`;

  document.getElementById("resultado").textContent = resultado;
}
