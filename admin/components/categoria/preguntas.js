import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Preguntas({ contactos, setContacto }) {
  const cargarDatos = async () => {
    try {
      const baseUrl = "http://localhost:3000";
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

  return (
    <div className={font.className}>
      <h3 className="tituloTabla">Consultas Usuarios</h3>
      <div className="contConsultas">
        {contactos.map((contacto) => (
          <div key={contacto.id} className="card">
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
          </div>
        ))}
      </div>
    </div>
  );
}
