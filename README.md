<h1><strong>Equipment Management System (React + Node.js + JSON)</strong></h1>

A full-stack equipment management system that allows users to add, edit, delete, view, filter, and export equipment data, with persistent storage using a JSON file on the backend.



<h1><strong>Features</strong></h1>


Add new equipment

Edit existing equipment

Delete equipment

Search, filter, and sort equipment

Export equipment list to CSV

Persistent storage using backend JSON file

REST API with Express.js

Modern UI built with React + Tailwind CSS

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h1><strong>Tech Stack</strong></h1>

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

<h1><strong>Prerequisites</strong></h1>

Make sure the following are installed on your system:

Node.js (v16 or above recommended)

npm (comes with Node.js)

<h1><strong>Check versions:r</strong></h1>


node -v,
npm -v

<h1><strong>Backend Setup (Node.js + Express)</strong></h1>


<h1><strong>Navigate to backend folder</strong></h1>


cd equipment-tracker/backend


<h1><strong>Install dependencies</strong></h1>


npm install


<h1><strong>Start backend serverr</strong></h1>


npm start


<h1><strong>If successful, you will see:</strong></h1>


Backend running at http://localhost:5000
Using JSON file: equipment-data.json

<h1><strong>Backend API endpoint:</strong></h1>


http://localhost:5000/api/equipment


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h1><strong>Frontend Setup (React)</strong></h1>



<h1><strong>Navigate to frontend folder</strong></h1>


cd equipment-tracker/frontend


<h1><strong>Install dependencies</strong></h1>


npm install



"proxy": "http://localhost:5000"


This allows React to communicate with the backend.

<h1><strong>Start frontend server</strong></h1>


npm start


<h1><strong>Frontend will run at:</strong></h1>


http://localhost:3000


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h1><strong>Important Notes</strong></h1>


Do not edit equipment-data.json manually while server is running

JSON storage is for learning/demo purposes only

Not recommended for production use

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h1><strong>Future Improvements</strong></h1>


Migrate JSON storage to MongoDB

Add authentication & roles

Pagination & advanced search

Deploy backend and frontend
