const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(index));
  
  tab.addEventListener('keydown', (e) => {
    let newIndex = null;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length;
      e.preventDefault();
    }
    if (newIndex !== null) {
      tabs[newIndex].focus();
      activateTab(newIndex);
    }
  });
});

function activateTab(index) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected);
    tab.setAttribute('tabindex', selected ? '0' : '-1');
    contents[i].classList.toggle('active', selected);
  });
}
