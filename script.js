const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Eliminar 'active' de todas las pestañas
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Activar pestaña y contenido actual
    tab.classList.add("active");
    const content = document.getElementById(tab.dataset.tab);
    content.classList.add("active");
  });
});
