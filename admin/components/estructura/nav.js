import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Nav() {
  return (
    <div className={font.className}>
      <header className="contNav">
        <h1 className="logoNav">Matt Cargo</h1>
        <nav>
          <ul className="nav1">
            <a href="./index.html">
              <li>Inicio</li>
            </a>
            <a href="../cotizacion">
              <li>Servicio</li>
            </a>
            <a href="./assets/pages/contacto.html">
              <li>Contacto</li>
            </a>
          </ul>
        </nav>
        <section id="menuLogin">
          <a href="/assets/pages/login.html">
            <img
              src="assets/img/iconologin.png"
              alt="userLoginIcon"
              className="login"
            />
          </a>
        </section>
      </header>
    </div>
  );
}
