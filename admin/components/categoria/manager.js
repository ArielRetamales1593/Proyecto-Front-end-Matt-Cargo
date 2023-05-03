import { useState } from "react";
import CategoriaForm from "./form";
import CategoriaListado from "./listado";

export default function CategoriaManager(props) {
  const [categorias, setCategorias] = useState([]);

  return (
    <>
      <CategoriaForm categorias={categorias} setCategorias={setCategorias} />

      <CategoriaListado categorias={categorias} setCategorias={setCategorias} />
    </>
  );
}
