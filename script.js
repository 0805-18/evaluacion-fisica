// Selecciona todas las pestañas y todos los contenidos
const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-content');

// Función para actualizar la pestaña activa
function activateTab(tab) {
  // Remueve la clase 'active' y atributos aria-selected
  tabs.forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
    t.setAttribute('tabindex', '-1');
  });
  contents.forEach(c => c.classList.remove('active'));

  // Activa la pestaña clicada y su contenido correspondiente
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  tab.setAttribute('tabindex', '0');

  const targetId = tab.getAttribute('data-tab');
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add('active');
    targetContent.focus();
  }
}

// Escucha clics en cada pestaña
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activateTab(tab);
  });

  tab.addEventListener('keydown', e => {
    const currentIndex = Array.from(tabs).indexOf(e.target);
    let newIndex = null;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = (currentIndex + 1) % tabs.length;
        tabs[newIndex].focus();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        tabs[newIndex].focus();
        break;
      case 'Home':
        tabs[0].focus();
        break;
      case 'End':
        tabs[tabs.length - 1].focus();
        break;
      case 'Enter':
      case 'Space':
        e.preventDefault();
        activateTab(e.target);
        break;
    }
  });
});

// Foco inicial para contenido activo
window.addEventListener('load', () => {
  const activeContent = document.querySelector('.tab-content.active');
  if (activeContent) activeContent.setAttribute('tabindex', '0');
});
