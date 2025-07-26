<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>README – Админ-панель ресторана</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      max-width: 900px;
      margin: 40px auto;
      padding: 0 20px;
      line-height: 1.7;
      color: #333;
    }
    h1, h2 {
      color: #222;
      margin-top: 1.5em;
    }
    code {
      background: #f3f3f3;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.95em;
    }
    pre {
      background: #f3f3f3;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
    }
    ul {
      margin-left: 1.5em;
    }
  </style>
</head>
<body>

  <h1>🍽️ Админ-панель ресторана</h1>

  <p><strong>Фронтенд проекта для управления заказами, продуктами, группами, пользователями и настройками ресторана.</strong></p>

  <h2>⚙️ Технологии</h2>
  <ul>
    <li>⚡️ <strong>Vite + React</strong> (Client-side SPA)</li>
    <li>📦 Redux Toolkit + Redux Persist</li>
    <li>🧩 React Router DOM</li>
    <li>🎨 MUI + кастомные переключатели и темы (включая поддержку тёмной темы)</li>
    <li>🧰 Bootstrap (для сетки и UI-компонентов)</li>
    <li>📡 Поддержка WebSocket (счётчик активных вкладок)</li>
  </ul>

  <h2>📁 Структура</h2>
  <p>Проект организован по модульному принципу. Каждая сущность (Orders, Products и т.д.) содержит собственные компоненты, редьюсеры и стили.</p>

  <h2>🚀 Запуск проекта</h2>
  <pre><code>git clone https://github.com/AlexProkopiev/restaurant-admin-panel.git
cd restaurant-admin
npm install
npm run dev</code></pre>

  <p>После запуска проект будет доступен по адресу: <code>http://localhost:5173</code></p>

  <h2>✅ Реализовано на текущий момент</h2>
  <ul>
    <li><strong>/orders</strong> — маршрут со списком заказов</li>
    <li>Карточки заказов: адаптивные, с фото, статусом, датой, количеством продуктов, суммой (грн + $), кнопками управления</li>
    <li>Accordion-верстка заказов (вариант 2)</li>
    <li>Пагинация и сортировка заказов через TanStack Table</li>
    <li>Модульная архитектура: все компоненты и таблицы разделены</li>
    <li>Общий компонент модалки <code>&lt;UniversalModal&gt;</code> для всех CRUD-операций</li>
    <li>Слайдер отзывов на 3 карточки с точками и кастомными стрелками</li>
    <li>Вёрстка без <code>&lt;div&gt;</code> — используются только семантические теги: <code>&lt;section&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;header&gt;</code> и т.д.</li>
    <li>Поддержка мобильной версии, адаптивная сетка и стили</li>
    <li>Работа с redux в мобильной версии проверена</li>
  </ul>

  <h2>📦 В разработке</h2>
  <ul>
    <li>Система ролей: админ, повар, официант и т.д. с защитой на фронте</li>
    <li>Полноценный CRUD по продуктам, группам и пользователям</li>
    <li>Настройки ресторана и кастомизация тем</li>
    <li>Сокеты для обновления заказов в реальном времени</li>
  </ul>

  <h2>🔌 Бэкенд</h2>
  <p>Бэкенд пишется отдельно на Node.js (Express + MongoDB). Документация по нему будет в <strong>отдельном README</strong>.</p>

  <h2>📎 Контакты</h2>
  <p>Разработчик: Александр Прокопьев</p>

</body>
</html>