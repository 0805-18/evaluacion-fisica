function mostrarInfoNinos() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <h2>Microciclo para Niños de 10 a 11 Años</h2>
    <p>Aquí tienes un microciclo de 1 semana diseñado para un niño de 10 años, orientado al desarrollo motriz global, con ejercicios lúdicos que estimulan la coordinación, agilidad, fuerza básica y resistencia a través de juegos.</p>
    <hr />
    <h3>Objetivos del microciclo</h3>
    <ul>
      <li>Mejorar coordinación y agilidad.</li>
      <li>Desarrollar fuerza general de manera funcional y segura.</li>
      <li>Fomentar la resistencia aeróbica mediante juegos activos.</li>
      <li>Promover hábitos de actividad física divertida y segura.</li>
    </ul>
    <img src="https://i.imgur.com/Fu24u7v.png" alt="Microciclo Niños 10-11 años" style="max-width:100%; height:auto; margin: 20px 0;" />
    <h3>Recomendaciones</h3>
    <ul>
      <li>Duración de cada sesión: 30-40 minutos.</li>
      <li>Intensidad: Moderada, controlada por el disfrute y sin fatiga excesiva.</li>
      <li>Progresión: Incrementar repeticiones de manera gradual (1-2 cada semana).</li>
      <li>Supervisión: Un adulto debe vigilar y guiar la técnica en cada ejercicio.</li>
      <li>Enfoque lúdico: Convertir los ejercicios en juegos para mantener la motivación.</li>
    </ul>
  `;
}

// Ejemplo base para mostrar ejercicios en las otras pestañas
function mostrarEjercicios(grupoEdad, categoria) {
  const resultado = document.getElementById('resultado');

  // Aquí debes completar con ejercicios reales según el grupoEdad y categoria
  // Te doy un ejemplo sencillo
  const ejerciciosData = {
    adolecentes: {
      composicion: [
        "Ejercicio 1 para Composición Corporal",
        "Ejercicio 2 para Composición Corporal"
      ],
      flexibilidad: [
        "Ejercicio 1 para Flexibilidad",
        "Ejercicio 2 para Flexibilidad"
      ],
      fuerza: [
        "Ejercicio 1 para Fuerza Muscular",
        "Ejercicio 2 para Fuerza Muscular"
      ],
      resistencia_muscular: [
        "Ejercicio 1 para Resistencia Muscular",
        "Ejercicio 2 para Resistencia Muscular"
      ],
      resistencia_cardiorrespiratoria: [
        "Ejercicio 1 para Resistencia Cardiorrespiratoria",
        "Ejercicio 2 para Resistencia Cardiorrespiratoria"
      ]
    },
    adultos: {
      composicion: [
        "Ejercicio 1 para Composición Corporal",
        "Ejercicio 2 para Composición Corporal"
      ],
      flexibilidad: [
        "Ejercicio 1 para Flexibilidad",
        "Ejercicio 2 para Flexibilidad"
      ],
      fuerza: [
        "Ejercicio 1 para Fuerza Muscular",
        "Ejercicio 2 para Fuerza Muscular"
      ],
      resistencia_muscular: [
        "Ejercicio 1 para Resistencia Muscular",
        "Ejercicio 2 para Resistencia Muscular"
      ],
      resistencia_cardiorrespiratoria: [
        "Ejercicio 1 para Resistencia Cardiorrespiratoria",
        "Ejercicio 2 para Resistencia Cardiorrespiratoria"
      ]
    },
    adultos_mayores: {
      composicion: [
        "Ejercicio 1 para Composición Corporal",
        "Ejercicio 2 para Composición Corporal"
      ],
      flexibilidad: [
        "Ejercicio 1 para Flexibilidad",
        "Ejercicio 2 para Flexibilidad"
      ],
      fuerza: [
        "Ejercicio 1 para Fuerza Muscular",
        "Ejercicio 2 para Fuerza Muscular"
      ],
      resistencia_muscular: [
        "Ejercicio 1 para Resistencia Muscular",
        "Ejercicio 2 para Resistencia Muscular"
      ],
      resistencia_cardiorrespiratoria: [
        "Ejercicio 1 para Resistencia Cardiorrespiratoria",
        "Ejercicio 2 para Resistencia Cardiorrespiratoria"
      ]
    }
  };

  const ejercicios = ejerciciosData[grupoEdad]?.[categoria] || ["No hay ejercicios disponibles para esta categoría."];

  resultado.innerHTML = `
    <h2>${capitalize(categoria)} - ${capitalize(grupoEdad)}</h2>
    <ul>
      ${ejercicios.map(ej => `<li>${ej}</li>`).join('')}
    </ul>
  `;
}

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).replace(/_/g, " ");
}
