function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');

  sidebar.classList.toggle('open');
  content.classList.toggle('shifted');
}//TIP There's much more in WebStorm to help you be more productive. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/> and search for <b>Learn WebStorm</b> to open our learning hub with more things for you to try.


// Переход на страницу каталога
function goToCatalog() {
  window.location.href = '/Assets/pages/catalog.php';
}
// Переход на страницу вакансий
function goToVacancies() {
  window.location.href = '/Assets/pages/vacancies.php';
}
// Переход на страницу сотрудничества
function goToCooperation() {
  window.location.href = '/Assets/pages/coWork.php';
}
function toggleAuthMode() {
  const title = document.querySelector('.auth-container h2');
  const toggleButton = document.querySelector('.auth-toggle');
  if (title.textContent === 'Вход / Регистрация') {
    title.textContent = 'Регистрация';
    toggleButton.textContent = 'Уже есть аккаунт? Войти';
  } else {
    title.textContent = 'Вход / Регистрация';
    toggleButton.textContent = 'Создать аккаунт';
  }
}