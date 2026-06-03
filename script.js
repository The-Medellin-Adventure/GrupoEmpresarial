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
   AMPLIAR FOTOS VEHÍCULOS
========================= */

document.addEventListener("click", function(e){

  if(e.target.closest(".vehiculos-carousel img")){

    document.getElementById("fotoGrande").src = e.target.src;

    document.getElementById("lightbox").style.display = "flex";

  }


  if(e.target.id === "lightbox"){

    document.getElementById("lightbox").style.display = "none";

  }

});
