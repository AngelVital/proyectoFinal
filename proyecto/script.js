let usuario = {
  nombre: "",
  puntos: 0
};

const plantas = [
  {
    nombre: "Ceiba",
    ubicacion: "Selva Tropical",
    municipio: "Tuxtla Gutiérrez",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ceiba_pentandra.jpg/320px-Ceiba_pentandra.jpg"
  },
  {
    nombre: "Nanche",
    ubicacion: "Bosque seco",
    municipio: "San Cristóbal",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Byrsonima_crassifolia_fruits.jpg/320px-Byrsonima_crassifolia_fruits.jpg"
  }
];

function iniciar() {
  const nombre = document.getElementById("username").value;
  if (nombre.trim() === "") {
    alert("Por favor ingresa tu nombre.");
    return;
  }
  usuario.nombre = nombre;
  document.getElementById("nombreUsuario").textContent = usuario.nombre;
  document.querySelector(".user-section").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function mostrarAprender() {
  const cont = document.getElementById("contenidoAprender");
  cont.innerHTML = "<h2>🌸 Conoce la flora:</h2>";
  plantas.forEach(planta => {
    cont.innerHTML += `
      <div class="planta">
        <h3>${planta.nombre}</h3>
        <p><strong>Ubicación:</strong> ${planta.ubicacion}</p>
        <p><strong>Municipio:</strong> ${planta.municipio}</p>
        <img src="${planta.foto}" alt="${planta.nombre}" />
      </div>
    `;
  });
  cont.classList.remove("hidden");
}

function jugarNivel() {
  usuario.puntos += 10;
  document.getElementById("puntos").textContent = usuario.puntos;
  alert("🎉 ¡Nivel completado! Has ganado 10 puntos.");
}
