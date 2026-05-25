# MyShop — Modern E-Commerce Storefront

[![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-purple?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A high-performance, responsive e-commerce storefront built with **React**, **Redux Toolkit** for centralized state management, **Tailwind CSS** for layout, and **Local Storage** to persist user actions. The project fetches product details dynamically from a mock API to simulate a real-world digital retail experience.

---

## 🌟 Key Features

- 📦 **Dynamic Product Catalog**: Fetches product listings asynchronously from a dummy API (`dummyjson.com/products`).
- 🛒 **Interactive Cart Operations**:
  - Add items to the cart instantly.
  - Remove items directly from the catalog or from the cart page.
  - Clear the entire cart with a single click.
- 🔢 **Quantity Management**: Increase or decrease quantities of selected items directly in the cart, with immediate price recalculations.
- 💾 **Persistent Cart State**: Cart state is synced with the browser's `localStorage` so items remain intact across sessions/reloads.
- ⚡ **Centralized State Management**: Uses Redux Toolkit slices to manage cart actions and API fetching cleanly and predictably.
- 📱 **Fully Responsive Layout**: Built with a mobile-first approach, displaying beautifully across mobile, tablet, and desktop devices.
- 🎨 **Sleek UX / Hover Effects**: Subtle animations and transitions to improve user engagement and aesthetic quality.

---

## 📸 Screenshots & Demo

> **Tip:** Add your screenshots or GIFs to a folder (e.g., `public/screenshots/`) and link them here to make your repository stand out to recruiters!

| Desktop View (Catalog) | Cart Details View |
|:---:|:---:|
| ![Desktop View](https://via.placeholder.com/600x350?text=MyShop+Desktop+Catalog+Screenshot) | ![Cart View](https://via.placeholder.com/600x350?text=MyShop+Cart+Page+Screenshot) |

*Alternative:* Link a live production URL in your GitHub repository sidebar!

---

## 🛠️ Technology Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Fetching**: Asynchronous Redux Thunk fetching from [DummyJSON API](https://dummyjson.com/)
- **Build Tool**: [Vite](https://vite.dev/) (with Hot Module Replacement)

---

## 📂 Folder Structure

The project follows a clean, component-driven directory layout:

```text
Ecommerce-store-React/
├── public/                 # Static assets (icons, SVGs)
├── src/
│   ├── assets/             # Images and local styles
│   ├── components/         # Reusable UI Components
│   │   ├── Cards.jsx       # Grid layout for product cards & add/remove logic
│   │   ├── NAvbar.jsx      # Navigation header with active cart count badge
│   │   ├── Nav2.jsx        # Sub-header actions (e.g., Clear Cart button)
│   │   └── Routers.jsx     # Central routing definitions
│   ├── pages/              # Application Pages
│   │   ├── Home.jsx        # Landing placeholder
│   │   └── Cart.jsx        # Cart checklist, quantities, totals, and place order
│   ├── store/              # Redux State Management
│   │   ├── Store.js        # ConfigureStore setup (combining cart & api slices)
│   │   └── slice.js        # Cart actions, quantities, and localStorage syncing
│   ├── api.js              # Redux slice with AsyncThunk for API fetching
│   ├── App.jsx             # Root layout with Navbar and routing outlet
│   ├── index.css           # Global CSS imports
│   └── main.jsx            # Application entrypoint
├── index.html              # Main HTML document template
├── vite.config.js          # Vite configurations
└── package.json            # Scripts and package manifests
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18.x or higher recommended) and **npm** installed on your system.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/myshop-ecommerce-store.git
   cd myshop-ecommerce-store
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

4. **Build for Production**
   ```bash
   npm run build
   ```
   This generates an optimized production bundle inside the `dist/` directory.

---

## 🌐 Deployment Guides

### Deploy on Vercel (Recommended)
1. Sign in to your [Vercel Account](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your GitHub repository.
4. Keep the default settings (Vercel automatically detects Vite).
5. Click **Deploy**.

### Deploy on Netlify
1. Sign in to [Netlify](https://netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Link your GitHub and select the repository.
4. Set the Build Command to `npm run build` and Publish Directory to `dist`.
5. Click **Deploy Site**.

### Deploy on GitHub Pages
1. Install the GitHub Pages deployment helper as a dev dependency:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Open `vite.config.js` and add a base property matching your repository name:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```
3. Open `package.json` and add these scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run the deploy script:
   ```bash
   npm run deploy
   ```

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).

---

## 👥 Author

- **Your Name** - [GitHub](https://github.com/your-username) | [LinkedIn](https://linkedin.com/in/your-username)
