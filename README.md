# SnapFAQs – Day 10 FAQ Accordion

A clean, modern, and fully responsive **FAQ Accordion Website** built with semantic **HTML5**, **CSS3**, and **vanilla JavaScript**. Developed as the **Day 10 Task** for the **Veda Technology Web Development Internship**.

---

## 1. Project Overview

**SnapFAQs** provides a clear, user-friendly knowledge base answering essential questions about frontend web development, HTML, CSS, JavaScript, DOM manipulation, responsive design, and GitHub Pages deployment. It showcases a single-open interactive accordion pattern with smooth animations, high-contrast red-and-white visual styling, and full keyboard and screen-reader accessibility.

---

## 2. Internship Details

- **Organization:** Veda Technology
- **Track:** Web Development Internship
- **Task:** Day 10 – Interactive FAQ Accordion Website
- **Project Name:** SnapFAQs – Day 10 FAQ Accordion

---

## 3. Project Objectives

- Build a semantic, accessible FAQ structure using HTML5 `<button>` triggers and unique answer panel IDs.
- Design a clean white-and-red user interface (`#FFFFFF`, `#E63946`, `#172033`) that works seamlessly across mobile (320px+), tablet, laptop, and desktop screens.
- Implement single-open accordion behavior in vanilla JavaScript using `classList.toggle()` so opening a new question automatically closes the previously opened answer.
- Synchronize visual states (plus/minus icon morphing and active red accents) with WAI-ARIA attributes (`aria-expanded` and `aria-controls`).

---

## 4. Technologies Used

- **HTML5:** Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), accessible headings, `<button>` controls, and WAI-ARIA attributes.
- **CSS3:** CSS Custom Properties (variables), Flexbox, CSS Grid, smooth `grid-template-rows` accordion transitions, and responsive `@media` queries.
- **Vanilla JavaScript (ES6+):** DOM traversal, event handling (`addEventListener`), `classList.toggle()`, keyboard navigation (`ArrowUp`, `ArrowDown`, `Home`, `End`, `Escape`), category filtering, and live search.

---

## 5. Main Features

1. **Single-Open FAQ Accordion:** Clicking any question smoothly expands its answer while collapsing any previously open panel.
2. **Dynamic Plus / Minus Icon & Active Highlighting:** Active questions highlight in primary red (`#E63946`) and transition their `+` icon into a `−` icon.
3. **Full Accessibility (WAI-ARIA):** Uses native `<button>` elements, `aria-expanded`, `aria-controls`, visible `:focus-visible` outlines, and keyboard arrow navigation.
4. **Live Topic Filter & Search:** Visitors can filter FAQs by category (*HTML & CSS*, *JavaScript & DOM*, *GitHub & Web Ops*) or search keywords in real time.
5. **Responsive Mobile Navigation:** Includes a touch-friendly hamburger menu for mobile viewports and smooth scrolling to page sections.

---

## 6. Project Structure

The project consists of four core files in the root directory:

```text
snapfaqs-day10/
├── index.html   # Complete semantic HTML5 markup and 12 web dev FAQ items
├── style.css    # White-and-red theme variables, responsive grid/flex layouts, and transitions
├── script.js    # Vanilla JS single-open accordion logic, ARIA updates, and mobile menu
└── README.md    # Project documentation, setup, and GitHub Pages deployment guide
```

---

## 7. How to Run the Project Locally

Because SnapFAQs uses pure HTML, CSS, and vanilla JavaScript with zero build dependencies, you can run it immediately on any computer:

1. **Download or clone** the project folder to your computer.
2. Ensure `index.html`, `style.css`, `script.js`, and `README.md` are in the same folder.
3. **Double-click `index.html`** to open it directly in any modern web browser (Google Chrome, Firefox, Microsoft Edge, or Safari).
   - *Optional:* If using VS Code, right-click `index.html` and select **"Open with Live Server"** for automatic reloading while editing.

---

## 8. GitHub Repository Setup Instructions

Follow these steps to upload your project to a new GitHub repository:

```bash
# 1. Open a terminal inside your project folder and initialize Git
git init

# 2. Stage all four project files
git add index.html style.css script.js README.md

# 3. Commit the files
git commit -m "Complete Day 10 Task: SnapFAQs FAQ Accordion Website"

# 4. Rename the default branch to main
git branch -M main

# 5. Link your local repository to your GitHub repository
git remote add origin https://github.com/<your-username>/snapfaqs-day10.git

# 6. Push your code to GitHub
git push -u origin main
```

---

## 9. GitHub Pages Deployment Instructions

Once your code is pushed to GitHub, you can host the live website for free using **GitHub Pages**:

1. Open your repository on [GitHub.com](https://github.com).
2. Click the **Settings** tab at the top of the repository.
3. In the left sidebar, click **Pages** (under the *Code and automation* section).
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Under **Branch**, choose **`main`** and select **`/ (root)`**, then click **Save**.
6. Wait 1–2 minutes and refresh the page. GitHub will display your live website URL:
   `https://<your-username>.github.io/snapfaqs-day10/`

---

## 10. Learning Outcomes

By completing the **SnapFAQs – Day 10 FAQ Accordion** project, I practised and demonstrated:

- Writing clean, semantic HTML5 and connecting interactive triggers to content panels with `aria-controls` and `aria-expanded`.
- Designing a cohesive, high-contrast white-and-red interface using CSS variables, Flexbox, CSS Grid, and responsive media queries.
- Using JavaScript `querySelectorAll()`, `addEventListener()`, and `classList.toggle()` to manage single-open UI state without external libraries.
- Preparing, documenting, and deploying a production-ready static website to GitHub Pages.
