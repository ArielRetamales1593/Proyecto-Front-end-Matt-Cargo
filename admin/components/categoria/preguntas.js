import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Configuracion from "../otro/config";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Preguntas({ contactos, setContacto }) {
  const cargarDatos = async () => {
    try {
      const baseUrl = Configuracion.getWsBaseUrl();
      const url = baseUrl + "/consulta";
      const respuesta = await fetch(url);

      if (!respuesta.ok)
        throw new Error("Problemas al recuperar las categorías!");

      const cats = await respuesta.json();
      setContacto(cats); // LO MÁS IMPORTANTE !!!!
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const eliminar = async (contacto) => {
    try {
      const baseUrl = Configuracion.getWsBaseUrl();

      const url = baseUrl + "/consulta?id=" + contacto.id;
      //const url       = baseUrl + '/categoria/'+categoria.id;

      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      if (!respuesta.ok) throw new Error("No se pudo borrar la categoría!!!");
      const resultado = await respuesta.json();
      console.log("Categoría borrada de manera exitosa");

      // actualizar el listado
      cargarDatos();
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  return (
    <div className={font.className}>
      <h3 className="tituloTabla">Consultas Usuarios</h3>
      <div className="contConsultas">
        {contactos.map((contacto) => (
          <div key={contacto.id} className="card1">
            <p>
              <strong>Nombre:</strong> {contacto.nombre}
            </p>
            <p>
              {" "}
              <strong>Email:</strong> {contacto.email}
            </p>
            <p>
              {" "}
              <strong>Consulta:</strong> {contacto.mensaje}
            </p>
            <p>
              {" "}
              <strong>Id:</strong> {contacto.id}
            </p>

            <button className="eliminar" onClick={() => eliminar(contacto)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
