const components = {
  // igual que antes, no cambia nada
};

const ageLabels = {
  ninos: 'Niños (0–11)',
  adolescentes: 'Adolescentes (12–17)',
  adultos: 'Adultos (18–64)',
  mayores: 'Adultos Mayores (65+)'
};

function toggleSubmenu(elem) {
  // Para que al hacer clic se active/desactive la pestaña y se despliegue el submenu
  document.querySelectorAll('.tab-item').forEach(tab => {
    if (tab !== elem) {
      tab.classList.remove('active');
    }
  });
  elem.classList.toggle('active');
}

function showExercises(compId, ageKey, evt) {
  evt.stopPropagation();
  const comp = components[compId];
  if (!comp || !comp.exercises[ageKey]) {
    document.getElementById('content-area').innerHTML = '<p>No hay ejercicios disponibles.</p>';
    return;
  }
  const listItems = comp.exercises[ageKey]
    .map(e => `<li>${e} – 4 series</li>`)
    .join('');
  document.getElementById('content-area').innerHTML = `
    <h2>${comp.name}</h2>
    <h3>${ageLabels[ageKey]}</h3>
    <ul>${listItems}</ul>
  `;
}
