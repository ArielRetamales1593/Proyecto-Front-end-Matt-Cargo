// validaciones nombre + de 5 y no incluye espacios en blanco

const name1 = document.getElementById("name");
const nameError = document.querySelector(".errorNom");

const escuchar = (e = name1.addEventListener("input", () => {
  const valiName = name1.value;

  //   const arrName = Array.from(valiName);

  if (valiName.length > 3 && !valiName.includes(" ")) {
    name1.setAttribute("class", "done");
    nameError.textContent = "";
  } else {
    name1.setAttribute("class", "err");
    nameError.textContent =
      "El nombre debe tener al menos 3 caracteres y no incluir espacios";
  }
}));

// validacion email
const email1 = document.getElementById("email");
const errorMail = document.querySelector(".errorMail");

email1.addEventListener("input", () => {
  const valiEmail = email1.value;

  if (!valiEmail.includes(" ") && valiEmail.includes("@")) {
    email1.setAttribute("class", "done");
    errorMail.textContent = "";
  } else {
    email1.setAttribute("class", "err");
    errorMail.textContent =
      "El correo debe incluir @ y no debe tener espacios en blanco";
  }
});

//  validacion contraseña

const password = document.getElementById("password");
const errorPassword = document.querySelector(".errorPassword");
password.addEventListener("input", () => {
  const valiPassword = password.value;

  if (!valiPassword.includes(" ") && valiPassword.length > 5) {
    password.setAttribute("class", "done");
    errorPassword.textContent = "";

    const password2 = document.getElementById("password2");
    const errorPassword2 = document.querySelector(".errorPassword2");
    password2.addEventListener("input", () => {
      const valiPassword2 = password2.value;

      if (valiPassword === valiPassword2) {
        password2.setAttribute("class", "done");
        errorPassword2.textContent = "";
      } else {
        password2.setAttribute("class", "err");
        errorPassword2.textContent = "la contraseña debe ser igual";
      }
    });
  } else {
    password.setAttribute("class", "err");
    errorPassword.textContent =
      "la contraseña debe contener al menos 5 digitos";
  }
});

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

  const baseUrl = getBaseUrl();
  const url = baseUrl + "/registro";

  const fetchConfig = {
    method: "POST",
    headers: { "Content-type": "application/json" },
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
