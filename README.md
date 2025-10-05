*Full Stack Todo Task App

A simple and clean full-stack to-do task manager built using React,Node.js,MySQL, and the native Fetch API. This app allows users to create tasks, view the latest five tasks, and mark tasks as completed.



*Features

- Add new tasks with a title and description
- View the latest 5 tasks only
- Mark tasks as Done(removes them from the UI)
- Responsive and minimal UI
- Backend API with secure parameterized SQL queries
Popup notifications:
  - Displays a success message when a task is added
  - Shows confirmation when a task is marked as completed



*Tech Stack

Frontend   - React + CSS        
Backend    - Node.js + Express 
Database   - MySQL              
API Calls  - Fetch API          



Setup Instructions

Clone the repo

git clone https://github.com/kaveeha15/Todo-task.git
npm i

Database
- Create a MySQL database named todo_app
- Add a task table:
CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  description VARCHAR(255)
  
);
1.Backend Setup
npm init -y
npm i nodemon
npm i express
npm i cors
npm i mysql2
nodemon server.js

2. Frontend Setup
npm create vite@latest TODO-TASK
react
javascript
npm i
npm run dev


API Endpoints 
GET- /task/getTasks - Fetch latest 5 tasks 
POST - /task/postTasks - Add a new task
DELETE - /task/deleteTask/:id - Mark task as completed  


UI Preview
- Add Task form with title + description
- Task cards with "Done" button
- Responsive layout with flexbox


Author
Kavisha Nimanshi
Passionate about building clean, structured full-stack apps with React, Node.js, and MySQL.












