<?php
  $title = "Авторизация";
  require_once 'header.php';
?>

<div class="auth-page">
  <div class="logo">
    <h2>LiveSync</h2>
  </div>
  <div class="auth-container">
    <h2>Вход / Регистрация</h2>
    <form>
      <div class="form-group">
        <label for="username">Имя пользователя</label>
        <input type="text" id="username" name="username" placeholder="Введите имя" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" name="password" placeholder="Введите пароль" required>
      </div>
      <button type="submit" class="auth-submit">Войти</button>
      <button type="button" class="auth-toggle" onclick="toggleAuthMode()">Создать аккаунт</button>
    </form>
    <a href="index.html" class="back-link">Вернуться на главную</a>
  </div>
</div>

<?php
  require_once 'footer.php';
?>
