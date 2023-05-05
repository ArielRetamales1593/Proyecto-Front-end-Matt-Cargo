import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Configuracion from "../otro/config";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import Image from "next/image";

export default function CategoriaListado({ categorias, setCategorias }) {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [peso, setPeso] = useState("");
  const [precio, setPrecio] = useState("");
  const [precioTotal, setPrecioTotal] = useState("");

  const [pesoFinal, setPesoFinal] = useState("");

  function calcularPrecio() {
    console.log("Origen:", origen);
    console.log("Destino:", destino);
    console.log("Peso:", peso);

    if (origen === "Antofagasta" && destino === "Iquique") {
      setPrecio(1000);
    } else if (origen === "Iquique" && destino === "Calama") {
      setPrecio(1500);
    } else if (origen === "Calama" && destino === "Arica") {
      setPrecio(2500);
    } else if (origen === "Iquique" && destino === "Santiago") {
      setPrecio(25000);
    } else {
      setPrecio(0);
    }

    const x = totalPeso(peso);

    console.log(pesoFinal);
    // Calculamos el precio total según el peso y la distancia
    setPrecioTotal(precio + pesoFinal);

    // Mostramos el resultado en la etiqueta p con el id "resultado"
    const resultadoEl = document.getElementById("resultado");
    resultadoEl.textContent = `El precio total es: $${precioTotal}`;

    // useEffect(() => {
    //   const resultadoEl = document.getElementById("resultado");
    //   resultadoEl.textContent = `El precio total es: $${precioTotal}`;
    // }, [precioTotal]);
  }
  function totalPeso(kg) {
    if (kg > 0 && kg < 99) {
      setPesoFinal(50000);
    } else if (kg >= 100 && kg <= 199) {
      setPesoFinal(100000);
    } else if (kg >= 200 && kg <= 299) {
      setPesoFinal(200000);
    }
    return pesoFinal;
  }

  const cargarDatos = async () => {
    try {
      const baseUrl = Configuracion.getWsBaseUrl();
      const url = baseUrl + "/categoria";
      const respuesta = await fetch(url);

      if (!respuesta.ok)
        throw new Error("Problemas al recuperar las categorías!");

      const cats = await respuesta.json();
      setCategorias(cats); // LO MÁS IMPORTANTE !!!!
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const eliminar = async (categoria) => {
    try {
      const baseUrl = Configuracion.getWsBaseUrl();

      const url = baseUrl + "/categoria?id=" + categoria.id;
      //const url       = baseUrl + '/categoria/'+categoria.id;

      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      if (!respuesta.ok) throw new Error("No se pudo borrar la categoría!!!");
      const resultado = await respuesta.json();
      console.log("Categoría borrada de manera exitosa");

      // actualizar el listado
      cargarDatos();
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  return (
    <div className={font.className}>
      <div className="cuerpo">
        <div className="contGris"></div>
        <div className="contGranate"></div>
        <form id="formCotizador">
          <h1> Cotizador de envios</h1>
          <label htmlFor="origen">Origen:</label>
          <select value={origen} onChange={(e) => setOrigen(e.target.value)}>
            <option value="0">Selecciona una cuidad de origen</option>
            {categorias.map((categoria) => (
              <option key={categoria.id}>
                <td>{categoria.nombre}</td>
              </option>
            ))}
          </select>
          <label htmlfor="origen">Destino:</label>
          <select value={destino} onChange={(e) => setDestino(e.target.value)}>
            <option value="0">Selecciona una cuida de destino</option>
            {categorias.map((categoria) => (
              <option key={categoria.id}>
                <td>{categoria.nombre}</td>
              </option>
            ))}
          </select>
          <label htmlFor="peso">Peso (en kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
          <button type="button" onClick={calcularPrecio}>
            Calcular precio
          </button>
          <p id="resultado"></p>
        </form>
        <Image
          className="logoCoti"
          src="/img/logoblancoFinal.png"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
}
