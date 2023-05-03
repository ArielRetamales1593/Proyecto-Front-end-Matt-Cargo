import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import Image from "next/image";

export default function CategoriaListado({ categorias, setCategorias }) {
  const cargarDatos = async () => {
    try {
      const baseUrl = "http://localhost:3000";
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
      //const baseUrl   = Configuracion.getBaseUrl();
      const baseUrl = "http://localhost:3000";
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
          <label for="origen">Origen:</label>
          <select>
            <option value="0">Selecciona una cuidad de origen</option>
            {categorias.map((categoria) => (
              <option key={categoria.id}>
                <td>{categoria.nombre}</td>
              </option>
            ))}
          </select>

          <label htmlfor="origen">Destino:</label>
          <select>
            <option value="0">Selecciona una cuida de destino</option>
            {categorias.map((categoria) => (
              <option key={categoria.id}>
                <td>{categoria.nombre}</td>
              </option>
            ))}
          </select>
          <label for="peso">Peso (en kg):</label>
          <input type="number" id="peso" required />

          <button type="button" onclick="calcularPrecio()">
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
