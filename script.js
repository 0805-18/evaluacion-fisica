  const components = {
  composicion: {
    name: 'Composición Corporal',
    exercises: {
      ninos: ['Saltos de cuerda','Juegos de carrera','Ejercicios con balón','Mini circuitos'],
      adultos: ['Burpees','Mountain Climbers','Jumping Jacks','Carrera en el lugar'],
      mayores: ['Caminata suave','Talones arriba','Equilibrio','Estiramientos suaves']
    }
  },
  // Definir para flexibilidad, fuerza, resistencia muscular y cardio
};

const ageLabels = {
  ninos: 'Niños (6‑17)',
  adultos: 'Adultos (18‑64)',
  mayores: 'Mayores (65+)'
};

function toggleSubmenu(elem, compId) {
  document.querySelectorAll('.tab-item').forEach(item => {
    if (item === elem) item.classList.toggle('active');
    else item.classList.remove('active');
  });
}

function showExercises(compId, ageKey, evt) {
  evt.stopPropagation();
  const comp = components[compId];
  const listItems = comp.exercises[ageKey].map(e => `<li>${e} – 4 series</li>`).join('');
  document.getElementById('content-area').innerHTML = `
    <h2>${comp.name}</h2>
    <h3>${ageLabels[ageKey]}</h3>
    <ul>${listItems}</ul>
  `;
}
