# Combat Frogs — сайт (Neon v5)

Этот репозиторий готов для деплоя на Cloudflare Pages (через GitHub).

## Структура
- `index.html` — главная страница
- `styles/main.css` — стили
- `styles/main.js` — скрипты (аккордеон, лайтбокс, плавный скролл, год в футере)
- `assets/` — логотипы, фавиконки, OG-картинка
  - `logo-original.png` — твой логотип (замени на свой исходник/SVG)
  - `logo-gear-only.svg` — отдельная шестерня (крутится под логотипом)
  - `favicon.(svg|png)`, `apple-touch-icon.png`, `og-cover.jpg`
- `gallery/1.webp … 8.webp` — превью работ
- `404.html`, `robots.txt`, `sitemap.xml`

## Как обновлять
1. Меняешь файл(ы) → в GitHub Desktop **Commit** → **Push**.
2. Cloudflare Pages сам пересоберёт сайт.

## Настройка логотипа
- Замени `assets/logo-original.png` на свой исходник (лучше `logo-original.svg`).  
- Если хочешь анимацию только шестерни — оставь/замени `assets/logo-gear-only.svg`. В `index.html` она уже подключена и крутится (класс `.spin`). Чтобы остановить — убери класс `.spin` у тега `<img class="gear">`.

## Полезно
- Метатеги для Telegram/Twitter уже добавлены. Заменить картинку превью → `assets/og-cover.jpg`.
- 404/robots/sitemap — настроены.
