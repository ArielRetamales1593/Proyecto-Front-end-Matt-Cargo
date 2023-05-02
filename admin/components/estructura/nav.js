import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Nav() {
  return (
    <div className={font.className}>
      <header className="nav1">
        <h1 className="logoNav">Matt Cargo</h1>
        <nav>
          <ul className="listaNav">
            <a href="./index.html">
              <li>Inicio</li>
            </a>
            <a href="./assets/pages/cotizador.html">
              <li>Servicio</li>
            </a>
            <a href="./assets/pages/contacto.html">
              <li>Contacto</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}
