document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", async (SubmitEvent) => {
    SubmitEvent.preventDefault();
    // const formElement = SubmitEvent.currentTarget;
    // const formData = new FormData(formElement);

    // const email = formData.get("email");
    // const contrasena = formData.get("contrasena");

    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("password").value;
    const nuevoUsuario = {
      email,
      contrasena,
    };

    const baseUrl = "http://localhost:3000";
    const url = baseUrl + "/login";

    const fetchConfig = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(nuevoUsuario),
    };

    try {
      const respuesta = await fetch(url, fetchConfig);

      if (!respuesta.ok) {
        console.log("está mal ");
        return;
      }

      const objetoJson = await respuesta.json();
      console.dir(objetoJson);

      const usuario = objetoJson.usuario;
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location = "../../prueba";
    } catch (error) {
      // conconssole.error(error.code);
      // console.error(error.message);
      console.dir(error);
    }
  });
});
