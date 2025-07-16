A full-stack CRUD (Create, Read, Update, Delete) web application built with React (frontend) and Express.js (backend). It includes:

User creation with validation

Search functionality (client-side)

Toast notifications

Edit/Delete users

Loading spinners

Clean UI with dropdowns for role selection

How to Run Locally
Requires Node.js installed.

1. Clone the Repository
bash
Copy code
git clone https://github.com/Anshman01/crud-app.git
cd crud-app
2. Install Dependencies
bash
Copy code
npm install
This installs both frontend and backend dependencies if you're using a monorepo structure.

3. Start the App (Both Frontend + Backend)
bash
Copy code
npm run dev
Frontend runs on: http://localhost:3000

Backend API runs on: http://localhost:8000/api/users

React proxy forwards requests to Express backend

Features
Add, Edit, and Delete users

Search users by name, email, or role (searches from table data)

Form validation

Clean UI with dropdown for roles
Toast notifications for errors and actions
Spinner while loading data
Fully client-side search

Assumptions & Decisions
Using a client-side search only, no server filtering

In-memory data unless connected to MongoDB

Data fetching is via Axios on page load

Roles are hardcoded dropdown values for simplicity

Scripts
Script	Description
npm start	Starts frontend only
npm run server	Starts backend only (port 8000)
npm run dev	Starts both concurrently

Tech Stack
Frontend: React, Axios, Toastify, React Spinners

Backend: Node.js, Express.js

Styling: CSS

Dev Tools: Nodemon, Concurrently

