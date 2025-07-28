const components = {
  composicion: {
    name: 'Composición Corporal',
    exercises: {
      ninos: ['Saltos con cuerda', 'Caminata ligera', 'Juegos activos', 'Circuito básico'],
      adolescentes: ['Burpees', 'Abdominales', 'Plancha', 'Sentadillas'],
      adultos: ['Mountain climbers', 'Saltos', 'Running', 'Cardio en circuito'],
      mayores: ['Caminar', 'Levantamiento de talones', 'Ejercicios sentados', 'Marcha suave']
    }
  },
  flexibilidad: {
    name: 'Flexibilidad',
    exercises: {
      ninos: ['Estiramientos de brazos', 'Piernas', 'Juego de yoga', 'Movilidad articular'],
      adolescentes: ['Flexión de tronco', 'Cuádriceps', 'Hombros', 'Isquiotibiales'],
      adultos: ['Espalda baja', 'Cadera', 'Pecho', 'Gemelos'],
      mayores: ['Cuello', 'Brazos', 'Piernas', 'Tronco']
    }
  },
  fuerza: {
    name: 'Fuerza Muscular',
    exercises: {
      ninos: ['Flexiones asistidas', 'Peso corporal', 'Bandas elásticas', 'Sentadillas'],
      adolescentes: ['Flexiones', 'Dominadas asistidas', 'Press de hombro', 'Curl de bíceps'],
      adultos: ['Entrenamiento funcional', 'Máquinas de fuerza', 'Sentadilla con peso', 'Peso muerto'],
      mayores: ['Levantamiento ligero', 'Sentadillas con silla', 'Elevación de brazos', 'Empuje de pared']
    }
  },
  resistenciaMuscular: {
    name: 'Resistencia Muscular',
    exercises: {
      ninos: ['Abdominales', 'Juegos de resistencia', 'Sentadillas dinámicas', 'Circuitos'],
      adolescentes: ['Plancha', 'Repeticiones altas', 'Escaladores', 'Saltos en caja'],
      adultos: ['Series múltiples', 'Bicicleta estática', 'Pesas ligeras', 'Ejercicios funcionales'],
      mayores: ['Levantamientos repetidos', 'Subir escalones', 'Marcha continua', 'Bandas de resistencia']
    }
  },
  resistenciaCardio: {
    name: 'Resistencia Cardiorrespiratoria',
    exercises: {
      ninos: ['Carrera corta', 'Saltos', 'Cuerda', 'Bailes'],
      adolescentes: ['Running', 'Ciclismo', 'Natación', 'Saltar la cuerda'],
      adultos: ['Trotar', 'Clases grupales', 'Spinning', 'Caminatas intensas'],
      mayores: ['Caminar diario', 'Bicicleta estática', 'Ejercicios acuáticos', 'Yoga suave']
    }
  }
};

const ageLabels = {
  ninos: 'Niños (0–11)',
  adolescentes: 'Adolescentes (12–17)',
  adultos: 'Adultos (18–64)',
  mayores: 'Adultos Mayores (65+)'
};

function toggleSubmenu(elem, compId) {
  document.querySelectorAll('.tab-item').forEach(item => {
    if (item !== elem) item.classList.remove('active');
  });
  elem.classList.toggle('active');
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
