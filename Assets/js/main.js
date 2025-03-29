function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');

  sidebar.classList.toggle('open');
  content.classList.toggle('shifted');
}//TIP There's much more in WebStorm to help you be more productive. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/> and search for <b>Learn WebStorm</b> to open our learning hub with more things for you to try.
// Переход на страницу каталога
function goToCatalog() {
  window.location.href = 'catalog.html';
}

// Переход на страницу вакансий
function goToVacancies() {
  window.location.href = 'vacancies.html';
}
// Переход на страницу вакансий
function goToCooperation() {
  window.location.href = 'cooperation.html';
}
// Обработчик для активной кнопки в меню
