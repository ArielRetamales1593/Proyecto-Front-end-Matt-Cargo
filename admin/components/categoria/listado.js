import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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
      <h3 className="tituloTabla">Ciudades ingresadas</h3>

      {
        <table border={1} className="tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ciudad</th>
              <th>Región</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.nombre}</td>
                <td>{categoria.region}</td>
                <td>
                  <button
                    className="eliminar"
                    onClick={() => eliminar(categoria)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        /* <form id="formCotizador">
        <h2> Cotizador</h2>
        <label for="origen">Origen:</label>
        <select>
          {categorias.map((categoria) => (
            <option key={categoria.id}>
              <td>{categoria.nombre}</td>
            </option>
          ))}
        </select>

        <label htmlfor="origen">Destino:</label>
        <select>
          {categorias.map((categoria) => (
            <option key={categoria.id}>
              <td>{categoria.nombre}</td>
            </option>
          ))}
        </select>

        <Image
          className="logo"
          src="/img/logoblancoFinal.png"
          width={200}
          height={200}
        />
      </form> */
      }
    </div>
  );
}
