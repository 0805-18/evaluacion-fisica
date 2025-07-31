// Selecciona todas las pestañas y todos los contenidos
const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-content');

function activateTab(tab) {
  // Remueve la clase 'active' de todas las pestañas y contenidos
  tabs.forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
    t.setAttribute('tabindex', '-1');
  });
  contents.forEach(c => {
    c.classList.remove('active');
    c.setAttribute('tabindex', '-1');
  });

  // Activa la pestaña clicada y su contenido correspondiente
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  tab.setAttribute('tabindex', '0');
  tab.focus();

  const targetId = tab.getAttribute('data-tab');
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add('active');
    targetContent.setAttribute('tabindex', '0');
  }
}

// Escucha clics y teclas para accesibilidad
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
      case ' ':
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
