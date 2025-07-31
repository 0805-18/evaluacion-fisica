const ejercicios = {
  ninos: {
    composicion: [
      "Evaluación del índice de masa corporal (IMC)",
      "Medición de pliegues cutáneos",
      "Control de circunferencia de cintura"
    ],
    flexibilidad: [
      "Estiramiento de piernas y brazos",
      "Ejercicios de movilidad articular",
      "Estiramiento de espalda"
    ],
    fuerza: [
      "Flexiones modificadas",
      "Sentadillas sin peso",
      "Ejercicios con balón medicinal ligero"
    ],
    resistencia_muscular: [
      "Saltos suaves",
      "Circuitos de ejercicios con peso corporal",
      "Ejercicios de equilibrio"
    ],
    resistencia_cardiorrespiratoria: [
      "Juegos activos",
      "Caminatas rápidas",
      "Carreras suaves"
    ]
  },
  adolecentes: {
    composicion: [
      "Evaluación de IMC",
      "Medición de pliegues cutáneos",
      "Análisis de bioimpedancia",
      "Control de circunferencia de cintura"
    ],
    flexibilidad: [
      "Estiramiento de isquiotibiales",
      "Estiramiento de cuádriceps",
      "Estiramiento de espalda baja",
      "Estiramiento de hombros"
    ],
    fuerza: [
      "Flexiones modificadas",
      "Sentadillas sin peso",
      "Levantamiento de pesas ligeras",
      "Ejercicios con banda elástica"
    ],
    resistencia_muscular: [
      "Plancha abdominal",
      "Sentadillas sin peso",
      "Puente de glúteos",
      "Ejercicios de equilibrio"
    ],
    resistencia_cardiorrespiratoria: [
      "Carrera suave",
      "Saltos de tijera",
      "Juegos activos",
      "Caminatas prolongadas"
    ]
  },
  adultos: {
    composicion: [
      "Evaluación de IMC",
      "Medición de pliegues cutáneos",
      "Análisis de bioimpedancia",
      "Control de circunferencia de cintura"
    ],
    flexibilidad: [
      "Estiramiento de isquiotibiales",
      "Estiramiento de cuádriceps",
      "Estiramiento de espalda baja",
      "Estiramiento de hombros"
    ],
    fuerza: [
      "Press de banca",
      "Sentadillas con peso",
      "Remo con barra",
      "Ejercicios con pesas libres"
    ],
    resistencia_muscular: [
      "Circuitos de alta repetición",
      "Ejercicios con peso corporal",
      "Entrenamiento en intervalos",
      "Saltos pliométricos"
    ],
    resistencia_cardiorrespiratoria: [
      "Correr o trotar",
      "Ciclismo",
      "Natación",
      "Entrenamiento en circuito"
    ]
  },
  adultos_mayores: {
    composicion: [
      "Evaluación de IMC",
      "Medición de pliegues cutáneos",
      "Control de circunferencia de cintura"
    ],
    flexibilidad: [
      "Estiramientos suaves de cuerpo completo",
      "Movilidad articular lenta",
      "Yoga o tai chi adaptado"
    ],
    fuerza: [
      "Ejercicios con bandas elásticas",
      "Sentadillas asistidas",
      "Levantamiento de pesas ligeras"
    ],
    resistencia_muscular: [
      "Caminar con pausas",
      "Ejercicios en silla",
      "Entrenamientos de bajo impacto"
    ],
    resistencia_cardiorrespiratoria: [
      "Caminatas regulares",
      "Natación suave",
      "Ejercicios aeróbicos de bajo impacto"
    ]
  }
};

function mostrarEjercicios(edad, categoria) {
  const lista = ejercicios[edad][categoria];
  const resultado = document.getElementById('resultado');
  if (!lista) {
    resultado.innerHTML = "<p>No hay ejercicios disponibles.</p>";
    return;
  }
  const nombresCategorias = {
    composicion: "Composición Corporal",
    flexibilidad: "Flexibilidad",
    fuerza: "Fuerza Muscular",
    resistencia_muscular: "Resistencia Muscular",
    resistencia_cardiorrespiratoria: "Resistencia Cardiorrespiratoria"
  };
  const nombresEdades = {
    ninos: "Niños de 10 a 11 Años",
    adolecentes: "Adolescentes de 12 a 17 Años",
    adultos: "Adultos, 18 a 64 Años",
    adultos_mayores: "Adultos Mayores 65 + Años"
  };

  let html = `<h2>${nombresCategorias[categoria]} - ${nombresEdades[edad]}</h2><ul>`;
  lista.forEach(ejercicio => {
    html += `<li>${ejercicio}</li>`;
  });
  html += "</ul>";
  resultado.innerHTML = html;
}
