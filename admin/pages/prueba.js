import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";
import Nav from "@/components/estructura/nav";
import CategoriaManager from "@/components/categoria/manager";
import Footer from "@/components/estructura/footer";

export default function Servicio() {
  return (
    <div>
      <Nav />
      <main className="contAdmin">
        <CategoriaManager />
      </main>
      <Footer />
    </div>
  );
}
