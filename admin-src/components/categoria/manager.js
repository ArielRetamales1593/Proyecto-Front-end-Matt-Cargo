import { useState } from "react";
import CategoriaForm from "./form";
import CategoriaListado from "./listado";
import Preguntas from "./preguntas";

export default function CategoriaManager(props) {
  const [categorias, setCategorias] = useState([]);
  const [contactos, setContacto] = useState([]);
  return (
    <>
      <CategoriaForm categorias={categorias} setCategorias={setCategorias} />

      <CategoriaListado categorias={categorias} setCategorias={setCategorias} />

      <Preguntas contactos={contactos} setContacto={setContacto} />
    </>
  );
}
