# Sana EV Repairing Center

## steps to run in VS Code

1. Open this Folder in VS code
2. Open Terminal (Ctrl + `)
3. Run these commands

```bash
npm install
npm run dev
```

4. Open this url in Browser http://localhost:5173

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
    │   └── index.js      ← data (customers, services, etc.)
    ├── theme/
    │   └── index.js      ← Dark / Light colors
    ├── icons/
    │   └── Icon.jsx      ← SVG icons
    └── components/
        ├── UI.jsx         ← Section + SectionHeader
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Products.jsx
        ├── About.jsx
        ├── Customers.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
