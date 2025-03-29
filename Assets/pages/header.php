<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="/Assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
</head>
<body>
<!-- Кнопка гамбургер-меню -->
<button class="hamburger" onclick="toggleSidebar()">☰</button>

<!-- Регистрация/Авторизация -->
<div class="auth-menu">
    <a href="/Assets/pages/authorization.php" class="auth-button">
        <span class="auth-icon">👤</span>
    </a>
</div>

<!-- Сайдбар -->
<div class="content">
    <div class="sidebar" id="sidebar">
        <div class="logo">
        <h2>LiveSync</h2>
        </div>
        <ul>
        <li><button onclick="goToCatalog()"><span class="icon">🏠</span> Каталог</button></li>
        <li><button onclick="goToCooperation()"><span class="icon">🤝</span> Сотрудничество</button></li>
        <li><button onclick="goToVacancies()"><span class="icon">💼</span> Вакансии</button></li>
        <li><button onclick="alert('Связаться с нами!')"><span class="icon">📞</span> Связаться с нами!</button></li>
        </ul>
    </div>
</div>