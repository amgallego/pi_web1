// Referencias a los elementos del DOM
const estudianteBtn = document.getElementById("btn-estudiante");
const adminBtn = document.getElementById("btn-admin");
const contenedor = document.querySelector(".contenedor-login");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");
const formulario = document.querySelector("form");
const btnCrearCuenta = document.getElementById("btnCrearCuenta");

let rolActual = "estudiante";

// Usuarios simulados
const estudiantes = [
  { usuario: "estudiante1", clave: "1234" },
  { usuario: "estudiante2", clave: "abcd" },
];

const administrativos = [
  { usuario: "admin1", clave: "adminpass" },
  { usuario: "admin2", clave: "clave456" },
];

// Modo administrativo
adminBtn.addEventListener("click", () => {
  adminBtn.classList.add("activo");
  estudianteBtn.classList.remove("activo");
  contenedor.classList.add("administrativo");
  contenedor.classList.remove("estudiante");

  usuarioInput.placeholder = "Ingrese su ID administrativo";
  contrasenaInput.placeholder = "Ingrese su clave institucional";

  rolActual = "administrativo";
});

// Modo estudiante
estudianteBtn.addEventListener("click", () => {
  estudianteBtn.classList.add("activo");
  adminBtn.classList.remove("activo");
  contenedor.classList.add("estudiante");
  contenedor.classList.remove("administrativo");

  usuarioInput.placeholder = "Ingrese su nombre de usuario";
  contrasenaInput.placeholder = "Ingrese su contraseña";

  rolActual = "estudiante";
});

// Validación de ingreso
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = usuarioInput.value.trim();
  const clave = contrasenaInput.value.trim();

  const usuarios = rolActual === "estudiante" ? estudiantes : administrativos;
  let accesoValido = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].usuario === usuario && usuarios[i].clave === clave) {
      accesoValido = true;
      break;
    }
  }

  if (accesoValido) {
    alert(`✅ Bienvenido, ${rolActual === "estudiante" ? "Estudiante" : "Personal Administrativo"}!`);
    
    if (rolActual === "estudiante") {
      window.location.href = "nexus board/nexus board/preseleccion.html";
    } else {
      window.location.href = "nexus board/nexus board/Personal Administrativo.html";
    }
  } else {
    alert("❌ Usuario o contraseña incorrectos.");
  }
});

// Redirección a página de creación de cuenta
btnCrearCuenta.addEventListener("click", function () {
  window.location.href = "nexus board/nexus board/formulariocuenta.html"; // Ajusta la ruta si está en otra carpeta
});

