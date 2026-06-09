let tours = [];
let tourActual = 0;

function abrirModal(tipo){

  tours = toursData[tipo];

  tourActual = 0;

  mostrarTour();

  document.getElementById("modal").style.display = "block";
}

function mostrarTour(){

  document.getElementById("titulo-tour").innerText =
    tours[tourActual].titulo;

  document.getElementById("imagen-carrusel").src =
    tours[tourActual].imagen;

  document.getElementById("descripcion").innerHTML =
    tours[tourActual].descripcion;
}

function cambiarTour(direccion){

  tourActual += direccion;

  if(tourActual < 0){
    tourActual = tours.length - 1;
  }

  if(tourActual >= tours.length){
    tourActual = 0;
  }

  mostrarTour();
}

function cerrarModal(){
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){

  const modal = document.getElementById("modal");

  if(event.target === modal){
    cerrarModal();
  }
}
/* =========================
   AMPLIAR FOTO DEL CARRUSEL
========================= */

document.addEventListener("click", function(e){

  const imagenVehiculo = e.target.closest(".vehiculos-carousel img");

  if(imagenVehiculo){
    e.stopPropagation();
    document.getElementById("fotoGrande").src = imagenVehiculo.src;
    document.getElementById("visorFoto").style.display = "flex";
    return;
  }

  if(e.target.id === "visorFoto"){
    cerrarFotoGrande();
  }

});

function cerrarFotoGrande(){
  document.getElementById("visorFoto").style.display = "none";
  document.getElementById("fotoGrande").src = "";
}
/* =========================
   PRESENTACIÓN CORPORATIVA
========================= */
function abrirPresentacionCorporativa(event){
  if(event){ event.preventDefault(); }
  const modalCorporativo = document.getElementById("modal-corporativo");
  if(modalCorporativo){
    modalCorporativo.classList.add("activo");
    modalCorporativo.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function cerrarPresentacionCorporativa(){
  const modalCorporativo = document.getElementById("modal-corporativo");
  if(modalCorporativo){
    modalCorporativo.classList.remove("activo");
    modalCorporativo.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

document.addEventListener("click", function(event){
  const modalCorporativo = document.getElementById("modal-corporativo");
  if(modalCorporativo && event.target === modalCorporativo){
    cerrarPresentacionCorporativa();
  }
});

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    cerrarPresentacionCorporativa();
  }
});

/* =========================
   PRESENTACIONES INDIVIDUALES DE EMPRESAS
========================= */
const empresasIndividuales = {
  guatape: {
    etiqueta: "🌈 Destino especializado",
    logo: "logos/guatape-travel.png",
    titulo: "Guatapé Travel",
    subtitulo: "The Colorful Experience",
    descripcion: "Marca enfocada en recorridos a Guatapé y sus alrededores, conectando a los viajeros con la Piedra del Peñol, la represa, el pueblo de los zócalos, la cultura local y experiencias fotográficas llenas de color.",
    experiencias: ["Guatapé Full Day", "Piedra del Peñol", "Represa", "Pueblo de zócalos", "Fotografía", "Turismo local"],
    diferencial: "Una experiencia diseñada para disfrutar el destino más colorido de Antioquia con operación organizada, visión local y una narrativa turística cercana.",
    whatsapp: "https://wa.me/573102353733?text=Hola%20%F0%9F%8C%88%20quiero%20conocer%20las%20experiencias%20de%20Guatap%C3%A9%20Travel."
  },
  turtle: {
    etiqueta: "🐢 Aventura y naturaleza",
    logo: "logos/turtle-bus.png",
    titulo: "Adventure Turtle Bus",
    subtitulo: "Nature, Adventure & Freedom",
    descripcion: "Línea creada para viajeros que buscan naturaleza, adrenalina, ecoturismo y rutas diferentes por Antioquia. Una marca pensada para salir de la rutina y vivir experiencias al aire libre.",
    experiencias: ["Aventura", "Ecoturismo", "Naturaleza", "Rutas outdoor", "Adrenalina", "Grupos aventureros"],
    diferencial: "Conecta al viajero con paisajes, montañas y experiencias activas, manteniendo una identidad fresca, libre y cercana a la naturaleza.",
    whatsapp: "https://wa.me/573102353733?text=Hola%20%F0%9F%90%A2%20quiero%20conocer%20los%20tours%20de%20Adventure%20Turtle%20Bus."
  },
  trolley: {
    etiqueta: "🚃 Vehículos temáticos",
    logo: "tours/trolley.png",
    titulo: "Trolley & Chivas Tours",
    subtitulo: "Unique Vehicles Experiences",
    descripcion: "Marca especializada en recorridos a bordo de vehículos temáticos como trolley turístico y chivas tradicionales, combinando cultura, música, entretenimiento y experiencias grupales.",
    experiencias: ["Trolley turístico", "Chivas", "Celebraciones", "Eventos privados", "Cultura sobre ruedas", "Experiencias grupales"],
    diferencial: "Convierte el transporte en parte de la experiencia, creando recorridos memorables, festivos y visualmente diferenciales para turistas, familias y empresas.",
    whatsapp: "https://wa.me/573102353733?text=Hola%20%F0%9F%9A%83%20quiero%20informaci%C3%B3n%20sobre%20Trolley%20y%20Chivas%20Tours."
  },
  aeroturex: {
    etiqueta: "🚡 Ciudad y cultura",
    logo: "logos/aeroturex.png",
    titulo: "Aeroturex Medellín",
    subtitulo: "City Experiences & Medellín Tours",
    descripcion: "Marca enfocada en descubrir Medellín desde su historia, transformación, gastronomía, miradores, cultura urbana y experiencias de medio día, día completo o nocturnas.",
    experiencias: ["City tour", "Comuna 13", "Miradores", "Gastronomía", "Tour nocturno", "Cultura local"],
    diferencial: "Presenta Medellín desde una mirada auténtica y completa, integrando transformación social, vida local y experiencias urbanas para visitantes nacionales e internacionales.",
    whatsapp: "https://wa.me/573102353733?text=Hola%20%F0%9F%9A%A1%20quiero%20conocer%20los%20tours%20de%20Aeroturex%20Medell%C3%ADn."
  }
};

function abrirEmpresaIndividual(empresa){
  const data = empresasIndividuales[empresa];
  const modal = document.getElementById("modal-empresa");

  if(!data || !modal){ return; }

  document.getElementById("empresa-modal-logo").src = data.logo;
  document.getElementById("empresa-modal-logo").alt = data.titulo;
  document.getElementById("empresa-modal-etiqueta").innerText = data.etiqueta;
  document.getElementById("empresa-modal-titulo").innerText = data.titulo;
  document.getElementById("empresa-modal-subtitulo").innerText = data.subtitulo;
  document.getElementById("empresa-modal-descripcion").innerText = data.descripcion;
  document.getElementById("empresa-modal-diferencial").innerText = data.diferencial;
  document.getElementById("empresa-modal-whatsapp").href = data.whatsapp;

  document.getElementById("empresa-modal-experiencias").innerHTML = data.experiencias
    .map(item => `<span>✔ ${item}</span>`)
    .join("");

  modal.classList.add("activo");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarEmpresaIndividual(){
  const modal = document.getElementById("modal-empresa");
  if(modal){
    modal.classList.remove("activo");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

/* =========================
   VIDEO CORPORATIVO
========================= */
function abrirVideoCorporativo(event){
  if(event){ event.preventDefault(); }
  const modal = document.getElementById("modal-video-corporativo");
  if(modal){
    modal.classList.add("activo");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function cerrarVideoCorporativo(){
  const modal = document.getElementById("modal-video-corporativo");
  const video = modal ? modal.querySelector("video") : null;
  if(video){ video.pause(); }

  if(modal){
    modal.classList.remove("activo");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

document.addEventListener("click", function(event){
  const modalEmpresa = document.getElementById("modal-empresa");
  const modalVideo = document.getElementById("modal-video-corporativo");

  if(modalEmpresa && event.target === modalEmpresa){
    cerrarEmpresaIndividual();
  }

  if(modalVideo && event.target === modalVideo){
    cerrarVideoCorporativo();
  }
});

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    cerrarEmpresaIndividual();
    cerrarVideoCorporativo();
  }
});
