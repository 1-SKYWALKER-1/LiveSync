// Функция для переключения сайдбара
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  const hamburger = document.querySelector('.hamburger');
  const buttons = document.querySelectorAll('.sidebar ul li button');

  sidebar.classList.toggle('open');
  content.classList.toggle('shifted');

  if (sidebar.classList.contains('open')) {
    hamburger.textContent = '✕';
    hamburger.style.transform = 'rotate(180deg)';
    animateButtons(buttons, 'in');
  } else {
    hamburger.textContent = '☰';
    hamburger.style.transform = 'rotate(0deg)';
    animateButtons(buttons, 'out');
  }
}

// Анимация кнопок сайдбара
function animateButtons(buttons, direction) {
  if (buttons.length === 0) return; // Проверка на существование кнопок

  buttons.forEach((button, index) => {
    if (direction === 'in') {
      button.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      button.style.opacity = '0';
      button.style.transform = 'translateX(-20px)';

      setTimeout(() => {
        button.style.opacity = '1';
        button.style.transform = 'translateX(0)';
      }, index * 100);
    } else {
      button.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      button.style.opacity = '0';
      button.style.transform = 'translateX(-20px)';
    }
  });
}

// Обработчик для активной кнопки в меню
document.querySelectorAll('.sidebar ul li button').forEach(button => {
  button.addEventListener('click', function () {
    document.querySelectorAll('.sidebar ul li button').forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});
