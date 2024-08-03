# English Excellence - One-Page Website
The final version of the project is deployed on GitHub Pages. You can view the live site https://erpokk.github.io/msc-5-gp-3/

## Project Overview

This project, English Excellence, is a one-page website developed as part of the "HTML and CSS Fundamentals for User Interface Design" course. It showcases an English language course and aims to provide an engaging and informative user experience.

## Key Features

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Файли і папки

- Responsive Design: The website is fully responsive, with breakpoints for mobile devices, tablets, and desktops, ensuring a seamless user experience across all screen sizes.
- Semantic HTML: The HTML structure is semantic and follows best practices, making the content accessible and improving SEO.
- Optimized Images: All images are optimized for retina displays and stored in the src/images directory. The loading of images is optimized to enhance page performance.
- Modern Normalize: The project uses modern-normalize to ensure consistent styling across different browsers.
- Fonts: Custom fonts are integrated to match the design specifications.
- Favicons: Favicons are added to improve the website's branding and recognition.
- Interactive Elements: JavaScript is used to add interactive elements, enhancing user engagement.

## Tools and Technologies

- **Project Bundler**: Vite
- **Version Control**: Git
- **Task Management**: Trello

## Team Experience
- **Team Collaboration**: Effective team collaboration using Git, including branching, merging, and resolving conflicts.
- **Project Planning and Task Assignment**: Experience in planning tasks and setting goals using Trello.
- **Leadership Experience**: Opportunity to gain experience as a Team Lead and Scrum Master.

## Development Process

1. **Semantic HTML Structure**: Ensured all HTML files are semantically correct and validated using W3C Validator.
2. **CSS Best Practices**: Implemented modern CSS practices, including the use of partials stored in src/css and imported into src/css/styles.css.
3. **JavaScript for Interactivity**: Added JavaScript to create interactive elements that enhance user engagement.
4. **Image Optimization**: Optimized images for faster loading times and better performance.
5. **Accessibility**: Ensured the site is accessible to all users, including those using assistive technologies.
6. **Performance**: Achieved high performance scores on PageSpeed Insights, with each metric scoring above **90%**.
7. **Error-Free Console**: Ensured the developer console is free of errors.

## Deployment



1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.
