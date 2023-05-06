import CategoriaForm from "@/components/categoria/form";
import CategoriaListado from "@/components/categoria/listado";
import Nav from "@/components/estructura/nav";
import CategoriaManager from "@/components/categoria/manager";
import Footer from "@/components/estructura/footer";
import Configuracion from "@/components/otro/config";
import { useState } from "react";

// const [storageUser, setStorageUser] = useState("");
// storageUser = localStorage.getItem("usuario");

// if (storageUser == null) {
//   window.location = "login.html";
// }

// const objetoUser = JSON.parse(storageUser);
// const token = objetoUser.user.stsTokenManager.accessToken;

// const baseUrl = Configuracion.getWsBaseUrl();
// const url = baseUrl + "/usuario/token";

// fetch(url, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + token,
//   },
// })
//   .then((respuesta) => {
//     if (!respuesta.ok) {
//       throw new Error("Token no válido");
//     }
//     respuesta.json();
//   })
//   .then((data) => {
//     // Mostrar mensaje de éxito
//     console.log("Solicitud exitosa!");
//     console.log(data); // Mostrar los datos recibidos si es necesario
//   })

//   .catch((error) => {
//     window.location = "login.html";
//   });

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
