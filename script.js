// Selecciona todos los elementos de pestaña
const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-content");

// Función para activar una pestaña
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Elimina la clase activa de todas las pestañas
    tabs.forEach(t => t.classList.remove("active"));
    // Elimina la clase activa de todo el contenido
    contents.forEach(c => c.classList.remove("active"));

    // Agrega la clase activa a la pestaña actual
    tab.classList.add("active");
    // Muestra el contenido correspondiente
    contents[index].classList.add("active");
  });
});
