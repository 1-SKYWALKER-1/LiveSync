<?php
  $title = "Вакансии";
  require_once 'header.php';
?>

<!-- Контент -->
<div class="content">
  <h1 class="page-title">Вакансии</h1>
  <div class="vacancies-container">
    <!-- Вакансии (один прямоугольник на всю ширину экрана) -->
    <div class="vacancy-card">
      <img src="https://via.placeholder.com/600x300" alt="Вакансия 1">
      <div class="vacancy-info">
        <h3>Вакансия 1</h3>
        <p>Описание вакансии, обязанности и требования...</p>
        <button>Подробнее</button>
      </div>
    </div>

    <div class="vacancy-card">
      <img src="https://via.placeholder.com/600x300" alt="Вакансия 2">
      <div class="vacancy-info">
        <h3>Вакансия 2</h3>
        <p>Описание вакансии, обязанности и требования...</p>
        <button>Подробнее</button>
      </div>
    </div>

    <!-- Добавьте еще вакансии по аналогии -->
  </div>
</div>

<?php
  require_once 'footer.php';
?>