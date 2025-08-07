document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-item");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remover la clase active de todas las pestañas
      tabs.forEach(t => t.classList.remove("active"));
      // Agregar clase active a la pestaña clickeada
      tab.classList.add("active");

      // Ocultar todos los contenidos
      contents.forEach(content => content.classList.remove("active"));
      // Mostrar el contenido correspondiente
      const tabId = tab.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
});
