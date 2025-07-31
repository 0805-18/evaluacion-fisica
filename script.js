// Selecciona todas las pestañas y todos los contenidos
const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-content');

// Escucha clics en cada pestaña
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Quitar la clase 'active' de todos
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Activar el clicado
    tab.classList.add('active');
    const targetId = tab.getAttribute('data-tab');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});
