# Skillora — Week 3 Task: User Profile & Service Creation Interface

This project continues the **Skillora** freelance marketplace website built in Week 2.
Week 3 adds the frontend interface that lets a freelancer manage their profile and create/display services (gigs).

## Pages Added

| Page | File | Description |
|---|---|---|
| User Profile Page | `profile.html` | View your account info, bio, skills and stats |
| Edit Profile Page | `edit-profile.html` | Form to update name, title, bio, skills and profile photo |
| Freelancer Profile | `freelancer-profile.html` | Public-facing profile clients see, including all published services |
| Create a Service/Gig Page | `create-service.html` | Form to create (or edit) a service, with validation and image upload preview |
| My Services Section | `my-services.html` | Dashboard grid of your services with **View / Edit / Delete** actions |
| Service Details Page | `service-details.html` | Full details of a single service/gig |

`index.html` (Week 2 homepage) got one small addition: a **Dashboard** link in the navbar that leads into these new pages.

## What Was Built

- Freelancer profile with: profile picture, name, professional title, about/bio, skills, experience, rating, services and starting price.
- Create Service form with: title, category, description, price, delivery time, skills/tags and a service image.
- Full CRUD-style flow for services: create → view in "My Services" → edit → view details → delete.
- JavaScript form validation (required fields, minimum lengths, price > 0).
- Image preview/upload UI for both the profile photo and service cover image using `FileReader`.
- Data (profile + services) is persisted in the browser via `localStorage`, so changes survive a page refresh. Sample/default data is seeded automatically on first visit.
- Fully responsive layout, reusing the same dark theme, color tokens, fonts and components from Week 2 (`style.css`).

## Files

- `index.html`, `style.css`, `script.js` — Week 2 homepage (unchanged, plus one nav link)
- `dashboard.css` — styles for the new profile/service pages
- `dashboard.js` — profile & service data handling, form validation, rendering logic
- `profile.html`, `edit-profile.html`, `freelancer-profile.html`, `create-service.html`, `my-services.html`, `service-details.html` — Week 3 pages

## Technologies

HTML5, CSS3, JavaScript (vanilla, no frameworks), Font Awesome icons, Google Fonts (Inter).

## How to Run

Open `index.html` in a browser, then click **Dashboard** in the navbar (or open `profile.html` directly).


## Week 3 Job Marketplace Features
Open `find-jobs.html` to use job search/filter/sort, `job-details.html` for details, `post-job.html` to publish jobs, `submit-proposal.html?id=job-1001` to apply, and `my-proposals.html` to track proposals. Data is stored in browser localStorage.


## Week 6 Extension
Messaging, notifications, project-linked chat, completion feedback, star ratings and persistent reviews are available in `messages.html` and completed project details.
