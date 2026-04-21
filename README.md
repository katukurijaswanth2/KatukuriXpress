<div align="center">

# 🛍️ KatukuriXpress

### A Modern, Fully Responsive E-Commerce Web Application

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://katukurixpress.vercel.app/)

**[🌐 Live Demo](https://katukurixpress.vercel.app/)** · **[📁 GitHub Repo](https://github.com/katukurijaswanth2/KatukuriXpress)**

</div>

---

## 📖 About The Project

**KatukuriXpress** is a production-grade e-commerce web application built from the ground up with React. It goes beyond a basic storefront — featuring dynamic API-driven product listings, Redux-powered cart state, a real-time countdown for deals, and a Skeleton UI loading strategy that replaces traditional spinners for a significantly smoother user experience.

The project is architected around **feature-based separation of concerns**, making it easy to scale, maintain, and extend. Every major UI pattern — reusable components, custom hooks, conditional rendering, props destructuring — is implemented following modern React best practices.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🛍️ **Product Listing** | Fetches and renders products dynamically from an external API |
| 🔎 **Category Filtering** | Filter products by category with a clean, modular filter UI |
| 🛒 **Cart Management** | Add, remove, and update item quantities with Redux global state |
| ⭐ **Rating System** | Star rating display on product and deal cards |
| ⏳ **Skeleton Loaders** | Content-aware skeleton screens instead of generic spinners |
| 🎯 **Deals of the Day** | Time-limited deal cards with a live countdown timer |
| 🔐 **Authentication UI** | Login and Sign-Up pages with form handling |
| 📱 **Fully Responsive** | Mobile-first layout that works across all screen sizes |
| 🔄 **Async Data Fetching** | Custom hooks encapsulate all API calls and loading state |

---

## 🧠 Tech Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **State Management:** Redux (Global cart & UI state)
- **Styling:** Modular CSS (per-component stylesheets)
- **Data:** External REST API via `fetch` + custom async hooks
- **Deployment:** Vercel

---

## 🗂️ Project Structure

This project follows a **feature-based folder structure** — each feature owns its own components, pages, and styles. Shared UI lives separately, and business logic is extracted into utilities and custom hooks.

```
src/
├── app/                        # App entry point (App.jsx, main.jsx, global CSS)
├── appRouterDom/               # Route definitions
├── assets/                     # Static images, SVGs, JS utilities
├── coustomHocks/               # Reusable custom React hooks (API calls, state logic)
│
├── features/                   # Core feature modules
│   ├── Deals/                  # Deals of the Day feature
│   │   ├── pages/              # DealsOfTheDay page
│   │   ├── CountdownTimer.jsx  # Live countdown component
│   │   ├── DealCard.jsx
│   │   └── StarRating.jsx
│   │
│   ├── authontication/         # Login & Sign-Up UI
│   │   ├── Login.jsx
│   │   └── SignIn.jsx
│   │
│   ├── cart/                   # Cart feature
│   │   ├── components/         # CartCard, PriceSummary, QtySelector, etc.
│   │   └── CartPage.jsx
│   │
│   └── products/               # Product listing feature
│       ├── components/         # ProductCard, ProductGrid, Products
│       └── skeleton/           # Skeleton loaders (ProductsSkeleton, SpecificCardSkeleton)
│
├── mainLayout/                 # App shell / layout wrapper
├── pages/                      # Top-level pages (Home, AllProducts, About)
├── reduX/                      # Redux store, slices, actions
│
├── shared/                     # Reusable across features
│   ├── components/             # Navbar, Footer, Carousel, Features section
│   └── ui/                     # Generic UI: Pagination, SectionHeader, SpecificCard
│
└── utilities/                  # Business logic helpers
    └── category/               # Category filter logic and components
```

---

## ⚡ Advanced React Concepts Applied

**Custom Hooks**
All API calls and derived loading/error state are extracted into custom hooks inside `coustomHocks/`, keeping components clean and logic reusable.

**Skeleton Loading Strategy**
Rather than a generic spinner, the app renders content-shaped skeleton screens (`ProductsSkeleton`, `SpecificCardSkeleton`) that match the exact layout of the content being loaded — dramatically improving perceived performance.

**Redux for Cart State**
Cart operations (add, remove, quantity update) are managed globally via Redux, making the cart state accessible from any component without prop drilling.

**Props Destructuring & Component Reusability**
Every component receives clean, destructured props. `StarRating`, `DealCard`, `ProductCard`, `PriceSummary`, and others are fully reusable across different feature contexts.

**Feature-Based Architecture**
Each feature (`cart`, `products`, `Deals`, `authontication`) is self-contained with its own components, pages, and styles — enabling independent development and scaling.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/katukurijaswanth2/KatukuriXpress.git

# 2. Navigate into the project
cd KatukuriXpress

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🌐 Live Demo

Check out the deployed app here: **[https://katukurixpress.vercel.app/](https://katukurixpress.vercel.app/)**

---

## 📬 Contact

**Jaswanth Katukuri**
GitHub: [@katukurijaswanth2](https://github.com/katukurijaswanth2)

---

<div align="center">
  <sub> JASWANTH KATUKURI 🤖 FULLSTACK DEV</sub>
</div>
