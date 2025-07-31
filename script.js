// Ejercicios de ejemplo para cada combinación componente + edad
const ejercicios = {
  composicion: {
    ninos: [
      "Ejercicio 1 para Composición Corporal Niños",
      "Ejercicio 2 para Composición Corporal Niños"
    ],
    adultos: [
      "Ejercicio 1 para Composición Corporal Adultos",
      "Ejercicio 2 para Composición Corporal Adultos"
    ],
    mayores: [
      "Ejercicio 1 para Composición Corporal Adultos Mayores",
      "Ejercicio 2 para Composición Corporal Adultos Mayores"
    ]
  },
  flexibilidad: {
    ninos: [
      "Ejercicio 1 para Flexibilidad Niños",
      "Ejercicio 2 para Flexibilidad Niños"
    ],
    adultos: [
      "Ejercicio 1 para Flexibilidad Adultos",
      "Ejercicio 2 para Flexibilidad Adultos"
    ],
    mayores: [
      "Ejercicio 1 para Flexibilidad Adultos Mayores",
      "Ejercicio 2 para Flexibilidad Adultos Mayores"
    ]
  },
  fuerza: {
    ninos: [
      "Ejercicio 1 para Fuerza Muscular Niños",
      "Ejercicio 2 para Fuerza Muscular Niños"
    ],
    adultos: [
      "Ejercicio 1 para Fuerza Muscular Adultos",
      "Ejercicio 2 para Fuerza Muscular Adultos"
    ],
    mayores: [
      "Ejercicio 1 para Fuerza Muscular Adultos Mayores",
      "Ejercicio 2 para Fuerza Muscular Adultos Mayores"
    ]
  },
  resistenciaMuscular: {
    ninos: [
      "Ejercicio 1 para Resistencia Muscular Niños",
      "Ejercicio 2 para Resistencia Muscular Niños"
    ],
    adultos: [
      "Ejercicio 1 para Resistencia Muscular Adultos",
      "Ejercicio 2 para Resistencia Muscular Adultos"
    ],
    mayores: [
      "Ejercicio 1 para Resistencia Muscular Adultos Mayores",
      "Ejercicio 2 para Resistencia Muscular Adultos Mayores"
    ]
  },
  resistenciaCardio: {
    ninos: [
      "Ejercicio 1 para Resistencia Cardiorrespiratoria Niños",
      "Ejercicio 2 para Resistencia Cardiorrespiratoria Niños"
    ],
    adultos: [
      "Ejercicio 1 para Resistencia Cardiorrespiratoria Adultos",
      "Ejercicio 2 para Resistencia Cardiorrespiratoria Adultos"
    ],
    mayores: [
      "Ejercicio 1 para Resistencia Cardiorrespiratoria Adultos Mayores",
      "Ejercicio 2 para Resistencia Cardiorrespiratoria Adultos Mayores"
    ]
  }
};

// Referencia al contenedor donde se mostrarán los ejercicios
const contentArea = document.getElementById("content-area");

// Función para limpiar y mostrar ejercicios según componente y edad
function mostrarEjercicios(componente, edad) {
  const listaEjercicios = ejercicios[componente][edad];

  // Limpiar contenido previo
  contentArea.innerHTML = "";

  // Crear título
  const titulo = document.createElement("h2");
  titulo.textContent = `Ejercicios para ${capitalize(componente)} - ${formatearEdad(edad)}`;
  contentArea.appendChild(titulo);

  // Crear lista de ejercicios
  const ul = document.createElement("ul");
  listaEjercicios.forEach(ejercicio => {
    const li = document.createElement("li");
    li.textContent = ejercicio;
    ul.appendChild(li);
  });
  contentArea.appendChild(ul);
}

// Función para capitalizar la primera letra
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Función para mostrar texto legible de las edades
function formatearEdad(edad) {
  switch (edad) {
    case "ninos":
      return "Niños y Adolescentes (6–17 años)";
    case "adultos":
      return "Adultos (18–65 años)";
    case "mayores":
      return "Adultos Mayores (65+ años)";
    default:
      return "";
  }
}

// Agregar evento a cada item de submenú
const submenuItems = document.querySelectorAll(".submenu li");

submenuItems.forEach(item => {
  item.addEventListener("click", () => {
    const componente = item.getAttribute("data-comp");
    const edad = item.getAttribute("data-age");
    mostrarEjercicios(componente, edad);
  });

  // Para accesibilidad y teclado
  item.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      item.click();
    }
  });
});
