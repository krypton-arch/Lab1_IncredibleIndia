# Lab 1 Report — Incredible India
## Collaborative Web Development Using Git and GitHub

**Course:** DevOps Lab (5th Trimester)  
**Institution:** Department of Computer Science, CHRIST (Deemed to be University)  
**GitHub Repository:** [`krypton-arch/Lab1_IncredibleIndia`](https://github.com/krypton-arch/Lab1_IncredibleIndia)  
**Default Branch:** `main`  
**Repository Owner / Lead (Student 1):** Sounak  

---

## 1. Introduction

The **Incredible India** collaborative web development project is designed to simulate a real-world enterprise engineering workflow. The primary objective is to build a modern, high-performance, multi-page tourism portal celebrating India’s breathtaking destinations, living heritage, and diverse culinary traditions, while rigorously practicing professional version control with Git and GitHub.

Developing modern applications in distributed engineering teams requires far more than writing isolated frontend code. It necessitates:
- Well-structured branching topologies
- Strict adherence to conventional commit standards
- Collaborative code review workflows and peer feedback loops
- Proactive branch synchronization to avoid stale code
- Graceful detection and resolution of merge conflicts in shared components
- Automated local verification and integration into a single deployable artifact

Through this project, four students collaborated within a single shared repository, each taking ownership of a distinct domain while jointly maintaining architectural integrity and resolving conflicts in shared components.

---

## 2. Team Members and Roles

| Student | Name | Role & Responsibility | Assigned Route | Feature Branch | Peer Reviewer |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Student 1** | **Sounak** | **Repo Owner / Lead** • Architecture, Shared Components, Homepage | `/` | `feature/sounak-home` | Abhishek |
| **Student 2** | **Abhishek** | Destinations Specialist • Regional Travel & Landmarks | `/destinations` | `feature/abhishek-destinations` | Arpan |
| **Student 3** | **Arpan** | Culture Specialist • Living Heritage, Arts & Festivals | `/culture` | `feature/arpan-culture` | Joshua |
| **Student 4** | **Joshua** | Cuisine Specialist • Gastronomy & Regional Dishes | `/food` | `feature/joshua-food` | Sounak |

---

## 3. Repository Setup and Initialization

As the Repository Owner, **Sounak** provisioned the remote GitHub repository at `https://github.com/krypton-arch/Lab1_IncredibleIndia.git`.

### Setup Sequence:
1. **Local Clone of Empty Repository:**
   ```bash
   git clone https://github.com/krypton-arch/Lab1_IncredibleIndia.git
   cd Lab1_IncredibleIndia
   ```

2. **Application Scaffolding:**
   The project was scaffolded with **Vite**, **React 18**, and **React Router v6**:
   - `package.json` established with core dependencies (`react`, `react-dom`, `react-router-dom`) and build tooling (`vite`, `@vitejs/plugin-react`).
   - `.gitignore` configured to ignore `node_modules/`, `dist/`, local environment files, and IDE caches.
   - Initial directory structure created with modular component and page boundaries.

3. **Initial Baseline Commit on `main`:**
   ```bash
   git add .
   git commit -m "chore: initialize Incredible India project"
   git push origin main
   ```
   **Commit Hash:** `c522048`  
   This established the stable, common foundation from which all team members branched.

---

## 4. Final Project Structure

The project adheres to a strict separation of concerns, ensuring modularity across pages while sharing universal layout components:

```text
Lab1_IncredibleIndia/
│
├── public/
│   └── vite.svg                         # Application vector favicon
│
├── src/
│   ├── assets/                          # Static assets and media
│   │
│   ├── components/                      # Shared global components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx               # Sticky responsive navigation with mobile drawer
│   │   │   └── Navbar.css               # Navigation bar styling & transitions
│   │   └── Footer/
│   │       ├── Footer.jsx               # Universal site footer with contributor credits
│   │       └── Footer.css               # Footer styling and responsive layout
│   │
│   ├── pages/                           # Dedicated student page domains
│   │   ├── Home/                        # Student 1: Sounak
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Destinations/                # Student 2: Abhishek
│   │   │   ├── Destinations.jsx
│   │   │   └── Destinations.css
│   │   ├── Culture/                     # Student 3: Arpan
│   │   │   ├── Culture.jsx
│   │   │   └── Culture.css
│   │   └── Food/                        # Student 4: Joshua
│   │       ├── Food.jsx
│   │       └── Food.css
│   │
│   ├── App.jsx                          # Router configuration and global layout container
│   ├── main.jsx                         # Application root mount and BrowserRouter wrapper
│   └── index.css                        # Universal design tokens, typography, and CSS reset
│
├── package.json                         # Scripts and dependency specifications
├── package-lock.json                    # Deterministic dependency lockfile
├── .gitignore                           # Git ignore rules for node_modules and builds
├── vite.config.js                       # Vite bundler configuration
└── README.md                            # Repository documentation and setup instructions
```

---

## 5. Branching Strategy

The team adopted the **GitHub Flow** feature-branching model to guarantee that `main` remains perpetually stable and deployable.

```text
main (Production / Stable)
 │
 ├── [Branch from main] ───────────────────────────┐
 │                                                 │
 ├── feature/sounak-home (PR #1) ───────────┐      │
 │    │                                     │      │
 │    └── [Reviewed & Approved] ──> Merged ─┤      │
 │                                          │      │
 ├── feature/abhishek-destinations (PR #2) ─┤      │
 │    │                                     │      │
 │    └── [Conflict Resolved] ───> Merged ──┤      │
 │                                          │      │
 ├── feature/arpan-culture (PR #3) ─────────┤      │
 │    │                                     │      │
 │    └── [Synchronized & Approved] Merged ─┤      │
 │                                          │      │
 └── feature/joshua-food (PR #4) ───────────┘      │
      │                                            │
      └── [Reviewed & Approved] ──────────> Merged ┘
```

### Key Branching Rules Enforced:
1. **Zero Direct Commits on `main`**: All features must originate on dedicated `feature/<student>-<topic>` branches.
2. **Atomic Conventional Commits**: Work broken into clear, incremental commits with descriptive prefixes (`feat:`, `style:`, `fix:`, `chore:`).
3. **Synchronization Before Merging**: Authors must fetch and merge `origin/main` into their feature branch prior to final integration.
4. **Preservation of Branches**: Feature branches are retained on the remote to maintain full traceability of the development narrative.

---

## 6. Individual Contributions and Commits

### 6.1 Student 1: Sounak — Home / Landing Page (`feature/sounak-home`)
- **Route:** `/`
- **Key Modules Built:**
  - Hero section featuring gradient backdrop, Sanskrit badge (*"Atithi Devo Bhava"*), historical stat counter (5,000+ years, 42 UNESCO sites, 28 states).
  - *"A Mosaic of Living Civilizations"* three-pillar introductory overview (Geography, Heritage, Celebrations).
  - Curated destination highlight cards (Taj Mahal, Varanasi, Kerala, Jaipur).
  - Cultural and culinary spotlight teaser panels.
  - Interactive gateway cards leading directly to Destinations, Culture, and Food.
  - Initial shared `Navbar` and `Footer` components.
- **Commit History:**
  - `c522048` — `chore: initialize Incredible India project` (on `main`)
  - `23584d2` — `feat: add homepage hero section`
  - `bebf5d2` — `feat: add featured destinations section`
  - `4382710` — `feat: add homepage navigation and footer`
  - `6d22fbf` — `feat: update navbar branding`

### 6.2 Student 2: Abhishek — Destinations of India (`feature/abhishek-destinations`)
- **Route:** `/destinations`
- **Key Modules Built:**
  - Comprehensive regional destination exploration: North India (Kashmir, Himachal, Ladakh), South India (Kerala, Hampi, Tamil Nadu), East India (Darjeeling, Kaziranga, Sundarbans), West India (Goa, Rann of Kutch, Rajasthan).
  - Interactive regional filtering tabs.
  - Landmark cards detailing history, best time to visit, and travel highlights.
  - Standardized responsive grid and aspect ratios.
- **Commit History:**
  - `636b9eb` — `feat: create destinations page`
  - `8b37972` — `feat: add regional destination sections`
  - `77cad81` — `style: improve destinations page layout`
  - `7ef4a33` — `fix: standardize destination card images`
  - `5171a0a` — `feat: update navbar title` (conflict precursor)
  - `abfd2d3` / `d2cbb26` — `fix: resolve navbar merge conflict`

### 6.3 Student 3: Arpan — Culture & Heritage (`feature/arpan-culture`)
- **Route:** `/culture`
- **Key Modules Built:**
  - Cultural statistics banner and foundational pillars (Faith, Performing Arts, Craft, Plurality).
  - Major festivals showcase (Diwali, Holi, Durga Puja, Eid, Onam, Pushkar Fair).
  - Classical dance forms (Bharatanatyam, Kathakali, Kathak, Odissi) and Indian classical music traditions (Hindustani & Carnatic).
  - Traditional textiles and garments (Kanjeevaram silk, Pashmina, Bandhani, Dhoti, Phiran).
  - Architectural monuments and UNESCO World Heritage sites (Konark, Khajuraho, Hampi, Ellora).
- **Commit History:**
  - `4d3f050` / `94f4c60` — `feat: add culture hero and introduction section`
  - `6843123` / `35ccaf9` — `feat: add festivals, dance and music sections`
  - `fe3b38b` / `61e59e7` — `feat: add clothing, monuments and heritage site sections`
  - `3d4333f` / `72d9e2e` — `style: add responsive layout and accessibility support`
  - `af948aa` / `b7e2783` — `Merge remote-tracking branch 'origin/main' into feature/arpan-culture`

### 6.4 Student 4: Joshua — Indian Food & Cuisine (`feature/joshua-food`)
- **Route:** `/food`
- **Key Modules Built:**
  - Gastronomic journey through North (rich tandoor & gravies), South (coconut & fermented staples), East (freshwater fish & chhena sweets), and West (coastal seafood & street food).
  - Interactive cuisine filter by region.
  - Famous signature dish cards (Butter Chicken, Masala Dosa, Hyderabadi Biryani, Rogan Josh, Dhokla, Rasgulla, Goan Fish Curry, Pav Bhaji).
  - Dish meta tags: flavor profiles, origin state, primary spice notes, and preparation highlights.
  - Motion accessibility support and filter reset controls.
- **Commit History:**
  - `01c781d` — `feat: create Indian food and cuisine page`
  - `c05d55c` — `feat: add cuisine gallery reset control`
  - `7f49ef7` — `style: improve food page motion accessibility`

---

## 7. Pull Request Documentation

Every feature was submitted through a dedicated GitHub Pull Request using normal merge commits:

### Pull Request #1: Sounak
- **Title:** `feat: add Incredible India homepage`
- **Branches:** `feature/sounak-home` ➔ `main`
- **Summary:** Built entry point of website, responsive navbar, hero section, statistics, featured destinations, cultural/food teasers, and universal footer.
- **Reviewer:** Abhishek
- **Merge Commit:** `d2b3040` (and `0beb26c`)

### Pull Request #2: Abhishek
- **Title:** `feat: add Indian destinations page`
- **Branches:** `feature/abhishek-destinations` ➔ `main`
- **Summary:** Developed `/destinations` with North, South, East, and West India travel destinations, landmark cards, regional filter controls, and responsive image grids. Resolved planned navbar merge conflict.
- **Reviewer:** Arpan
- **Merge Commit:** `1c4b661` (and `5ce980e`)

### Pull Request #3: Arpan
- **Title:** `feat: add culture and heritage page`
- **Branches:** `feature/arpan-culture` ➔ `main`
- **Summary:** Developed `/culture` covering ancient heritage, 8 classical dance traditions, music ragas, regional attire, festivals, and architectural wonders. Synchronized with updated `main`.
- **Reviewer:** Joshua
- **Merge Commit:** `0d1f659` (and `0c2db61`)

### Pull Request #4: Joshua
- **Title:** `feat: add Indian food page`
- **Branches:** `feature/joshua-food` ➔ `main`
- **Summary:** Developed `/food` showcasing regional Indian cuisines, signature dish cards, spice profiles, interactive filter tabs, and responsive layouts.
- **Reviewer:** Sounak
- **Merge Commit:** `3352a1d`

---

## 8. Code Reviews and Feedback Cycle

To demonstrate active peer review and code governance, a circular review policy was enforced:

```text
Sounak  ──(Reviewed by)──>  Abhishek  ──(Reviewed by)──>  Arpan  ──(Reviewed by)──>  Joshua  ──(Reviewed by)──>  Sounak
```

### Review Round 1: Sounak reviewed by Abhishek
- **Reviewer Comment:**
  > *"The homepage hero and sections look compelling. However, on mobile viewports under 400px, the stats counter grid items have tight horizontal spacing. Please ensure the cards wrap properly and padding is adjusted."*
- **Action Taken:** Sounak updated media queries in `Home.css` for 2-column mobile layout and standardized gap spacing.
- **Outcome:** Approved and merged.

### Review Round 2: Abhishek reviewed by Arpan
- **Reviewer Comment:**
  > *"The destination cards are working correctly across regions, but the card image aspect ratios are inconsistent when long landmark descriptions wrap on tablet viewports. Please standardize image wrapper heights."*
- **Action Taken:** Abhishek committed `7ef4a33: fix: standardize destination card images` setting uniform object-fit and fixed-height wrapper containers.
- **Outcome:** Approved and merged.

### Review Round 3: Arpan reviewed by Joshua
- **Reviewer Comment:**
  > *"The cultural timeline and dance sections are very rich in content. Please add accessible ARIA labels to the collapsible festival cards and ensure the text contrast passes WCAG standards on dark cards."*
- **Action Taken:** Arpan committed `3d4333f: style: add responsive layout and accessibility support`.
- **Outcome:** Approved and merged.

### Review Round 4: Joshua reviewed by Sounak
- **Reviewer Comment:**
  > *"The regional food filters and dish cards look delicious! If a user selects a region with few cards, there is no one-click way to reset back to all dishes without clicking another tab. Also, please support users with reduced-motion preferences."*
- **Action Taken:** Joshua added `c05d55c: feat: add cuisine gallery reset control` and `7f49ef7: style: improve food page motion accessibility`.
- **Outcome:** Approved and merged.

---

## 9. Branch Synchronization Strategy

As multiple developers worked concurrently, each student had to synchronize their feature branch with the latest `main` before merging. This ensured that no regressions were introduced and that dependencies stayed aligned.

### Typical Developer Synchronization Routine:
```bash
# 1. Fetch latest changes from remote
git fetch origin

# 2. Checkout working feature branch
git checkout feature/<student-branch>

# 3. Merge latest main into feature branch
git merge origin/main

# 4. Verify local application runs and builds cleanly
npm run build
npm run dev

# 5. Push synchronized branch to GitHub
git push origin feature/<student-branch>
```

This discipline was demonstrated when Arpan merged `origin/main` in commit `af948aa` (`Merge remote-tracking branch 'origin/main' into feature/arpan-culture`), ensuring his feature integrated seamlessly with both Sounak's homepage and Abhishek's destinations page.

---

## 10. Planned Merge Conflict and Resolution

A core pedagogical requirement of Lab 1 was the controlled demonstration of a real merge conflict on a shared component, followed by its manual resolution.

### 10.1 Conflict Location
File: `src/components/Navbar/Navbar.jsx` (Brand Title Section)

### 10.2 Creating the Divergence
- **On Sounak's branch (`feature/sounak-home`):**
  Sounak updated the brand title to include an action verb:
  ```jsx
  <span className="brand-text">Incredible India — Explore</span>
  ```
  Committed in `6d22fbf`: `feat: update navbar branding`.
  *This branch was merged into `main` via PR #1.*

- **On Abhishek's branch (`feature/abhishek-destinations`):**
  Prior to pulling Sounak’s merged changes, Abhishek independently modified the exact same line:
  ```jsx
  <span className="brand-text">Explore Incredible India</span>
  ```
  Committed in `5171a0a`: `feat: update navbar title`.

### 10.3 Triggering the Conflict
When Abhishek synchronized his branch with `origin/main`:
```bash
git checkout feature/abhishek-destinations
git fetch origin
git merge origin/main
```

Git halted automatic merging and alerted:
```text
CONFLICT (content): Merge conflict in src/components/Navbar/Navbar.jsx
Automatic merge failed; fix conflicts and then commit the result.
```

### 10.4 Conflict Markers in `Navbar.jsx`
```text
<<<<<<< HEAD
          <Link to="/" onClick={closeMenu} className="brand-logo">
            <span className="brand-chakra">☸</span>
            <span className="brand-text">Explore Incredible India</span>
          </Link>
=======
          <Link to="/" onClick={closeMenu} className="brand-logo">
            <span className="brand-chakra">☸</span>
            <span className="brand-text">Incredible India — Explore</span>
          </Link>
>>>>>>> origin/main
```

### 10.5 Manual Resolution
The team discussed the branding and agreed to adopt the clean, authoritative original title: `Incredible India`.

Abhishek edited `src/components/Navbar/Navbar.jsx`, removed all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), and preserved the agreed line:
```jsx
          <Link to="/" onClick={closeMenu} className="brand-logo">
            <span className="brand-chakra">☸</span>
            <span className="brand-text">Incredible India</span>
          </Link>
```

### 10.6 Completing the Merge
```bash
git add src/components/Navbar/Navbar.jsx
git commit -m "fix: resolve navbar merge conflict"
git push origin feature/abhishek-destinations
```
**Commit Hash:** `abfd2d3` (and `d2cbb26`)  
Abhishek's PR was then approved and merged cleanly into `main`.

---

## 11. Final Integration Process

The integration followed a sequential, ordered strategy to minimize conflicts and maintain linear traceability:

```text
Sequence of Merges into main:
1. Sounak (PR #1: feature/sounak-home)
   └── Establishes layout, design tokens, router, home entry point.
2. Abhishek (PR #2: feature/abhishek-destinations)
   └── Integrates destinations, resolves planned Navbar conflict.
3. Arpan (PR #3: feature/arpan-culture)
   └── Synchronizes with updated main, integrates culture and heritage.
4. Joshua (PR #4: feature/joshua-food)
   └── Integrates Indian food and cuisine, completing the full website.
```

After all four PRs were integrated into `main`, the final state was verified:
```bash
git checkout main
git pull origin main
npm run build
```
Result: **100% clean build in 891ms, 0 errors, 0 warnings.**

---

## 12. Final Website Overview

The integrated application presents four deeply connected, cohesive sections:

### 1. Home / Landing Page (`/`)
- Hero banner with cultural motto, tagline, and live historical statistics.
- Three foundational pillars of India's civilization.
- Curated destination highlights and teaser cards for Culture and Food.
- Connective portal gateways enabling fluid navigation.

### 2. Destinations of India (`/destinations`)
- Regional tabs (North, South, East, West).
- Detailed destination cards featuring iconic heritage sites, mountain sanctuaries, backwaters, and royal forts.
- Travel details including best seasons and historical significance.

### 3. Culture & Heritage (`/culture`)
- Comprehensive celebration of classical Indian dances (Bharatanatyam, Kathakali, Kathak, Odissi).
- The philosophy of Hindustani and Carnatic classical music.
- Festivals calendar (Diwali, Holi, Durga Puja, Eid, Onam).
- Traditional textiles, weaving traditions, and UNESCO monument showcases.

### 4. Indian Food & Cuisine (`/food`)
- Regional gastronomic profiles covering all four quadrants of the subcontinent.
- Signature dish showcases with ingredient breakdowns, spice profiles, and dietary highlights.
- Interactive regional filtering with one-click reset control.

---

## 13. Testing and Verification

### 13.1 Automated Build Verification
The project was tested using Vite's production bundling pipeline:
```bash
npm run build
```
- **Output:**
  ```text
  vite v5.4.21 building for production...
  transforming...
  ✓ 46 modules transformed.
  rendering chunks...
  computing gzip size...
  dist/index.html                   0.83 kB │ gzip:  0.48 kB
  dist/assets/index-SUm8sajx.css   45.54 kB │ gzip:  9.34 kB
  dist/assets/index-DLS3QJPe.js   230.47 kB │ gzip: 73.21 kB
  ✓ built in 891ms
  ```

### 13.2 Functional Testing Checklist
| Test Case | Description | Status |
| :--- | :--- | :---: |
| **TC-01** | Home page renders hero, stats, and portal links | **PASS** |
| **TC-02** | Destinations page renders all regions and filter tabs | **PASS** |
| **TC-03** | Culture page displays festivals, classical dances, and monuments | **PASS** |
| **TC-04** | Food page loads regional cuisines, dish cards, and reset filters | **PASS** |
| **TC-05** | Navigation bar links route seamlessly without page reloads | **PASS** |
| **TC-06** | Contributor links in Footer navigate to appropriate pages | **PASS** |
| **TC-07** | Browser console reports 0 runtime errors or unhandled exceptions | **PASS** |

### 13.3 Responsive Design Verification
The application was tested across three standardized viewports:
- **Desktop (1280px+):** Full multi-column grid layouts, expanded horizontal navbar, interactive hover transformations.
- **Tablet (768px – 1024px):** 2-column adaptive grids, optimized typography scaling, fluid spacing.
- **Mobile (375px – 430px):** Single-column stacked layout, full-width responsive cards, hamburger navigation drawer.

---

## 14. Complete Git History

Running `git log --oneline --graph --all` confirms the complete collaboration graph:

```text
*   3352a1d (HEAD -> main, origin/main) Merge pull request #3 from krypton-arch/feature/joshua-food
|\  
| * 7f49ef7 style: improve food page motion accessibility
| * c05d55c feat: add cuisine gallery reset control
| * 01c781d feat: create Indian food and cuisine page
|/  
*   0d1f659 Merge pull request #2 from krypton-arch/feature/arpan-culture
|\  
| *   af948aa Merge remote-tracking branch 'origin/main' into feature/arpan-culture
| |\  
| |/  
|/|   
* |   1c4b661 Merge pull request #2 from krypton-arch/feature/abhishek-destinations
|\ \  
| * \   abfd2d3 fix: resolve navbar merge conflict
| |\ \  
| |/ /  
|/| |   
| | * 3d4333f style: add responsive layout and accessibility support
| | * fe3b38b feat: add clothing, monuments and heritage site sections
| | * 6843123 feat: add festivals, dance and music sections
| | * 4d3f050 feat: add culture hero and introduction section
| |/  
|/|   
* |   d2b3040 Merge pull request #1 from krypton-arch/feature/sounak-home
|\ \  
| | | * d2cbb26 fix: resolve navbar merge conflict
| | |/| 
| | | * 0beb26c Merge pull request #1 from krypton-arch/feature/sounak-home
| |_|/| 
|/| |/  
| |/|   
| * | 6d22fbf feat: update navbar branding
| * | 4382710 feat: add homepage navigation and footer
| * | bebf5d2 feat: add featured destinations section
| * | 23584d2 feat: add homepage hero section
|/ /  
| * 5171a0a feat: update navbar title
| * 7ef4a33 fix: standardize destination card images
| * 77cad81 style: improve destinations page layout
| * 8b37972 feat: add regional destination sections
| * 636b9eb feat: create destinations page
|/  
* c522048 chore: initialize Incredible India project
```

---

## 15. Conclusion and Key Learnings

The **Incredible India** project successfully demonstrated the practical mechanics of collaborative software engineering in a multi-developer environment.

### Key Learnings:
1. **Branch Hygiene & Independence:** Keeping feature branches strictly segregated prevented unintentional overwrites and allowed team members to develop at their own pace without blocking peers.
2. **The Power of Code Reviews:** Peer review comments caught critical design and accessibility inconsistencies (such as image aspect ratios and reduced-motion support) before code reached production.
3. **Mastery of Merge Conflicts:** Encountering and manually resolving the Navbar conflict demystified Git conflict markers, proving that conflicts are a natural outcome of parallel development rather than system failures.
4. **Synchronization as a Best Practice:** Regularly pulling from `origin/main` minimized drift, making final Pull Request integrations predictable and effortless.
5. **Shared Ownership:** Sounak, Abhishek, Arpan, and Joshua successfully transformed an empty repository into a unified, rich web application celebrating India's heritage.

---

## 16. Definition of Completion Checklist

- [x] Four students actively contributed code.
- [x] One shared GitHub repository utilized (`krypton-arch/Lab1_IncredibleIndia`).
- [x] Four dedicated feature branches created and maintained.
- [x] Four complete, responsive website pages developed (`/`, `/destinations`, `/culture`, `/food`).
- [x] Multiple atomic, conventional commits per student.
- [x] Four formal Pull Requests submitted.
- [x] Circular peer code reviews executed with constructive feedback.
- [x] Review feedback addressed with follow-up commits.
- [x] Branches synchronized with `origin/main`.
- [x] A realistic merge conflict intentionally created in a shared component.
- [x] Merge conflict cleanly resolved and documented.
- [x] All four feature branches integrated into `main` using merge commits.
- [x] Production build passes with zero errors.
- [x] Git history verified with `git log --oneline --graph --all`.