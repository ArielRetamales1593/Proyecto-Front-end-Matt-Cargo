const formulario = document.getElementById("form");
formulario.addEventListener("submit", async (SubmitEvent) => {
  SubmitEvent.preventDefault();
  // const formElement = SubmitEvent.currentTarget;
  // const formData = new FormData(formElement);

  // const email = formData.get("email");
  // const contrasena = formData.get("contrasena");

  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;
  const nuevoUsuario = {
    nombre,
    email,
    mensaje,
  };

  const baseUrl = "http://localhost:3000";
  const url = baseUrl + "/contacto";

  const fetchConfig = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(nuevoUsuario),
  };

  try {
    const respuesta = await fetch(url, fetchConfig);
    window.location = "../../index.html";

    if (!respuesta.ok) {
      return;
    }

    const objetoJson = await respuesta.json();
    console.dir(objetoJson);
  } catch (error) {
    console.dir(error);
  }
});
