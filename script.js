const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

tabItems.forEach(item => {
  item.addEventListener('click', () => {
    tabItems.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(item.getAttribute('data-tab')).classList.add('active');
  });
});
