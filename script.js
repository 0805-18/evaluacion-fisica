// Selecciona todas las pestañas y los contenidos
const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-content");

// Función para manejar el cambio de pestañas
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Quitar clases activas de todas las pestañas y contenidos
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Activar la pestaña y el contenido correspondiente
    tab.classList.add("active");
    contents[index].classList.add("active");
  });
});
