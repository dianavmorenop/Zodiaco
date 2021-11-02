const openEls = document.querySelectorAll("[data-open]"); //Constante para el botón que abre el modal 
const closeEls = document.querySelectorAll("[data-close]"); //Constante para las opciones que cierran el modal 
const isVisible = "is-visible"; //Constante de visibilidad

for (const el of openEls) { //Función para que al darle click al botón, abra el modal
  el.addEventListener("click", function() { 
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) { //Función para que al darle click al cuadro, cierre el modal
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => { //Función para que al darle click por fuera del modal, lo cierre
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => { //Función para cerrar el modal, presionando ESC 
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
