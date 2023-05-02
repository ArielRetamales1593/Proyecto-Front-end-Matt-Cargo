import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";
import Nav from "@/components/estructura/nav";

export default function Servicio() {
  return (
    <main>
      <Nav />
      <CategoriaForm />

      <CategoriaListado />
    </main>
  );
}
