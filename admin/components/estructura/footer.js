import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className={font.className}>
      <footer class="footer-container">
        <div class="footer-left">
          <h2 class="logoFooter">Matt Cargo</h2>
        </div>
        <div class="footer-right">
          <ul class="listFooter">
            <li>Dirección: Calle Falsa 123, Ciudad de Antofagasta</li>
            <li>Teléfono: (123) 5555-555</li>
            <li>correoalgo.cl</li>
            <li>
              ¿Tienes dudas ? Escribenos
              <a href="./assets/pages/contacto.html">Aquí</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
