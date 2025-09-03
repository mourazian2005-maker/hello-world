const http = require('http');

// Создаем HTTP сервер
const server = http.createServer((req, res) => {
  // Устанавливаем правильные заголовки для HTML
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  
  // Отправляем красивую HTML страницу с надписью
  res.end(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Мое приложение на Railway</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-align: center;
            }
            .container {
                background: rgba(0, 0, 0, 0.2);
                padding: 3rem;
                border-radius: 1rem;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
            }
            h1 {
                font-size: 3rem;
                margin: 0;
            }
            p {
                font-size: 1.2rem;
                opacity: 0.9;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Привет, мир! </h1>
            <p>Мое приложение успешно работает на Railway!</p>
        </div>
    </body>
    </html>
  `);
});

// Получаем порт из переменной окружения или используем 3000 по умолчанию
const PORT = process.env.PORT || 3000;

// Запускаем сервер
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Откройте в браузере: http://localhost:${PORT}`);
});