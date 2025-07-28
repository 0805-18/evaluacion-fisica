const components = {
  composicion: {
    name: 'Composición Corporal',
    exercises: {
      ninos: ['Juegos con pelota', 'Caminatas suaves', 'Saltos', 'Circuitos básicos'],
      adolescentes: ['Burpees', 'Jumping Jacks', 'Mountain Climbers', 'Correr en el lugar'],
      adultos: ['HIIT', 'Entrenamiento funcional', 'Bicicleta', 'Correr'],
      mayores: ['Caminar', 'Levantarse de la silla', 'Ejercicios de equilibrio', 'Estiramientos']
    }
  },
  flexibilidad: {
    name: 'Flexibilidad',
    exercises: {
      ninos: ['Estiramiento de brazos', 'Tocar los pies', 'Flexión lateral', 'Giros de torso'],
      adolescentes: ['Cuádriceps', 'Isquiotibiales', 'Espalda baja', 'Hombros'],
      adultos: ['Yoga', 'Pilates', 'Estiramiento dinámico', 'Estiramiento estático'],
      mayores: ['Estiramientos suaves', 'Cuello', 'Hombros sentado', 'Flexión suave']
    }
  },
  fuerza: {
    name: 'Fuerza Muscular',
    exercises: {
      ninos: ['Sentadillas con apoyo', 'Flexiones suaves', 'Botellas de agua', 'Cajas ligeras'],
      adolescentes: ['Flexiones', 'Sentadillas', 'Abdominales', 'Curl de bíceps'],
      adultos: ['Peso corporal', 'Barras', 'Bandas elásticas', 'Plancha'],
      mayores: ['Pesas livianas', 'Bandas suaves', 'Levantarse de la silla', 'Sentadillas asistidas']
    }
  },
  resistenciaMuscular: {
    name: 'Resistencia Muscular',
    exercises: {
      ninos: ['Circuito de juegos', 'Correr suave', 'Trepar', 'Saltar la cuerda'],
      adolescentes: ['Abdominales', 'Plancha', 'Saltos', 'Flexiones'],
      adultos: ['Trote largo', 'Ciclismo', 'Rondas funcionales', 'Saltar la cuerda'],
      mayores: ['Caminar por tiempo', 'Marcha en el sitio', 'Levantamientos lentos', 'Estiramiento dinámico']
    }
  },
  resistenciaCardio: {
    name: 'Resistencia Cardiorrespiratoria',
    exercises: {
      ninos: ['Carreras cortas', 'Juegos activos', 'Saltar cuerda', 'Escalera'],
      adolescentes: ['Running', 'Bicicleta', 'Deportes', 'Cardio en circuito'],
      adultos: ['Correr', 'Nadar', 'Ciclismo', 'Caminadora'],
      mayores: ['Caminata rápida', 'Ejercicios acuáticos', 'Yoga suave', 'Bicicleta estática']
    }
  }
};

const ageLabels = {
  ninos: 'Niños (0–11 años)',
  adolescentes: 'Adolescentes (12–17 años)',
  adultos: 'Adultos (18–64 años)',
  mayores: 'Adultos Mayores (65+ años)'
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
