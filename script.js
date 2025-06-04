let usuario = {
  nombre: "",
  puntos: 0,
  nivel: 1
};

let nivelActual = 1;
let intentosRestantes = null;
let aciertos = 0;

const flores = [
  { nombre: "Cardón", municipio: "Mulegé, Loreto", cientifico: "Pachycereus pringlei" },
  { nombre: "Choya", municipio: "Mulegé, Loreto", cientifico: "Cylindropuntia spp" },
  { nombre: "Mezquite", municipio: "Mulegé", cientifico: "Prosopis glandulosa" },
  { nombre: "Torote", municipio: "Mulegé", cientifico: "Bursera microphylla" },
  { nombre: "Palo verde", municipio: "Mulegé", cientifico: "Parkinsonia florida" },
  { nombre: "Pitaya agria", municipio: "Comondú", cientifico: "Stenocereus gummosus" },
  { nombre: "Pitaya dulce", municipio: "Comondú", cientifico: "Stenocereus thurberi" },
  { nombre: "Palo blanco", municipio: "Comondú, Los Cabos", cientifico: "Lysiloma candidum" },
  { nombre: "Torote blanco", municipio: "Comondú", cientifico: "Bursera odorata" },
  { nombre: "Chirinola", municipio: "Comondú", cientifico: "Stenocereus eruca" },
  { nombre: "Mangle rojo", municipio: "La Paz, Loreto", cientifico: "Rhizophora mangle" },
  { nombre: "Mangle blanco", municipio: "La Paz, Loreto", cientifico: "Laguncularia racemosa" },
  { nombre: "Mangle negro", municipio: "La Paz", cientifico: "Avicennia germinans" },
  { nombre: "Palo fierro", municipio: "La Paz", cientifico: "Olneya tesota" },
  { nombre: "Biznaga de Evermann", municipio: "La Paz", cientifico: "Mammillaria evermanniana" },
  { nombre: "Pino piñonero", municipio: "Los Cabos", cientifico: "Pinus cembroides subsp. lagunae" },
  { nombre: "Madroño", municipio: "Los cabos", cientifico: "Arbutus spp" },
  { nombre: "Encino", municipio: "Los cabos", cientifico: "Quercus spp" }
];

// 🎵 SONIDOS
const sonidos = {
  habilitados: true,
  click: new Audio("sonidos/click.mp3"),
  win: new Audio("sonidos/win.mp3"),
  lose: new Audio("sonidos/lose.mp3")
};

function reproducirSonido(nombre) {
  if (sonidos.habilitados && sonidos[nombre]) {
    sonidos[nombre].currentTime = 0;
    sonidos[nombre].play();
  }
}

function toggleSonido() {
  sonidos.habilitados = !sonidos.habilitados;
  const btn = document.getElementById("btnSonido");
  btn.textContent = sonidos.habilitados ? "🔊 Sonidos: Activados" : "🔇 Sonidos: Desactivados";
}

// Registro
function registrar() {
  const nombre = document.getElementById("reg-nombre").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const edad = parseInt(document.getElementById("reg-edad").value);
  const grado = document.getElementById("reg-grado").value;

  const regexNombre = /^[A-Za-zÁ-Úá-úñÑ\s]+$/;

  if (!nombre || !password || !edad || !grado) {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (!regexNombre.test(nombre)) {
    alert("El nombre solo debe contener letras y espacios.");
    return;
  }

  if (edad > 12) {
    alert("La edad no puede ser mayor de 12 años.");
    return;
  }

  const nuevoUsuario = { nombre, password, edad, grado, puntos: 0, nivel: 1 };
  firebase.database().ref("usuarios/" + nombre).set(nuevoUsuario);
  alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
}


// Login
function iniciarSesion() {
  const nombre = document.getElementById("login-nombre").value.trim();
  const password = document.getElementById("login-password").value.trim();
  firebase.database().ref("usuarios/" + nombre).once("value")
    .then(snapshot => {
      if (!snapshot.exists()) {
        alert("⚠️ Usuario no registrado.");
        return;
      }
      const usuarioGuardado = snapshot.val();
      if (usuarioGuardado.password !== password) {
        alert("❌ Contraseña incorrecta.");
        return;
      }
      usuario = usuarioGuardado;
      nivelActual = usuario.nivel || 1;
      localStorage.setItem('usuarioActivo', nombre); // Solo para recordar la sesión
      document.getElementById("nombreUsuario").textContent = usuario.nombre;
      document.getElementById("auth-section").classList.add("hidden");
      document.getElementById("menu").classList.remove("hidden");
      document.getElementById("puntos").textContent = usuario.puntos;
    });
}

function actualizarUsuarioEnFirebase() {
  firebase.database().ref("usuarios/" + usuario.nombre).update({
    puntos: usuario.puntos,
    nivel: usuario.nivel
  });
}

// Verifica sesión activa
function verificarSesionActiva() {
  const nombreActivo = localStorage.getItem('usuarioActivo');
  if (!nombreActivo) return;
  firebase.database().ref("usuarios/" + nombreActivo).once("value")
    .then(snapshot => {
      if (!snapshot.exists()) return;
      usuario = snapshot.val();
      nivelActual = usuario.nivel || 1;
      document.getElementById("nombreUsuario").textContent = usuario.nombre;
      document.getElementById("auth-section").classList.add("hidden");
      document.getElementById("menu").classList.remove("hidden");
      document.getElementById("puntos").textContent = usuario.puntos;
    });
}

// Cerrar sesión
function cerrarSesion() {
  const confirmar = confirm("¿Estás seguro que deseas cerrar sesión?");
  if (!confirmar) return;

  localStorage.removeItem('usuarioActivo');
  location.reload();
}

// Volver al menú
function volverAlMenu() {
  document.getElementById("contenidoJuego").innerHTML = "";
  document.getElementById("contenidoJuego").classList.add("hidden");
  document.getElementById("contenidoAprender").classList.add("hidden");
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.classList.add("hidden");
  instrucciones.innerHTML = "";
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("intentosRestantes").classList.add("hidden");
  intentosRestantes = null;
}
// Mostrar sección aprender
function mostrarAprender() {
  const cont = document.getElementById("contenidoAprender");
  cont.innerHTML = `
    <h2>🌸 Conoce la flora de Baja California Sur</h2>
    <p>Explora algunas de las especies más representativas de nuestra región.</p>
  `;

  const galeria = document.createElement("div");
  galeria.className = "galeria-flores";

  flores.forEach((flor, i) => {
    const plantaDiv = document.createElement("div");
    plantaDiv.className = "planta";
    plantaDiv.innerHTML = `
      <img src="img/flor${i + 1}.jpeg" alt="${flor.nombre}">
      <p><strong>Nombre común:</strong> ${flor.nombre}</p>
      <p><strong>Municipio:</strong> ${flor.municipio}</p>
      <p><em>Nombre científico:</em> ${flor.cientifico}</p>
    `;
    galeria.appendChild(plantaDiv);
  });

  cont.appendChild(galeria);

  const botonVolver = document.createElement("button");
  botonVolver.textContent = "⬅️ Volver al menú";
  botonVolver.onclick = () => {
    cont.classList.add("hidden");
    volverAlMenu();
  };
  cont.appendChild(botonVolver);

  cont.classList.remove("hidden");
  document.getElementById("menu").classList.add("hidden");
}

// Iniciar juego
function iniciarJuego(nombreJuego) {
  intentosRestantes = null;
  document.getElementById("contenidoJuego").innerHTML = "";
  document.getElementById("intentosRestantes").classList.remove("hidden");
  mostrarJuego();

  if (nombreJuego === 'memorama') {
    iniciarMemorama();
  } else if (nombreJuego === 'uneFotos') {
    iniciarUneFotos();
  }
}

// Mostrar juego
function mostrarJuego() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("contenidoAprender").classList.add("hidden");
  document.getElementById("contenidoJuego").classList.remove("hidden");
  document.getElementById("instruccionesJuego").classList.remove("hidden");
}

// Iniciar memorama
function iniciarMemorama() {
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>🧠 Memorama</h2>
    <p>Encuentra las plantas iguales</p>
    <button id="btnVolverMenu">⬅️ Volver al menú</button>
  `;
  leerTexto("Encuentra las plantas iguales. Haz clic en las cartas para voltearlas y formar parejas.");

  document.getElementById("btnVolverMenu").onclick = volverAlMenu;
  crearMemorama();
  actualizarIntentosEnPantalla();
}

// Crear memorama
function crearMemorama() {
  let pares, maxIntentos;
  if (nivelActual === 1) {
    pares = 5;
    maxIntentos = null;
  } else if (nivelActual === 2) {
    pares = 10;
    maxIntentos = 15;
  } else {
    pares = 18;
    maxIntentos = 30;
  }

  intentosRestantes = maxIntentos;
  const indices = Array.from({ length: flores.length }, (_, i) => i);
  const seleccionados = nivelActual === 3
    ? indices
    : indices.sort(() => 0.5 - Math.random()).slice(0, pares);
  const imagenes = seleccionados.map(i => `flor${i + 1}`);
  const cartas = imagenes.concat(imagenes).sort(() => 0.5 - Math.random());

  const contJuego = document.getElementById("contenidoJuego");
  contJuego.innerHTML = "";

  const grid = document.createElement("div");
  grid.id = "memorama";
  grid.className = "memorama-grid";
  contJuego.appendChild(grid);

  let seleccionadas = [], bloqueo = false, encontrados = 0;

  cartas.forEach(img => {
    const carta = document.createElement("div");
    carta.className = "carta";
    carta.dataset.nombre = img;

    const contenedor = document.createElement("div");
    contenedor.className = "cara-contenedor";
    contenedor.innerHTML = `
      <div class="cara frontal"><img src="img/${img}.jpeg" alt="${img}"></div>
      <div class="cara reverso">❓</div>
    `;
    carta.appendChild(contenedor);

    carta.addEventListener("click", () => {
      reproducirSonido("click");
      if (bloqueo || carta.classList.contains("volteada") || seleccionadas.length === 2) return;

      carta.classList.add("volteada");
      seleccionadas.push(carta);

      if (seleccionadas.length === 2) {
        const [c1, c2] = seleccionadas;
        if (c1.dataset.nombre === c2.dataset.nombre) {
          encontrados++;
          seleccionadas = [];

          if (encontrados === pares) {
            setTimeout(() => {
              reproducirSonido("win");
              alert("🎉 ¡Nivel completado!");
              usuario.puntos += 10;
              actualizarUsuarioEnFirebase();

              if (nivelActual < 3) {
                nivelActual++;
                usuario.nivel = nivelActual;
                actualizarUsuarioEnFirebase();
                localStorage.setItem(`usuario_${usuario.nombre}`, JSON.stringify(usuario));
                document.getElementById("puntos").textContent = usuario.puntos;
                iniciarMemorama(); // avanzar a siguiente nivel
              } else {
                nivelActual = 1;
                usuario.nivel = 1;
                localStorage.setItem(`usuario_${usuario.nombre}`, JSON.stringify(usuario));
                document.getElementById("puntos").textContent = usuario.puntos;
                mostrarFelicitacion(); // mostrar solo al terminar el juego
              }
            }, 500);
          }
        } else {
          if (intentosRestantes !== null) {
            intentosRestantes--;
            actualizarIntentosEnPantalla();
            if (intentosRestantes <= 0) {
              reproducirSonido("lose");
              alert("❌ Se acabaron los intentos.");
              iniciarMemorama(); // reiniciar el mismo nivel
              return;
            }
          }
          bloqueo = true;
          setTimeout(() => {
            c1.classList.remove("volteada");
            c2.classList.remove("volteada");
            seleccionadas = [];
            bloqueo = false;
          }, 1000);
        }
      }
    });

    grid.appendChild(carta);
  });

  if (nivelActual >= 2) {
    const todasCartas = document.querySelectorAll(".carta");
    todasCartas.forEach(c => c.classList.add("volteada"));
    bloqueo = true;
    setTimeout(() => {
      todasCartas.forEach(c => c.classList.remove("volteada"));
      bloqueo = false;
    }, nivelActual === 2 ? 3000 : 5000);
  }
}

// Mostrar intentos restantes
function actualizarIntentosEnPantalla() {
  const elem = document.getElementById("contadorIntentos");
  if (intentosRestantes === null) {
    document.getElementById("intentosRestantes").classList.add("hidden");
  } else {
    elem.textContent = intentosRestantes;
    document.getElementById("intentosRestantes").classList.remove("hidden");
  }
}
// Juego Une la foto con su nombre
function iniciarUneFotos() {
  aciertos = 0;
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>🔗 Une la foto con su nombre</h2>
    <p>Arrastra la foto de la planta y suéltala en el recuadro con su nombre.</p>
    <button id="btnVolverMenu">⬅️ Volver al menú</button>
  `;
  leerTexto("Arrastra la imagen de la planta hasta el nombre correcto. Une todas para completar el nivel.");

  document.getElementById("btnVolverMenu").onclick = volverAlMenu;

  const cont = document.getElementById("contenidoJuego");
  cont.innerHTML = "";

  // Determinar cantidad según nivel
  let cantidad;
  if (nivelActual === 1) {
    cantidad = 5;
  } else if (nivelActual === 2) {
    cantidad = 8;
  } else {
    cantidad = 12;
  }

  // Elegir flores sin repetir
  const seleccionadas = flores.slice().sort(() => 0.5 - Math.random()).slice(0, cantidad);
  const nombres = [...seleccionadas].sort(() => 0.5 - Math.random());

  // Contenedor de imágenes
  const contImgs = document.createElement("div");
  contImgs.className = "une-fotos-imgs";
  seleccionadas.forEach((flor) => {
    const img = document.createElement("img");
    img.src = `img/flor${flores.indexOf(flor) + 1}.jpeg`;
    img.alt = flor.nombre;
    img.draggable = true;
    img.dataset.nombre = flor.nombre;

    img.addEventListener("dragstart", (e) => {
      reproducirSonido("click");
      e.dataTransfer.setData("text/plain", img.dataset.nombre);
    });

    contImgs.appendChild(img);
  });
  cont.appendChild(contImgs);

  // Contenedor de nombres
  const contNombres = document.createElement("div");
  contNombres.className = "une-fotos-nombres";
  nombres.forEach(flor => {
    const drop = document.createElement("div");
    drop.className = "drop-nombre";
    drop.textContent = flor.nombre;
    drop.dataset.nombre = flor.nombre;

    drop.addEventListener("dragover", (e) => e.preventDefault());
    drop.addEventListener("drop", (e) => {
      e.preventDefault();
      const nombreArrastrado = e.dataTransfer.getData("text/plain");

      if (nombreArrastrado === drop.dataset.nombre) {
        drop.style.backgroundColor = "#d4edda";
        drop.style.color = "#155724";
        const img = [...document.querySelectorAll("img")].find(i => i.dataset.nombre === nombreArrastrado);
        if (img) {
          img.style.opacity = "0.5";
          img.draggable = false;
        }

        aciertos++;
        reproducirSonido("click");

        if (aciertos === cantidad) {
          setTimeout(() => {
            reproducirSonido("win");
            alert("🎉 ¡Muy bien! Has completado el nivel.");
            usuario.puntos += 5;
            actualizarUsuarioEnFirebase();

            if (nivelActual < 3) {
              nivelActual++;
              usuario.nivel = nivelActual;
              actualizarUsuarioEnFirebase();
              localStorage.setItem(`usuario_${usuario.nombre}`, JSON.stringify(usuario));
              document.getElementById("puntos").textContent = usuario.puntos;
              iniciarUneFotos(); // avanzar al siguiente nivel
            } else {
              nivelActual = 1;
              usuario.nivel = 1;
              localStorage.setItem(`usuario_${usuario.nombre}`, JSON.stringify(usuario));
              document.getElementById("puntos").textContent = usuario.puntos;
              mostrarFelicitacion(); // fin del juego
            }
          }, 300);
        }
      } else {
        reproducirSonido("lose");
        drop.classList.add("alerta", "error");
        drop.textContent = "❌ Incorrecto";
        setTimeout(() => {
          drop.classList.remove("alerta", "error");
          drop.textContent = drop.dataset.nombre;
        }, 1000);
      }
    });

    contNombres.appendChild(drop);
  });
  cont.appendChild(contNombres);
}


function lanzarConfeti() {
  const canvas = document.getElementById("confetiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const confetis = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 40 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 5
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }
  function update() {
    confetis.forEach(c => {
      c.y += Math.cos(c.d / 10) + 1;
      c.x += Math.sin(c.d / 10);
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  animate();
}
function mostrarFelicitacion() {
  const felicitacionDiv = document.getElementById("felicitacion");
  felicitacionDiv.classList.remove("hidden");

  // Asegurar que el canvas tenga dimensiones reales después de ser visible
  requestAnimationFrame(() => {
    lanzarConfeti();
  });
}

function cerrarFelicitacion() {
  document.getElementById("felicitacion").classList.add("hidden");
  volverAlMenu();
}
function leerTexto(texto) {
  if ('speechSynthesis' in window) {
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'es-MX';
    voz.rate = 1; // velocidad normal
    voz.pitch = 1;
    window.speechSynthesis.speak(voz);
  } else {
    console.warn("Tu navegador no soporta lectura por voz.");
  }
}



// Ejecutar al cargar
window.addEventListener('DOMContentLoaded', verificarSesionActiva);
