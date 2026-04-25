# Sana EV Repairing Center

## VS Code mein run karne ke steps:

1. Is folder ko VS Code mein open karo
2. Terminal kholo (Ctrl + `)
3. Ye commands run karo:

```bash
npm install
npm run dev
```

4. Browser mein open karo: http://localhost:5173

## Project Structure

```
SanaEV/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          ← Entry point
    ├── App.jsx           ← Root component
    ├── data/
    │   └── index.js      ← Saara data (customers, services, etc.)
    ├── theme/
    │   └── index.js      ← Dark / Light colors
    ├── icons/
    │   └── Icon.jsx      ← Sab SVG icons
    └── components/
        ├── UI.jsx         ← Section + SectionHeader (shared)
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Products.jsx
        ├── About.jsx
        ├── Customers.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
