# Incredible India — Collaborative Web Development

A collaborative web application presenting the rich diversity, destinations, culture, and cuisine of India.

Developed for **Lab 1 — Collaborative Web Development Using Git and GitHub**.

## Team & Page Assignments

| Student   | Name     | Main Page             | Branch                          | Route           |
| --------- | -------- | --------------------- | ------------------------------- | --------------- |
| Student 1 | Sounak   | Home / Landing Page   | `feature/sounak-home`           | `/`             |
| Student 2 | Abhishek | Destinations of India | `feature/abhishek-destinations` | `/destinations` |
| Student 3 | Arpan    | Culture & Heritage    | `feature/arpan-culture`         | `/culture`      |
| Student 4 | Joshua   | Food & Cuisine        | `feature/joshua-food`           | `/food`         |

## Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Modular CSS3
- **Version Control:** Git & GitHub

## Project Structure

```text
Lab1_IncredibleIndia/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Destinations/
│   │   │   ├── Destinations.jsx
│   │   │   └── Destinations.css
│   │   ├── Culture/
│   │   │   ├── Culture.jsx
│   │   │   └── Culture.css
│   │   └── Food/
│   │       ├── Food.jsx
│   │       └── Food.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/krypton-arch/Lab1_IncredibleIndia.git
   cd Lab1_IncredibleIndia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Collaboration Workflow

1. Always branch from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/<your-name>-<topic>
   ```

2. Keep commits atomic and descriptive with conventional prefix (`feat:`, `style:`, `fix:`, `chore:`).

3. Keep your branch updated with latest `main`:
   ```bash
   git checkout feature/<your-branch>
   git fetch origin
   git merge origin/main
   ```

4. Submit Pull Requests targeting `main` with clear descriptions and await peer review.
