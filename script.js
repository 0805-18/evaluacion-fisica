const components = {
  composicion: {
    name: 'Composición Corporal',
    exercises: {
      ninos: ['Salto con cuerda','Caminata','Juego activo','Circuito básico'],
      adolescentes: ['Burpees','Plancha','Sentadillas','Abdominales'],
      adultos: ['Mountain climbers','Running','Cardio circuito','Saltar'],
      mayores: ['Caminar','Equilibrio','Sentadilla asistida','Estiramientos']
    }
  },
  flexibilidad: {
    name: 'Flexibilidad',
    exercises: {
      ninos: ['Estirar brazos','Leg swings','Torsiones suaves','Juego de yoga'],
      adolescentes: ['Cuádriceps','Isquiotibiales','Hombros','Cadera'],
      adultos: ['Yoga dinámico','Pilates','Estiramiento estático','Respiración'],
      mayores: ['Cuello suave','Brazos sentado','Flexión lateral','Movilidad lenta']
    }
  },
  fuerza: {
    name: 'Fuerza Muscular',
    exercises: {
      ninos: ['Sentadillas con apoyo','Flexiones ligeras','Bandas suaves','Botellas como pesas'],
      adolescentes: ['Flexiones','Press hombros','Curl bíceps','Sentadilla con peso corporal'],
      adultos: ['Sentadilla con carga','Peso muerto','Press banca','Plancha'],
      mayores: ['Pesas livianas','Sentadilla asistida','Elevación lateral','Empuje contra pared']
    }
  },
  resistenciaMuscular: {
    name: 'Resistencia Muscular',
    exercises: {
      ninos: ['Circuito divertido','Abdominales cortos','Saltos','Mini juegos'],
      adolescentes: ['Plancha','Flexiones múltiples','Saltos pliométricos','Burpees’],
      adultos: ['Circuito resistencia','Series largas','Pesas ligeras','Ciclismo continuo'],
      mayores: ['Marcha en altillo','Subir escaleras','Repeticiones lentas','Bandas elásticas']
    }
  },
  resistenciaCardio: {
    name: 'Resistencia Cardiorrespiratoria',
    exercises: {
      ninos: ['Carrera corta','Salto de cuerda','Aeróbico infantil','Ciclo suave'],
      adolescentes: ['Running','Natación','Bicicleta','Saltos en trampolín'],
      adultos: ['Trote','Spinning','Clases grupales','Caminata intensa'],
      mayores: ['Caminar diario','Ejercicios acuáticos','Yoga cardio','Marcha en sitio']
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
  document.querySelectorAll('.tab-item').forEach(i => {
    if (i !== elem) i.classList.remove('active');
  });
  elem.classList.toggle('active');
}

function showExercises(compId, ageKey, evt) {
  evt.stopPropagation();
  if (!components[compId] || !components[compId].exercises[ageKey]) {
    document.getElementById('content-area').innerHTML = '<p>No hay ejercicios disponibles.</p>';
    return;
  }
  const comp = components[compId];
  const listItems = comp.exercises[ageKey].map(e => `<li>${e} – 4 series</li>`).join('');
  document.getElementById('content-area').innerHTML = `
    <h2>${comp.name}</h2>
    <h3>${ageLabels[ageKey]}</h3>
    <ul>${listItems}</ul>
  `;
}
