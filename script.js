const ejercicios = {
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
  jovenes: {
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
  }
};

function mostrarEjercicios(edad, categoria) {
  const lista = ejercicios[edad][categoria];
  const resultado = document.getElementById('resultado');
  if (!lista) {
    resultado.innerHTML = "No hay ejercicios disponibles.";
    return;
  }
  let html = `<h2>Ejercicios para ${categoria.replace('_', ' ').toUpperCase()} - ${edad.toUpperCase()}</h2><ul>`;
  lista.forEach(ejercicio => {
    html += `<li>${ejercicio}</li>`;
  });
  html += "</ul>";
  resultado.innerHTML = html;
}
