let usuario = {
  nombre: "",
  puntos: 0,
  nivel: 1
};

let nivelActual = 1;
let intentosRestantes = null;
let aciertos = 0;

const flores = [
  { nombre: "Cardón", municipio: "Mulegé, Loreto", cientifico: "Pachycereus pringlei", toxica: false, usos: "Sombra, frutos comestibles y reserva de agua para fauna.", faunaAsociada: "Murciélagos, aves e insectos.", ecosistema: "Desierto costero del Golfo de California.", conservacion: "Sin riesgo.", curiosidad: "Puede superar los 10 metros y vivir más de 200 años." },
  { nombre: "Choya", municipio: "Mulegé, Loreto", cientifico: "Cylindropuntia spp", toxica: true, usos: "Ornamental, barreras vivas.", faunaAsociada: "Aves pequeñas que anidan entre sus espinas.", ecosistema: "Matorral xerófilo.", conservacion: "Sin riesgo.", curiosidad: "Sus espinas tienen púas microscópicas que se adhieren fácilmente." },
  { nombre: "Mezquite", municipio: "Mulegé", cientifico: "Prosopis glandulosa", toxica: false, usos: "Madera, carbón, forraje y alimento (vainas).", faunaAsociada: "Aves, insectos, ganado.", ecosistema: "Matorral desértico.", conservacion: "Común.", curiosidad: "Sus semillas se usaban para hacer harina en tiempos prehispánicos." },
  { nombre: "Torote", municipio: "Mulegé", cientifico: "Bursera microphylla", toxica: true, usos: "Madera para leña y resina con fines medicinales.", faunaAsociada: "Aves e insectos.", ecosistema: "Matorral y laderas secas.", conservacion: "Abundante.", curiosidad: "Su tronco retorcido y color rojizo lo hace fácilmente reconocible." },
  { nombre: "Palo verde", municipio: "Mulegé", cientifico: "Parkinsonia florida", toxica: false, usos: "Ornamental, sombra, reforestación.", faunaAsociada: "Colibríes e insectos polinizadores.", ecosistema: "Desierto y arroyos secos.", conservacion: "Sin riesgo.", curiosidad: "Su tronco verde realiza fotosíntesis incluso sin hojas." },
  { nombre: "Pitaya agria", municipio: "Comondú", cientifico: "Stenocereus gummosus", toxica: false, usos: "Fruto comestible en nieves, jugos y dulces.", faunaAsociada: "Murciélagos, aves e insectos.", ecosistema: "Matorral desértico.", conservacion: "Sin riesgo.", curiosidad: "El fruto tiene sabor ácido muy apreciado por comunidades locales." },
  { nombre: "Pitaya dulce", municipio: "Comondú", cientifico: "Stenocereus thurberi", toxica: false, usos: "Fruto comestible, tradicionalmente recolectado por pueblos originarios.", faunaAsociada: "Murciélagos y abejas.", ecosistema: "Desierto de Sonora y Baja California Sur.", conservacion: "Sin riesgo.", curiosidad: "Florece de noche, atrayendo polinizadores nocturnos." },
  { nombre: "Palo blanco", municipio: "Comondú, Los Cabos", cientifico: "Lysiloma candidum", toxica: false, usos: "Madera para carpintería y medicina tradicional.", faunaAsociada: "Aves e insectos.", ecosistema: "Bosque tropical seco.", conservacion: "Sin riesgo.", curiosidad: "Produce flores blancas en forma de pompones muy vistosas." },
  { nombre: "Torote blanco", municipio: "Comondú", cientifico: "Bursera odorata", toxica: true, usos: "Producción de resina aromática y leña.", faunaAsociada: "Aves e insectos.", ecosistema: "Matorrales secos.", conservacion: "Común.", curiosidad: "La resina ha sido utilizada en rituales como incienso." },
  { nombre: "Chirinola", municipio: "Comondú", cientifico: "Stenocereus eruca", toxica: false, usos: "Ornamental, potencial alimenticio.", faunaAsociada: "Insectos polinizadores.", ecosistema: "Zonas arenosas costeras.", conservacion: "Vulnerable por hábitat reducido.", curiosidad: "Crece horizontalmente y 'camina' por el suelo." },
  { nombre: "Mangle rojo", municipio: "La Paz, Loreto", cientifico: "Rhizophora mangle", toxica: true, usos: "Protección costera, filtro natural de agua.", faunaAsociada: "Camarones, peces, aves costeras.", ecosistema: "Manglar.", conservacion: "Protegido por ley.", curiosidad: "Sus raíces aéreas ayudan a estabilizar el suelo." },
  { nombre: "Mangle blanco", municipio: "La Paz, Loreto", cientifico: "Laguncularia racemosa", toxica: true, usos: "Protección de costas, medicina tradicional.", faunaAsociada: "Cangrejos, aves y peces juveniles.", ecosistema: "Manglares y estuarios.", conservacion: "Protegido por NOM-059.", curiosidad: "Sus hojas eliminan sal mediante glándulas especiales." },
  { nombre: "Mangle negro", municipio: "La Paz", cientifico: "Avicennia germinans", toxica: true, usos: "Protección costera, sombra, hábitat.", faunaAsociada: "Aves zancudas, moluscos.", ecosistema: "Manglar.", conservacion: "Protegido legalmente.", curiosidad: "Sus raíces forman 'neumatóforos' que sobresalen del suelo." },
  { nombre: "Palo fierro", municipio: "La Paz", cientifico: "Olneya tesota", toxica: false, usos: "Artesanías, carbón, carpintería.", faunaAsociada: "Aves, abejas, reptiles.", ecosistema: "Desierto y piedemontes áridos.", conservacion: "Amenazada por sobreexplotación.", curiosidad: "Su madera es tan densa que no flota en el agua." },
  { nombre: "Biznaga de Evermann", municipio: "La Paz", cientifico: "Mammillaria evermanniana", toxica: false, usos: "Ornamental, conservación de biodiversidad.", faunaAsociada: "Insectos polinizadores.", ecosistema: "Zonas rocosas áridas.", conservacion: "Protegida (NOM-059).", curiosidad: "Endémica de BCS, muy apreciada por coleccionistas." },
  { nombre: "Pino piñonero", municipio: "Los Cabos", cientifico: "Pinus cembroides subsp. lagunae", toxica: false, usos: "Madera, piñones comestibles.", faunaAsociada: "Ardillas, aves y mamíferos pequeños.", ecosistema: "Bosque de montaña.", conservacion: "Endémico y amenazado.", curiosidad: "Solo crece en las sierras altas de BCS." },
  { nombre: "Madroño", municipio: "Los Cabos", cientifico: "Arbutus spp", toxica: true, usos: "Ornamental, medicinal en infusiones.", faunaAsociada: "Aves frugívoras e insectos.", ecosistema: "Bosques templados.", conservacion: "Sin riesgo alto.", curiosidad: "Su corteza se desprende en placas delgadas y rojizas." },
  { nombre: "Encino", municipio: "Los Cabos", cientifico: "Quercus spp", toxica: true, usos: "Madera, leña, protección del suelo.", faunaAsociada: "Venados, ardillas, aves.", ecosistema: "Bosque de encino.", conservacion: "Vulnerable por cambio climático.", curiosidad: "Sus bellotas alimentan a muchas especies, pero son tóxicas para humanos." }
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

// Registro con Firebase
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

  const claveUsuario = nombre.toLowerCase().replace(/\s+/g, '');
  const nuevoUsuario = { nombre, password, edad, grado, puntos: 0, nivel: 1 };
  firebase.database().ref("usuarios/" + claveUsuario).set(nuevoUsuario);
  alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
}

// Login con Firebase
function iniciarSesion() {
  const nombre = document.getElementById("login-nombre").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const claveUsuario = nombre.toLowerCase().replace(/\s+/g, '');
  firebase.database().ref("usuarios/" + claveUsuario).once("value")
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
      localStorage.setItem('usuarioActivo', claveUsuario);
      document.getElementById("nombreUsuario").textContent = usuario.nombre;
      document.getElementById("auth-section").classList.add("hidden");
      document.getElementById("menu").classList.remove("hidden");
      document.getElementById("puntos").textContent = usuario.puntos;
    });
}

// Verifica sesión activa con Firebase
function verificarSesionActiva() {
  const claveUsuario = localStorage.getItem('usuarioActivo');
  if (!claveUsuario) return;
  firebase.database().ref("usuarios/" + claveUsuario).once("value")
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
  document.getElementById("botonesAprender").classList.add("hidden");
  document.getElementById("filtroMunicipios").classList.add("hidden");
  document.getElementById("botonesMunicipios").classList.add("hidden");
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.classList.add("hidden");
  instrucciones.innerHTML = "";
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("intentosRestantes").classList.add("hidden");
  intentosRestantes = null;
}

function actualizarUsuarioEnFirebase() {
  firebase.database().ref("usuarios/" + usuario.nombre.toLowerCase().replace(/\s+/g, '')).update({
    puntos: usuario.puntos,
    nivel: usuario.nivel
  });
}

// Mostrar sección aprender
function mostrarAprender() {
  document.getElementById("botonesAprender").classList.remove("hidden");
  document.getElementById("filtroMunicipios").classList.remove("hidden");
  const cont = document.getElementById("contenidoAprender");
  const galeria = document.getElementById("galeriaFlores");
  galeria.innerHTML = "";

  flores.forEach((flor, i) => {
    const plantaDiv = document.createElement("div");
    plantaDiv.className = "planta";
    plantaDiv.innerHTML = `
      <img src="img/flor${i + 1}.jpeg" alt="${flor.nombre}">
      <p><strong>Nombre común:</strong> ${flor.nombre}</p>
      <p><strong>Municipio:</strong> ${flor.municipio}</p>
      <p><em>Nombre científico:</em> ${flor.cientifico}</p>
      <p class="toxicidad ${flor.toxica ? 'toxica' : 'no-toxica'}">
        ${flor.toxica ? '🚫 Tóxica' : '✅ No tóxica'}
      </p>
      <div class="extra-info">
        <p class="campo-usos hidden"><strong>Usos:</strong> ${flor.usos}</p>
        <p class="campo-faunaAsociada hidden"><strong>Fauna asociada:</strong> ${flor.faunaAsociada}</p>
        <p class="campo-ecosistema hidden"><strong>Ecosistema:</strong> ${flor.ecosistema}</p>
        <p class="campo-conservacion hidden"><strong>Conservación:</strong> ${flor.conservacion}</p>
        <p class="campo-curiosidad hidden"><strong>Dato curioso:</strong> ${flor.curiosidad}</p>
      </div>
    `;
    galeria.appendChild(plantaDiv);
  });

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
                document.getElementById("puntos").textContent = usuario.puntos;
                iniciarMemorama();
              } else {
                nivelActual = 1;
                usuario.nivel = 1;
                document.getElementById("puntos").textContent = usuario.puntos;
                mostrarFelicitacion();
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
              iniciarMemorama();
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

  let cantidad;
  if (nivelActual === 1) {
    cantidad = 5;
  } else if (nivelActual === 2) {
    cantidad = 8;
  } else {
    cantidad = 12;
  }

  const seleccionadas = flores.slice().sort(() => 0.5 - Math.random()).slice(0, cantidad);
  const nombres = [...seleccionadas].sort(() => 0.5 - Math.random());

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
              document.getElementById("puntos").textContent = usuario.puntos;
              iniciarUneFotos();
            } else {
              nivelActual = 1;
              usuario.nivel = 1;
              document.getElementById("puntos").textContent = usuario.puntos;
              mostrarFelicitacion();
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
    voz.rate = 1;
    voz.pitch = 1;
    window.speechSynthesis.speak(voz);
  } else {
    console.warn("Tu navegador no soporta lectura por voz.");
  }
}

function toggleCampo(campo) {
  const elementos = document.querySelectorAll(`.campo-${campo}`);
  elementos.forEach(elem => elem.classList.toggle("hidden"));
}

function toggleMunicipios() {
  document.getElementById("botonesMunicipios").classList.toggle("hidden");
}

function filtrarPorMunicipio(municipio) {
  const galeria = document.getElementById("galeriaFlores");
  galeria.innerHTML = "";

  const lista = municipio === 'todos'
    ? flores
    : flores.filter(f => f.municipio.includes(municipio));

  lista.forEach((flor, i) => {
    const indexOriginal = flores.indexOf(flor);
    const plantaDiv = document.createElement("div");
    plantaDiv.className = "planta";
    plantaDiv.innerHTML = `
      <img src="img/flor${indexOriginal + 1}.jpeg" alt="${flor.nombre}">
      <p><strong>Nombre común:</strong> ${flor.nombre}</p>
      <p><strong>Municipio:</strong> ${flor.municipio}</p>
      <p><em>Nombre científico:</em> ${flor.cientifico}</p>
      <p class="toxicidad ${flor.toxica ? 'toxica' : 'no-toxica'}">
        ${flor.toxica ? '🚫 Tóxica' : '✅ No tóxica'}
      </p>
      <div class="extra-info">
        <p class="campo-usos hidden"><strong>Usos:</strong> ${flor.usos}</p>
        <p class="campo-faunaAsociada hidden"><strong>Fauna asociada:</strong> ${flor.faunaAsociada}</p>
        <p class="campo-ecosistema hidden"><strong>Ecosistema:</strong> ${flor.ecosistema}</p>
        <p class="campo-conservacion hidden"><strong>Conservación:</strong> ${flor.conservacion}</p>
        <p class="campo-curiosidad hidden"><strong>Dato curioso:</strong> ${flor.curiosidad}</p>
      </div>
    `;
    galeria.appendChild(plantaDiv);
  });
}

function filtrarToxicas(valor) {
  const galeria = document.getElementById("galeriaFlores");
  galeria.innerHTML = "";

  let listaFiltrada;
  if (valor === 'todas') {
    listaFiltrada = flores;
  } else {
    listaFiltrada = flores.filter(f => f.toxica === valor);
  }

  listaFiltrada.forEach((flor, i) => {
    const indexOriginal = flores.indexOf(flor);
    const plantaDiv = document.createElement("div");
    plantaDiv.className = "planta";
    plantaDiv.innerHTML = `
      <img src="img/flor${indexOriginal + 1}.jpeg" alt="${flor.nombre}">
      <p><strong>Nombre común:</strong> ${flor.nombre}</p>
      <p><strong>Municipio:</strong> ${flor.municipio}</p>
      <p><em>Nombre científico:</em> ${flor.cientifico}</p>
      <p class="toxicidad ${flor.toxica ? 'toxica' : 'no-toxica'}">
        ${flor.toxica ? '🚫 Tóxica' : '✅ No tóxica'}
      </p>
      <div class="extra-info">
        <p class="campo-usos hidden"><strong>Usos:</strong> ${flor.usos}</p>
        <p class="campo-faunaAsociada hidden"><strong>Fauna asociada:</strong> ${flor.faunaAsociada}</p>
        <p class="campo-ecosistema hidden"><strong>Ecosistema:</strong> ${flor.ecosistema}</p>
        <p class="campo-conservacion hidden"><strong>Conservación:</strong> ${flor.conservacion}</p>
        <p class="campo-curiosidad hidden"><strong>Dato curioso:</strong> ${flor.curiosidad}</p>
      </div>
    `;
    galeria.appendChild(plantaDiv);
  });
}

/*
function mostrarAyuda() {
  document.getElementById("modalAyuda").classList.remove("hidden");
}

function cerrarAyuda() {
  document.getElementById("modalAyuda").classList.add("hidden");
}
  */

const ayudaBtn = document.getElementById('ayudaFija');
  const popupAyuda = document.getElementById('popupAyuda');
  const cerrarBtn = document.querySelector('.cerrar-ayuda');

  ayudaBtn.addEventListener('click', function() {
    popupAyuda.classList.add('visible');
  });

  cerrarBtn.addEventListener('click', function() {
    popupAyuda.classList.remove('visible');
  });

  // Opcional: cerrar el popup si se hace clic fuera de él
  document.addEventListener('click', function(event) {
    if (
      popupAyuda.classList.contains('visible') &&
      !popupAyuda.contains(event.target) &&
      event.target !== ayudaBtn
    ) {
      popupAyuda.classList.remove('visible');
    }
  });

// Ejecutar al cargar
window.addEventListener('DOMContentLoaded', verificarSesionActiva);