import { useState } from "react";

export default function CategoriaForm() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // funcion que se crea al momento de pasar los datos del formulario /// crea un objeto de nombre categoria
  const procesarFormulario = async (eventoSubmit) => {
    try {
      eventoSubmit.preventDefault();
      const categoria = {
        nombre,
        descripcion,
      };

      // peticion a la Api
      const baseUrl = "http://localhost:3000";
      const url = baseUrl + "/categoria";
      // la funcion debe esperar que se complete una accion asincrona
      const respuesta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria),
      });

      if (!respuesta.ok) throw new Error("No se pudo guardar la categoría...");

      const categoriaGuardada = await respuesta.json();
      console.dir(categoriaGuardada);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form action="form" method="post" onSubmit={procesarFormulario}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <button type="submit">Guardar</button>
      </form>
      Nombre: {nombre} | Descripción: {descripcion}
    </>
  );
}
