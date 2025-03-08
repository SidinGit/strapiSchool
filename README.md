# strapiSchool: School Website with Strapi Backend and React Frontend

This project is a full-stack application consisting of a **Strapi backend** and a **React frontend**. The frontend is built using React and the Strapi backend is used for managing content dynamically. This project is designed for a school website with various pages, events, and other dynamic content managed via the Strapi CMS.

## Table of Contents
- [Frontend](#frontend)
- [Strapi Backend](#strapi-backend)
- [Installation](#installation)
---

## Frontend

The frontend of the project is built with React and uses **Vite** for faster development. The UI includes pages like the homepage, about page, event details, and events listing. Tailwind CSS is used for styling and responsive design.

### Features
- ***React*** components for pages and UI elements
- ***Tailwind CSS*** for responsive design
- ***Context API*** to manage global state for events
- ***Vite*** for fast development build
- ***Dynamic event data*** fetched from Strapi backend

### Dependencies
- React
- Tailwind CSS
- Vite
- Axios (for API requests)

---

## Strapi Backend

The backend of the project uses **Strapi**, an open-source headless CMS that provides an API to manage the content of the website. Strapi handles managing contents dynamically.

### Features
- Content management for school-related information (here events)
- API endpoints to retrieve dynamic data for the frontend
- **Strapi admin panel** to manage the content

### Dependencies
- Strapi
- Node.js
- SQLite (or other database options depending on your configuration)

---

## Installation

Begin with the step 1 and make sure to host your Strapi backend on Strapi Cloud or else you might lose your local data when you deploy Strapi

### Step 1: Strapi Setup
Refer to [Strapi official setup guide](https://docs.strapi.io/dev-docs/quick-start)

### Step 2: Frontend Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Point to root(frontend)
    ```bash
    cd frontend
    ```
3. NPM install
    ```bash
    npm i
    ```
4. Add your `Strapi_URL` in your **.env**
5. Start development
    ```bash
    npm run dev
    ```
Finally remember to add **.gitignore** under the root directory.
Thanks for your patience.