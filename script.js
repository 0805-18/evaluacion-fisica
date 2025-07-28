const components = {
  composicion: {
    name: 'Composición Corporal',
    exercises: {
      ninos: ['Saltos de cuerda', 'Juegos de carrera', 'Ejercicios con balón', 'Mini circuitos de agilidad'],
      adultos: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Carrera en el lugar'],
      mayores: ['Caminata suave', 'Levantamiento de talones', 'Ejercicios de equilibrio', 'Estiramientos suaves']
    }
  },
  flexibilidad: {
    name: 'Flexibilidad',
    exercises: {
      ninos: ['Estiramiento de brazos', 'Piernas', 'Cuello', 'Juegos suaves'],
      adultos: ['Isquiotibiales', 'Cuádriceps', 'Espalda baja', 'Hombros'],
      mayores: ['Cuello suave', 'Brazos sentado', 'Flexión lateral suave', 'Movilidad lenta']
    }
  },
  fuerza: {
    name: 'Fuerza Muscular',
    exercises: {
      ninos: ['Flexiones pared', 'Sentadillas asistidas', 'Botellas de agua', 'Bandas ligeras'],
      adultos: ['Flexiones', 'Sentadillas', 'Press de hombros', 'Curl de bíceps'],
      mayores: ['Peso ligero', 'Sentadillas asistidas', 'Bandas elásticas', 'Elevaciones laterales']
    }
  },
  resistenciaMuscular: {
    name: 'Resistencia Muscular',
    exercises: {
      ninos: ['Abdominales cortos', 'Flexiones modificadas', 'Saltos', 'Circuitos cortos'],
      adultos: ['Plancha', 'Abdominales', 'Flexiones', 'Sentadillas'],
      mayores: ['Marcha en sitio', 'Levantamiento talones', 'Equilibrio', 'Piernas sentado']
    }
  },
  resistenciaCardio: {
    name: 'Resistencia Cardiorrespiratoria',
    exercises: {
      ninos: ['Carrera corta', 'Saltar cuerda', 'Juegos activos', 'Circuitos de velocidad'],
      adultos: ['Trotar', 'Ciclismo', 'Natación', 'Saltar cuerda'],
      mayores: ['Caminata rápida', 'Ejercicios acuáticos', 'Yoga suave', 'Bici estática']
    }
  }
};

const ageLabels = {
  ninos: 'Niños (6–17)',
  adultos: 'Adultos (18–64)',
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
