
Equipment Management System (React + Node.js + JSON)

A full-stack equipment management system that allows users to add, edit, delete, view, filter, and export equipment data, with persistent storage using a JSON file on the backend.


Features

Add new equipment

Edit existing equipment

Delete equipment

Search, filter, and sort equipment

Export equipment list to CSV

Persistent storage using backend JSON file

REST API with Express.js

Modern UI built with React + Tailwind CSS

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Tech Stack
Frontend

React (Create React App)

Axios

Tailwind CSS

Lucide Icons


Backend

Node.js

Express.js

JSON file storage (equipment-data.json)

CORS

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="315" height="441" alt="image" src="https://github.com/user-attachments/assets/45a43d1f-772d-484e-8c1d-002419465b91" />























----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Prerequisites

Make sure the following are installed on your system:

Node.js (v16 or above recommended)

npm (comes with Node.js)

Check versions:

node -v
npm -v


Backend Setup (Node.js + Express)
Navigate to backend folder

cd equipment-tracker/backend


Install dependencies

npm install


Start backend server

npm start


If successful, you will see:

Backend running at http://localhost:5000
Using JSON file: equipment-data.json


Backend API endpoint:

http://localhost:5000/api/equipment


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Frontend Setup (React)
Navigate to frontend folder

cd equipment-tracker/frontend

Install dependencies

npm install


Frontend dependencies used:

react

axios

tailwindcss

lucide-react

Configure proxy (IMPORTANT)

In frontend/package.json, ensure this line exists:

"proxy": "http://localhost:5000"


This allows React to communicate with the backend.

Start frontend server

npm start


Frontend will run at:

http://localhost:3000


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Important Notes

Do not edit equipment-data.json manually while server is running

JSON storage is for learning/demo purposes only

Not recommended for production use

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Future Improvements

Migrate JSON storage to MongoDB

Add authentication & roles

Pagination & advanced search

Deploy backend and frontend
