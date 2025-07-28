const components = {
  composicion: { name: 'Composición Corporal', exercises: { ninos: ['Ej1','Ej2','Ej3','Ej4'], adolescentes: ['Ej1','Ej2','Ej3','Ej4'], adultos: ['Ej1','Ej2','Ej3','Ej4'], mayores: ['Ej1','Ej2','Ej3','Ej4'] }},
  flexibilidad: { name: 'Flexibilidad', exercises: { ninos: ['E1','E2','E3','E4'], adolescentes: ['E1','E2','E3','E4'], adultos: ['E1','E2','E3','E4'], mayores: ['E1','E2','E3','E4'] }},
  fuerza: { name: 'Fuerza Muscular', exercises: { ninos: ['E1','E2','E3','E4'], adolescentes: ['E1','E2','E3','E4'], adultos: ['E1','E2','E3','E4'], mayores: ['E1','E2','E3','E4'] }},
  resistenciaMuscular: { name: 'Resistencia Muscular', exercises: { ninos: ['E1','E2','E3','E4'], adolescentes: ['E1','E2','E3','E4'], adultos: ['E1','E2','E3','E4'], mayores: ['E1','E2','E3','E4'] }},
  resistenciaCardio: { name: 'Resistencia Cardiorrespiratoria', exercises: { ninos: ['E1','E2','E3','E4'], adolescentes: ['E1','E2','E3','E4'], adultos: ['E1','E2','E3','E4'], mayores: ['E1','E2','E3','E4'] }}
};

const ageLabels = { ninos: 'Niños (0–11 años)', adolescentes: 'Adolescentes (12–17 años)', adultos: 'Adultos (18–64 años)', mayores: 'Adultos Mayores (65+ años)' };

function toggleSubmenu(elem, compId) {
  document.querySelectorAll('.tab-item').forEach(i => {
    if (i === elem) i.classList.toggle('active');
    else i.classList.remove('active');
  });
}

function showExercises(compId, ageKey, evt) {
  evt.stopPropagation();
  const comp = components[compId];
  const items = comp.exercises[ageKey].map(e => `<li>${e} – 4 series</li>`).join('');
  document.getElementById('content-area').innerHTML = `
    <h2>${comp.name}</h2><h3>${ageLabels[ageKey]}</h3><ul>${items}</ul>`;
}
