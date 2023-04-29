import { useEffect, useState } from "react";

export default function CategoriaListado() {
  const [categorias, setCategorias] = useState([]);

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

  return (
    <>
      <div className="contGris"></div>
      <div className="contGranate"></div>

      <h2>Ciudades ingresadas</h2>
      {
        <table border={1}>
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
                <td> </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      <form id="formCotizador">
        <h1> Cotizador</h1>
        <label for="origen">Origen:</label>
        <select>
          {categorias.map((categoria) => (
            <option key={categoria.id}>
              <td>{categoria.nombre}</td>
            </option>
          ))}
        </select>

        <label for="origen">Destino:</label>
        <select>
          {categorias.map((categoria) => (
            <option key={categoria.id}>
              <td>{categoria.nombre}</td>
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
