const aspirantes = [
  {
    nombre: "Ana Martínez",
    cedula: "1020345678",
    programa: "Desarrollo de Software",
    estado: "en-proceso",
  },
  {
    nombre: "Luis Pérez",
    cedula: "1098765432",
    programa: "Arte Culinario",
    estado: "aprobado",
  },
  {
    nombre: "Claudia Gómez",
    cedula: "1122334455",
    programa: "Marketing Digital",
    estado: "rechazado",
  },
];

const lista = document.getElementById("aspiranteList");
const searchInput = document.getElementById("searchInput");
const filterEstado = document.getElementById("filterEstado");

function renderAspirantes(filtroTexto = "", filtroEstado = "") {
  lista.innerHTML = "";

  const filtrados = aspirantes.filter((a) => {
    const coincideTexto =
      a.nombre.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      a.cedula.includes(filtroTexto) ||
      a.programa.toLowerCase().includes(filtroTexto.toLowerCase());
    const coincideEstado = filtroEstado ? a.estado === filtroEstado : true;
    return coincideTexto && coincideEstado;
  });

  filtrados.forEach((a) => {
    const card = document.createElement("div");
    card.className = "aspirante-card";

    card.innerHTML = `
      <div class="aspirante-info">
        <strong>${a.nombre}</strong>
        <span>Cédula: ${a.cedula}</span>
        <span>Programa: ${a.programa}</span>
      </div>
      <span class="estado ${a.estado}">${a.estado}</span>
    `;

    lista.appendChild(card);
  });
}

// Eventos de búsqueda y filtrado
searchInput.addEventListener("input", () => {
  renderAspirantes(searchInput.value, filterEstado.value);
});
filterEstado.addEventListener("change", () => {
  renderAspirantes(searchInput.value, filterEstado.value);
});

renderAspirantes();
