# Skillora — Week 7 Advanced Marketplace

Week 7 extends the Week 1–6 Skillora freelancing marketplace rather than creating a separate project.

## Advanced Marketplace
- `marketplace.html` — dedicated marketplace discovery experience
- `marketplace.js` — multi-filter search, dynamic results, sorting, favorites, pagination and search state
- `marketplace.css` — responsive advanced marketplace UI
- Search covers services, freelancers, jobs, categories and skills.
- Filters: result type, category, price range, minimum rating, delivery time and experience.
- Sorting: relevance, price low/high, price high/low, highest rating, most popular and newest.
- Favorites persist in `localStorage` under `skillora_favorites_v7`.
- `marketplace.html?favorites=1` opens the saved/favorites view.
- Results update without a page reload.
- Loading, empty and reset states are included.
- Mobile filter drawer and responsive result grid are included.

## Advanced Dashboards
- `advanced-dashboard.html`
- `advanced-dashboard.js`
- `advanced-dashboard.css`
- Role switch for Freelancer / Client
- Freelancer: My Services, Orders, Active Projects, Project Value, Reviews
- Client: Posted Jobs, Proposals, Orders, Active Projects, Favorites
- Project pipeline, saved-item preview, marketplace insights and quick actions
- Dashboard reads existing Week 3–6 localStorage data when available.

## Existing Week 1–6 workflow preserved
Find Jobs → Proposals → Orders/Projects → Messages → Completion → Reviews.

## Week 7 workflow
Find Service/Job → Advanced Search & Filters → View Details → Save/Favorite → Contact User → Hire/Order → Manage Project → Complete → Review & Rating.

## Run
Open `index.html` or `marketplace.html` in a browser. No build step or server is required.
