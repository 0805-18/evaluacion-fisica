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
    resultado.innerHTML = "<p>No hay ejercicios disponibles.</p>";
    return;
  }
  // Mapeamos nombres bonitos para mostrar
  const nombresCategorias = {
    composicion: "Composición Corporal",
    flexibilidad: "Flexibilidad",
    fuerza: "Fuerza Muscular",
    resistencia_muscular: "Resistencia Muscular",
    resistencia_cardiorrespiratoria: "Resistencia Cardiorrespiratoria"
  };
  const nombresEdades = {
    adolecentes: "Adolecentes 12 a 17 Años",
    jovenes: "Jóvenes Adultos 18 a 29 Años",
    adultos: "Adultos 30 a 64 Años"
  };

  let html = `<h2>${nombresCategorias[categoria]} - ${nombresEdades[edad]}</h2><ul>`;
  lista.forEach(ejercicio => {
    html += `<li>${ejercicio}</li>`;
  });
  html += "</ul>";
  resultado.innerHTML = html;
}
