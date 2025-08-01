document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  function deactivateTabs() {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      deactivateTabs();
      button.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });

  // Activar la primera pestaña al cargar
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
  }
});
