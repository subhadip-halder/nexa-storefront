# NEXA Storefront

NEXA is a responsive storefront concept for browsing a small, curated collection of everyday tech deals. It is built with React and Vite, with a lightweight editorial layout, product cards, Indian rupee pricing, and custom CSS product illustrations.

> This repository currently contains a front-end showcase. Product information and prices are sample data in the app; there is no product API, cart, checkout, payment processing, or account system.

## What’s included

- A branded storefront header with in-page navigation.
- A promotional hero section with a call to action that jumps to the products.
- A four-item product collection with short feature lists, list and sale prices, and automatically calculated discount percentages.
- Responsive product cards that reflow for tablet and mobile widths.
- A shopping-benefits strip and footer.
- CSS-drawn product visuals for the featured mouse, stylus, keyboard, and compact mouse.
- Accessible landmarks, navigation labels, and descriptive product headings.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- JavaScript (ES modules) and CSS
- ESLint for linting

There is no backend or runtime dependency beyond React and React DOM. Google Fonts (DM Sans and Manrope) are requested by the stylesheet; system font fallbacks are provided if they are unavailable.

## Getting started

### Requirements

- Node.js with npm

### Install and run

```bash
git clone <repository-url>
cd nexa-storefront
npm install
npm run dev
```

Vite prints the local development URL in the terminal (usually `http://localhost:5173/`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create the optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for a final visual check. |
| `npm run lint` | Run ESLint across the project. |

## Project structure

```text
.
├── public/                 # Public static assets and icons
├── src/
│   ├── assets/             # Imported source assets
│   ├── App.jsx             # Storefront page and main sections
│   ├── App.css             # Layout, sections, and responsive styles
│   ├── ProductTab.jsx      # Product data and product grid
│   ├── Product.jsx         # Product card component
│   ├── Product.css         # Product card and product visual styles
│   ├── Price.jsx           # Rupee formatting and discount calculation
│   ├── index.css           # Global styles, colors, and typography
│   └── main.jsx            # React application entry point
├── index.html              # Vite HTML entry point
├── package.json            # Dependencies and project scripts
└── vite.config.js          # Vite configuration
```

## Product data and customization

The current collection is defined in `src/ProductTab.jsx`. Each product has a `title`, `oldPrice`, `newPrice`, `description` list, `visual` style key, and `label`. Prices are numbers in Indian rupees and are formatted with the `en-IN` locale in `src/Price.jsx`; the discount is calculated from the old and new prices.

The `visual` key selects CSS artwork in `src/Product.css`. To add another illustrated product, add its data to the collection and define matching `.visual-<key>` styles. Storefront copy and page sections live in `src/App.jsx`, with their presentation in `src/App.css` and global theme tokens in `src/index.css`.

## Build and deployment

To create a production build:

```bash
npm run build
```

The generated static site is in `dist/`. It can be deployed to a static hosting provider that supports Vite-built sites. For hosts with configurable build settings, use `npm run build` as the build command and `dist` as the output directory. Follow the selected host's instructions for connecting a GitHub repository and publishing updates.

## Current scope

NEXA is currently a static UI concept rather than a complete commerce system. The product catalog is local to the frontend, and the shopping calls to action navigate within the page. Live inventory, verified pricing, search, filtering, cart management, checkout, and customer support integrations would need to be added for a production store.
