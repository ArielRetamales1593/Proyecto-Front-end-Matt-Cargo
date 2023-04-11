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

var Rut = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut: function (rutCompleto) {
    rutCompleto = rutCompleto.replaceAll(".", "");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
    var tmp = rutCompleto.split("-");
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == "K") digv = "k";

    return Rut.dv(rut) == digv;
  },
  dv: function (T) {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  },
};

const iRut = document.querySelector("input#rut");
const mRut = document.querySelector("input#rut + span");
iRut.addEventListener("blur", (e) => {
  const rut = iRut.value;
  if (!Rut.validaRut(rut)) {
    mRut.textContent = "RUT inválido!";
    mRut.classList.add("error");
    iRut.classList.add("error");
  } else {
    iRut.classList.remove("error");
    mRut.classList.remove("error");
    mRut.textContent = "";
  }
});

// const iNombre = document.querySelector("input#nombre");
// const mNombre = document.querySelector("input#nombre + span");
// iNombre.addEventListener('blur', (e) => {
//     if( iNombre.value.length < 3 ) {
//         mNombre.textContent = "Nombre muy corto";
//         mNombre.classList.add("error");
//         iNombre.classList.add("error");
//     } else {
//         iNombre.classList.remove("error");
//         mNombre.classList.remove("error");
//         mNombre.textContent = "";
//     }
// });

// const sComuna = document.querySelector("select#comuna");
// const mComuna = document.querySelector("select#comuna + span");
// sComuna.addEventListener('blur', (e) => {
//     if( sComuna.value == "" ) {
//         mComuna.textContent = "Debe seleccionar una comuna";
//         mComuna.classList.add("error");
//     }
// });

// https://codepen.io/josefosaurus/pen/Jjjazaw
