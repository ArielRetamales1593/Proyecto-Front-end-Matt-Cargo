import Nav from "@/components/estructura/nav";
import Cotizador from "@/components/categoria/cotizador";
import { useState } from "react";

export default function Servicio() {
  const [categorias, setCategorias] = useState([]);
  return (
    <main>
      <Cotizador categorias={categorias} setCategorias={setCategorias} />
    </main>
  );
}
