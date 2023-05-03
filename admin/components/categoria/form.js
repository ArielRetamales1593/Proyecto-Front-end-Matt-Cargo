import { useState } from "react";
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function CategoriaForm({ categorias, setCategorias }) {
  const [nombre, setNombre] = useState("");
  const [region, setRegion] = useState("");

  // funcion que se crea al momento de pasar los datos del formulario /// crea un objeto de nombre categoria
  const procesarFormulario = async (eventoSubmit) => {
    try {
      eventoSubmit.preventDefault();
      const categoria = {
        nombre,
        region,
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
      // actualiza la tabla
      setCategorias([...categorias, categoriaGuardada]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={font.className}>
      <h2 className="titulo1">Agregar Ciudades</h2>
      <form
        className="agregar"
        action="form"
        method="post"
        onSubmit={procesarFormulario}
      >
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Región</label>
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        ></input>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
