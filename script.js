
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
// Variable global para niveles por juego
let nivelesJuegos = {};

// Login con Firebase - MODIFICADO
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
      
      // NUEVO: Cargar niveles por juego
      nivelesJuegos = usuario.niveles || {};
      
      // Mantener compatibilidad con sistema anterior
      nivelActual = usuario.nivel || 1;
      
      localStorage.setItem('usuarioActivo', claveUsuario);
      document.getElementById("nombreUsuario").textContent = usuario.nombre;
      document.getElementById("auth-section").classList.add("hidden");
      document.getElementById("menu").classList.remove("hidden");
      document.getElementById("puntos").textContent = usuario.puntos;
    });
}

// Función actualizada para guardar en Firebase
function actualizarUsuarioEnFirebase() {
  const claveUsuario = usuario.nombre.toLowerCase().replace(/\s+/g, '');
  firebase.database().ref("usuarios/" + claveUsuario).update({
    puntos: usuario.puntos,
    nivel: nivelActual, // mantener para compatibilidad
    niveles: nivelesJuegos // NUEVO: niveles por juego
  });
}

// NUEVAS funciones para manejar niveles por juego
function obtenerNivelJuego(nombreJuego) {
  return nivelesJuegos[nombreJuego] || 1;
}

function actualizarNivelJuego(nombreJuego, nuevoNivel) {
  nivelesJuegos[nombreJuego] = nuevoNivel;
  actualizarUsuarioEnFirebase();
}

function subirNivelJuego(nombreJuego) {
  const nivelActual = obtenerNivelJuego(nombreJuego);
  actualizarNivelJuego(nombreJuego, nivelActual + 1);
  console.log(`¡Nivel ${nivelActual + 1} desbloqueado en ${nombreJuego}!`);
}

// Función para mostrar nivel actual de un juego en la UI
function mostrarNivelJuego(nombreJuego, elementoId) {
  const nivel = obtenerNivelJuego(nombreJuego);
  document.getElementById(elementoId).textContent = `Nivel: ${nivel}`;
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
  document.getElementById("galeriaFlores").classList.add("hidden");
  document.getElementById("filtroMunicipios").classList.add("hidden");
  document.getElementById("botonesMunicipios").classList.add("hidden");
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.classList.add("hidden");
  instrucciones.innerHTML = "";
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("intentosRestantes").classList.add("hidden");
  intentosRestantes = null;
}



// Mostrar sección aprender
function mostrarAprender() {
  
  document.getElementById("filtroMunicipios").classList.remove("hidden");
  const cont = document.getElementById("contenidoAprender");
  const galeria = document.getElementById("galeriaFlores");
  galeria.classList.remove("hidden");
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
      <p><strong>Usos:</strong> ${flor.usos}</p>
      <p><strong>Fauna asociada:</strong> ${flor.faunaAsociada}</p>
      <p><strong>Ecosistema:</strong> ${flor.ecosistema}</p>
      <p><strong>Conservación:</strong> ${flor.conservacion}</p>
      <p><strong>Dato curioso:</strong> ${flor.curiosidad}</p>
     
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
  document.getElementById("intentosRestantes").classList.add("hidden");
  mostrarJuego();

  if (nombreJuego === 'memorama') {
    iniciarMemorama();
  } else if (nombreJuego === 'uneFotos') {
    iniciarUneFotos();
  } else if (nombreJuego === 'adivinaPlanta') {
    iniciarAdivinaPlanta();
  } else if (nombreJuego === 'trivia') {
  iniciarTrivia();
  } else if (nombreJuego === 'clasificaToxicidad') {
  iniciarClasificaToxicidad();
  } else if (nombreJuego === 'verdaderoFalso') {
  iniciarVerdaderoFalso();
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
  `;
  leerTexto("Encuentra las plantas iguales. Haz clic en las cartas para voltearlas y formar parejas.");
  crearMemorama();
  actualizarIntentosEnPantalla();
}

// Crear memorama
// Crear memorama - MODIFICADO
function crearMemorama() {
  const nombreJuego = "memorama"; // Nombre del juego
  let nivelActual = obtenerNivelJuego(nombreJuego); // Obtener nivel del juego
  let pares, maxIntentos;

  if (nivelActual === 1) {
    pares = 6;
    maxIntentos = null;
  } else if (nivelActual === 2) {
    pares = 12;
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
  let yaCompletoNiveles = false; // Nueva variable

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

              if (nivelActual < 3) {
                // Subir nivel del juego
                subirNivelJuego(nombreJuego);
                if (!yaCompletoNiveles) { // Sumar puntos solo si no ha completado todos los niveles antes
                  usuario.puntos += 10;
                  document.getElementById("puntos").textContent = usuario.puntos;
                  actualizarUsuarioEnFirebase();
                }
                iniciarMemorama();
              } else {
                // Reiniciar nivel del juego
                actualizarNivelJuego(nombreJuego, 1);
                yaCompletoNiveles = true; // Marcar que ya completó todos los niveles
                mostrarFelicitacion();
                iniciarMemorama(); // Iniciar desde el nivel 1
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

/// Juego Une la foto con su nombre - MODIFICADO
function iniciarUneFotos() {
  aciertos = 0;
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>🔗 Une la foto con su nombre</h2>
    <p>Arrastra la foto de la planta y suéltala en el recuadro con su nombre.</p>
  `;
  leerTexto("Arrastra la imagen de la planta hasta el nombre correcto. Une todas para completar el nivel.");

  const cont = document.getElementById("contenidoJuego");
  cont.innerHTML = "";

  const nombreJuego = "une-fotos"; // Nombre del juego
  let nivelActual = obtenerNivelJuego(nombreJuego); // Obtener nivel del juego
  
  // Verificar si ya completó todos los niveles
  const yaCompletoTodos = nivelesJuegos[nombreJuego + "_completado"] || false;

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
            
            if (nivelActual < 3) {
              // Subir nivel del juego
              subirNivelJuego(nombreJuego);
              
              // Solo sumar puntos si no ha completado todos los niveles antes
              if (!yaCompletoTodos) {
                usuario.puntos += 5;
                document.getElementById("puntos").textContent = usuario.puntos;
                actualizarUsuarioEnFirebase();
              }
              
              iniciarUneFotos();
            } else {
              // Marcar que ya completó todos los niveles
              nivelesJuegos[nombreJuego + "_completado"] = true;
              
              // Reiniciar nivel del juego
              actualizarNivelJuego(nombreJuego, 1);
              
              // Solo sumar puntos si es la primera vez que completa todos los niveles
              if (!yaCompletoTodos) {
                usuario.puntos += 5;
                document.getElementById("puntos").textContent = usuario.puntos;
                actualizarUsuarioEnFirebase();
              }
              
              mostrarFelicitacion();
              iniciarUneFotos(); // Reiniciar desde nivel 1
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
      <p><strong>Usos:</strong> ${flor.usos}</p>
      <p><strong>Fauna asociada:</strong> ${flor.faunaAsociada}</p>
      <p><strong>Ecosistema:</strong> ${flor.ecosistema}</p>
      <p><strong>Conservación:</strong> ${flor.conservacion}</p>
      <p><strong>Dato curioso:</strong> ${flor.curiosidad}</p>
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
      <p><strong>Usos:</strong> ${flor.usos}</p>
      <p><strong>Fauna asociada:</strong> ${flor.faunaAsociada}</p>
      <p><strong>Ecosistema:</strong> ${flor.ecosistema}</p>
      <p><strong>Conservación:</strong> ${flor.conservacion}</p>
      <p><strong>Dato curioso:</strong> ${flor.curiosidad}</p>
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

  // --- POPUP DE USUARIOS Y PUNTUACIONES ---
const usuariosBtn = document.getElementById('usuariosBtn');
const popupUsuarios = document.getElementById('popupUsuarios');
const cerrarUsuarios = document.querySelector('.cerrar-usuarios');

usuariosBtn.addEventListener('click', function() {
  popupUsuarios.classList.add('visible');
  cargarUsuariosPuntuaciones();
});

cerrarUsuarios.addEventListener('click', function() {
  popupUsuarios.classList.remove('visible');
});

// Cerrar el popup si se hace clic fuera de él
document.addEventListener('click', function(event) {
  if (
    popupUsuarios.classList.contains('visible') &&
    !popupUsuarios.contains(event.target) &&
    event.target !== usuariosBtn
  ) {
    popupUsuarios.classList.remove('visible');
  }
});

// Cargar usuarios y puntuaciones desde Firebase
function cargarUsuariosPuntuaciones() {
  const tabla = document.getElementById('tablaUsuarios');
  tabla.innerHTML = '<tr><td colspan="2">Cargando...</td></tr>';

  // Ajusta la ruta si tu estructura es diferente
  firebase.database().ref('usuarios').orderByChild('puntos').limitToLast(20).once('value', function(snapshot) {
    const datos = [];
    snapshot.forEach(function(child) {
      const usuario = child.val();
      datos.push({
        nombre: usuario.nombre || child.key,
        puntos: usuario.puntos || 0
      });
    });

    // Ordenar de mayor a menor puntuación
    datos.sort((a, b) => b.puntos - a.puntos);

    if (datos.length === 0) {
      tabla.innerHTML = '<tr><td colspan="2">No hay datos</td></tr>';
    } else {
      tabla.innerHTML = datos.map(u =>
        `<tr><td>${u.nombre}</td><td>${u.puntos}</td></tr>`
      ).join('');
    }
  });
}

function iniciarAdivinaPlanta() {
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>🌿 Adivina la planta</h2>
    <p>Observa la imagen y selecciona el nombre correcto</p>
  `;

  const cont = document.getElementById("contenidoJuego");
  cont.innerHTML = "";

  const nombreJuego = "adivina-planta"; // Nombre del juego
  let nivelActual = obtenerNivelJuego(nombreJuego); // Obtener nivel del juego
  
  // Verificar si ya completó todos los niveles
  const yaCompletoTodos = nivelesJuegos[nombreJuego + "_completado"] || false;

  let cantidad;
  if (nivelActual === 1) {
    cantidad = 5;
  } else if (nivelActual === 2) {
    cantidad = 8;
  } else {
    cantidad = 12;
  }

  let aciertos = 0;

  function mostrarPregunta() {
    cont.innerHTML = "";

    const plantaCorrecta = flores[Math.floor(Math.random() * flores.length)];
    const opcionesIncorrectas = flores
      .filter(f => f.nombre !== plantaCorrecta.nombre)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    const opciones = [plantaCorrecta, ...opcionesIncorrectas].sort(() => 0.5 - Math.random());

    const tarjeta = document.createElement("div");
    tarjeta.className = "planta";
    tarjeta.innerHTML = `
      <img src="img/flor${flores.indexOf(plantaCorrecta) + 1}.jpeg" alt="${plantaCorrecta.nombre}">
      <p><strong>¿Cuál es el nombre de esta planta?</strong></p>
    `;
    cont.appendChild(tarjeta);

    const botonesContainer = document.createElement("div");

    opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion.nombre;
      btn.onclick = () => {
        if (opcion.nombre === plantaCorrecta.nombre) {
          aciertos++;
          reproducirSonido("win");
          alert("✅ ¡Correcto!");

          if (aciertos >= cantidad) {
            alert("🎉 ¡Nivel completado!");
            
            if (nivelActual < 3) {
              // Subir nivel del juego
              subirNivelJuego(nombreJuego);
              
              // Solo sumar puntos si no ha completado todos los niveles antes
              if (!yaCompletoTodos) {
                usuario.puntos += 5;
                document.getElementById("puntos").textContent = usuario.puntos;
                actualizarUsuarioEnFirebase();
              }
              
              iniciarAdivinaPlanta();
            } else {
              // Marcar que ya completó todos los niveles
              nivelesJuegos[nombreJuego + "_completado"] = true;
              
              // Reiniciar nivel del juego
              actualizarNivelJuego(nombreJuego, 1);
              
              // Solo sumar puntos si es la primera vez que completa todos los niveles
              if (!yaCompletoTodos) {
                usuario.puntos += 5;
                document.getElementById("puntos").textContent = usuario.puntos;
                actualizarUsuarioEnFirebase();
              }
              
              mostrarFelicitacion();
              iniciarAdivinaPlanta(); // Reiniciar desde nivel 1
            }
          } else {
            mostrarPregunta();
          }

        } else {
          reproducirSonido("lose");
          alert("❌ Incorrecto. Intenta de nuevo.");
        }
      };
      botonesContainer.appendChild(btn);
    });

    cont.appendChild(botonesContainer);
  }

  mostrarPregunta();
}

function iniciarTrivia() {
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>❓ Trivia rápida</h2>
    <p>Responde correctamente las preguntas para subir de nivel</p>
  `;

  const cont = document.getElementById("contenidoJuego");
  cont.innerHTML = "";

  const nombreJuego = "trivia"; // Nombre del juego
  let nivelActual = obtenerNivelJuego(nombreJuego); // Obtener nivel del juego
  
  // Verificar si ya completó todos los niveles
  const yaCompletoTodos = nivelesJuegos[nombreJuego + "_completado"] || false;

  let cantidad;
  if (nivelActual === 1) cantidad = 5;
  else if (nivelActual === 2) cantidad = 8;
  else cantidad = 12;

  let aciertos = 0;

  const camposTrivia = ['ecosistema', 'usos', 'faunaAsociada'];
  const preguntas = [];

  while (preguntas.length < cantidad) {
    const planta = flores[Math.floor(Math.random() * flores.length)];
    const campo = camposTrivia[Math.floor(Math.random() * camposTrivia.length)];

    const preguntaTexto = {
      ecosistema: `¿A qué ecosistema pertenece la planta "${planta.nombre}"?`,
      usos: `¿Cuál es un uso de la planta "${planta.nombre}"?`,
      faunaAsociada: `¿Qué fauna se asocia con "${planta.nombre}"?`
    };

    preguntas.push({
      texto: preguntaTexto[campo],
      respuestaCorrecta: planta[campo],
      opciones: generarOpciones(planta[campo], campo)
    });
  }

  function generarOpciones(correcta, campo) {
    const opciones = [correcta];
    const candidatos = flores
      .map(f => f[campo])
      .filter(val => val !== correcta);
    const unicas = [...new Set(candidatos)].sort(() => 0.5 - Math.random()).slice(0, 2);
    return [...opciones, ...unicas].sort(() => 0.5 - Math.random());
  }

  function mostrarPregunta(index) {
    cont.innerHTML = "";

    if (index >= preguntas.length) {
      alert("🎉 ¡Nivel completado!");
      
      if (nivelActual < 3) {
        // Subir nivel del juego
        subirNivelJuego(nombreJuego);
        
        // Solo sumar puntos si no ha completado todos los niveles antes
        if (!yaCompletoTodos) {
          usuario.puntos += 5;
          document.getElementById("puntos").textContent = usuario.puntos;
          actualizarUsuarioEnFirebase();
        }
        
        iniciarTrivia();
      } else {
        // Marcar que ya completó todos los niveles
        nivelesJuegos[nombreJuego + "_completado"] = true;
        
        // Reiniciar nivel del juego
        actualizarNivelJuego(nombreJuego, 1);
        
        // Solo sumar puntos si es la primera vez que completa todos los niveles
        if (!yaCompletoTodos) {
          usuario.puntos += 5;
          document.getElementById("puntos").textContent = usuario.puntos;
          actualizarUsuarioEnFirebase();
        }
        
        mostrarFelicitacion();
        iniciarTrivia(); // Reiniciar desde nivel 1
      }
      return;
    }

    const pregunta = preguntas[index];

    const preguntaDiv = document.createElement("div");
    preguntaDiv.className = "planta";
    preguntaDiv.innerHTML = `<p><strong>${pregunta.texto}</strong></p>`;
    cont.appendChild(preguntaDiv);

    pregunta.opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => {
        if (opcion === pregunta.respuestaCorrecta) {
          aciertos++;
          reproducirSonido("win");
          alert("✅ ¡Correcto!");
        } else {
          reproducirSonido("lose");
          alert("❌ Incorrecto. Era: " + pregunta.respuestaCorrecta);
        }
        mostrarPregunta(index + 1);
      };
      cont.appendChild(btn);
    });
  }

  mostrarPregunta(0);
}

function iniciarClasificaToxicidad() {
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>🚥 Clasifica por toxicidad</h2>
    <p>Arrastra cada planta a la categoría correcta</p>
  `;

  const cont = document.getElementById("contenidoJuego");
  cont.innerHTML = "";

  const nombreJuego = "clasifica-toxicidad"; // Nombre del juego
  let nivelActual = obtenerNivelJuego(nombreJuego); // Obtener nivel del juego
  
  // Verificar si ya completó todos los niveles
  const yaCompletoTodos = nivelesJuegos[nombreJuego + "_completado"] || false;

  // Cantidad de plantas según el nivel
  let cantidad;
  if (nivelActual === 1) cantidad = 6;
  else if (nivelActual === 2) cantidad = 8;
  else cantidad = 10;

  const seleccionadas = flores.slice().sort(() => 0.5 - Math.random()).slice(0, cantidad);
  let correctas = 0;
  let total = seleccionadas.length;
  let errores = [];

  const contZonas = document.createElement("div");
  contZonas.style.display = "flex";
  contZonas.style.justifyContent = "space-around";
  contZonas.style.marginBottom = "20px";

  const zonas = ['toxica', 'no-toxica'];

  zonas.forEach(tipo => {
    const drop = document.createElement("div");
    drop.className = `zona-drop ${tipo}`;
    drop.dataset.tipo = tipo;
    drop.innerHTML = `<h3>${tipo === 'toxica' ? '🟥 Tóxicas' : '🟩 No tóxicas'}</h3>`;
    drop.style.width = "45%";
    drop.style.minHeight = "200px";
    drop.style.padding = "10px";
    drop.style.border = "3px dashed gray";
    drop.style.borderRadius = "10px";
    drop.style.background = tipo === 'toxica' ? '#ffe5e5' : '#e5ffe5';
    drop.style.textAlign = "center";

    drop.ondragover = e => e.preventDefault();

    drop.ondrop = e => {
      const index = e.dataTransfer.getData("index");
      const planta = seleccionadas[index];
      const card = document.getElementById("planta-" + index);

      const esCorrecto = (planta.toxica && tipo === 'toxica') || (!planta.toxica && tipo === 'no-toxica');

      if (!card || card.classList.contains("clasificada")) return;

      // Mostrar el nombre en la zona
      const nombrePlanta = document.createElement("p");
      nombrePlanta.textContent = planta.nombre;
      nombrePlanta.style.fontWeight = "bold";
      nombrePlanta.style.margin = "4px";
      drop.appendChild(nombrePlanta);

      card.style.opacity = "0.5";
      card.style.pointerEvents = "none";
      card.classList.add("clasificada");

      if (esCorrecto) {
        reproducirSonido("win");
        
        // Solo sumar puntos si no ha completado todos los niveles antes
        if (!yaCompletoTodos) {
          usuario.puntos += 1;
          document.getElementById("puntos").textContent = usuario.puntos;
          actualizarUsuarioEnFirebase();
        }
        
        correctas++;
      } else {
        reproducirSonido("lose");
        planta.clasificacionIncorrecta = tipo;
        errores.push(planta);
      }

      if ((correctas + errores.length) === total) {
        setTimeout(() => {
          let mensaje = `🎉 ¡Has clasificado correctamente ${correctas} de ${total} plantas!\n\n`;

          // Mostrar correctas
          const correctasPlantas = seleccionadas.filter(p => !errores.includes(p));
          mensaje += `✅ Correctas:\n` + correctasPlantas.map(p =>
            `- ${p.nombre} → ${p.toxica ? 'Tóxica' : 'No tóxica'}`
          ).join('\n');

          // Mostrar errores
          if (errores.length > 0) {
            mensaje += `\n\n❌ Errores:\n` + errores.map(p =>
              `- ${p.nombre} → Clasificada como "${p.clasificacionIncorrecta === 'toxica' ? 'Tóxica' : 'No tóxica'}" (correcto: ${p.toxica ? 'Tóxica' : 'No tóxica'})`
            ).join('\n');
          }

          alert(mensaje);

          // Verificar si debe avanzar de nivel
          const porcentajeAciertos = (correctas / total) * 100;
          
          if (porcentajeAciertos >= 70) { // 70% de aciertos para pasar de nivel
            if (nivelActual < 3) {
              // Subir nivel del juego
              subirNivelJuego(nombreJuego);
              alert(`🎉 ¡Nivel completado! Avanzas al nivel ${nivelActual + 1}`);
              iniciarClasificaToxicidad();
            } else {
              // Marcar que ya completó todos los niveles
              nivelesJuegos[nombreJuego + "_completado"] = true;
              
              // Reiniciar nivel del juego
              actualizarNivelJuego(nombreJuego, 1);
              
              alert("🏆 ¡Has completado todos los niveles! El juego se reinicia.");
              mostrarFelicitacion();
              iniciarClasificaToxicidad(); // Reiniciar desde nivel 1
            }
          } else {
            alert(`📚 Necesitas al menos 70% de aciertos para avanzar. ¡Inténtalo de nuevo!`);
            iniciarClasificaToxicidad(); // Repetir el mismo nivel
          }
        }, 300);
      }
    };

    contZonas.appendChild(drop);
  });

  cont.appendChild(contZonas);

  const tarjetas = document.createElement("div");
  tarjetas.className = "tarjetas-clasificacion";
  tarjetas.style.display = "flex";
  tarjetas.style.flexWrap = "wrap";
  tarjetas.style.justifyContent = "center";
  tarjetas.style.gap = "20px";

  seleccionadas.forEach((flor, i) => {
    const card = document.createElement("div");
    card.className = "planta";
    card.id = "planta-" + i;
    card.draggable = true;
    card.dataset.index = i;
    card.innerHTML = `
      <img src="img/flor${flores.indexOf(flor) + 1}.jpeg" alt="${flor.nombre}" style="width: 100px;">
      <p>${flor.nombre}</p>
    `;
    card.ondragstart = e => {
      reproducirSonido("click");
      e.dataTransfer.setData("index", i);
    };
    tarjetas.appendChild(card);
  });

  cont.appendChild(tarjetas);
}

// Juego: Verdadero o falso
function iniciarVerdaderoFalso() {
  const instrucciones = document.getElementById("instruccionesJuego");
  instrucciones.innerHTML = `
    <h2>✅❌ Verdadero o falso</h2>
    <p>Lee la afirmación y elige la opción correcta</p>
  `;

  const cont = document.getElementById("contenidoJuego");
  cont.innerHTML = "";

  const nombreJuego = "verdadero-falso"; // Nombre del juego
  let nivelActual = obtenerNivelJuego(nombreJuego); // Obtener nivel del juego
  
  // Verificar si ya completó todos los niveles
  const yaCompletoTodos = nivelesJuegos[nombreJuego + "_completado"] || false;

  let cantidad;
  if (nivelActual === 1) cantidad = 5;
  else if (nivelActual === 2) cantidad = 8;
  else cantidad = 12;

  let aciertos = 0;
  let preguntas = [];

  for (let i = 0; i < cantidad; i++) {
    const flor = flores[Math.floor(Math.random() * flores.length)];
    const campo = ["toxica", "ecosistema", "usos", "faunaAsociada"][Math.floor(Math.random() * 4)];

    const esVerdadera = Math.random() < 0.5;
    let valorCorrecto = flor[campo];
    let valorMostrado = valorCorrecto;

    if (!esVerdadera) {
      const otras = flores.filter(f => f[campo] !== valorCorrecto);
      valorMostrado = otras[Math.floor(Math.random() * otras.length)][campo];
    }

    let afirmacion = "";
    if (campo === "toxica") {
      afirmacion = `${flor.nombre} ${valorMostrado ? 'es' : 'no es'} una planta tóxica.`;
    } else if (campo === "ecosistema") {
      afirmacion = `${flor.nombre} pertenece al ecosistema: ${valorMostrado}.`;
    } else if (campo === "usos") {
      afirmacion = `${flor.nombre} se utiliza para: ${valorMostrado}`;
    } else if (campo === "faunaAsociada") {
      afirmacion = `${flor.nombre} está asociada con: ${valorMostrado}`;
    }

    preguntas.push({ texto: afirmacion, correcta: esVerdadera });
  }

  function mostrarPregunta(index) {
    if (index >= preguntas.length) {
      alert(`🎉 Nivel completado con ${aciertos} aciertos de ${cantidad}`);
      
      if (nivelActual < 3) {
        // Subir nivel del juego
        subirNivelJuego(nombreJuego);
        
        // Solo sumar puntos si no ha completado todos los niveles antes
        if (!yaCompletoTodos) {
          usuario.puntos += aciertos;
          document.getElementById("puntos").textContent = usuario.puntos;
          actualizarUsuarioEnFirebase();
        }
        
        iniciarVerdaderoFalso();
      } else {
        // Marcar que ya completó todos los niveles
        nivelesJuegos[nombreJuego + "_completado"] = true;
        
        // Reiniciar nivel del juego
        actualizarNivelJuego(nombreJuego, 1);
        
        // Solo sumar puntos si es la primera vez que completa todos los niveles
        if (!yaCompletoTodos) {
          usuario.puntos += aciertos;
          document.getElementById("puntos").textContent = usuario.puntos;
          actualizarUsuarioEnFirebase();
        }
        
        mostrarFelicitacion();
        iniciarVerdaderoFalso(); // Reiniciar desde nivel 1
      }
      return;
    }

    cont.innerHTML = "";
    const p = preguntas[index];

    const tarjeta = document.createElement("div");
    tarjeta.className = "planta";
    tarjeta.innerHTML = `<p><strong>${p.texto}</strong></p>`;
    cont.appendChild(tarjeta);

    const btnV = document.createElement("button");
    btnV.textContent = "✅ Verdadero";
    btnV.onclick = () => {
      if (p.correcta) {
        reproducirSonido("win");
        aciertos++;
      } else {
        reproducirSonido("lose");
        alert("❌ Incorrecto");
      }
      mostrarPregunta(index + 1);
    };

    const btnF = document.createElement("button");
    btnF.textContent = "❌ Falso";
    btnF.onclick = () => {
      if (!p.correcta) {
        reproducirSonido("win");
        aciertos++;
      } else {
        reproducirSonido("lose");
        alert("❌ Incorrecto");
      }
      mostrarPregunta(index + 1);
    };

    cont.appendChild(btnV);
    cont.appendChild(btnF);
  }

  mostrarPregunta(0);
}
``



// Ejecutar al cargar
window.addEventListener('DOMContentLoaded', verificarSesionActiva);
