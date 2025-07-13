# MERN Stack Blog Application

A full-stack blog application built using **MongoDB**, **Express.js**, **React.js**, and **Node.js (MERN)**. It allows users to register, log in, create, edit, delete, and view blog posts, as well as categorize them. The app features full CRUD functionality, user authentication, and a clean, responsive UI.

---

## 📝 Project Overview

This project is a simple but powerful blog system with:

- Full **CRUD** operations for blog posts
- User **authentication** (register, login, logout)
- Categorization of posts
- Protected routes (only authors can edit/delete their own posts)
- Error handling and input validation
- Responsive and clean UI built with **Tailwind CSS**
- Fully RESTful API
- Front-end and back-end integration using Axios and Vite

---

## ⚙️ Setup Instructions

### 🔐 Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git

---

### 🚀 Clone the Project

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-MohamedBashir2093.git
cd week-4-mern-integration-assignment
````

---

### 📁 Project Structure

```
week-4-mern-integration-assignment/
│
├── client/       # React frontend
├── server/       # Express + MongoDB backend
├── README.md
```

---

### 📦 Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory (see `.env.example`):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mernblog
JWT_SECRET=your_jwt_secret
```

Then run the server:

```bash
npm run dev
```

---

### 💻 Frontend Setup

```bash
cd client
npm install
```

Start the React app:

```bash
npm run dev
```

---




## 📡 API Documentation

All routes are prefixed with `/api`.

### 🔒 Authentication

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register user     |
| POST   | `/auth/login`    | Login & get token |

### 📝 Posts

| Method | Endpoint     | Description                |
| ------ | ------------ | -------------------------- |
| GET    | `/posts`     | Get all posts              |
| GET    | `/posts/:id` | Get single post            |
| POST   | `/posts`     | Create post (auth only)    |
| PUT    | `/posts/:id` | Update post (auth + owner) |
| DELETE | `/posts/:id` | Delete post (auth + owner) |

### 📁 Categories

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/categories` | Get all categories |
| POST   | `/categories` | Create category    |

> ⚠️ All protected routes require a Bearer token in the `Authorization` header.

---

## ✅ Features Implemented

* [x] RESTful API using Express and Mongoose
* [x] React front-end with Vite
* [x] User authentication with JWT
* [x] CRUD for blog posts
* [x] Protected routes (edit/delete only by post owner)
* [x] Category management
* [x] Form validation and error handling
* [x] Axios with global token injection
* [x] Responsive design with Tailwind CSS
* [x] Clean codebase with reusable components and API services
* [x] `.env.example` for both client and server
* [x] Navigation and layout with React Router
* [x] Screenshots included

---

## 🖼 Screenshots

### 📄 Home Page

![Home Page](./screenshots/Screenshot%202025-07-13%20130222.png)

### ✍️ Create Post

![Create Post](./screenshots/Screenshot%202025-07-13%20130922.png)

### 🔐 Login

![Login Page](./screenshots/Screenshot%202025-07-13%20131040.png)



## 👨‍💻 Author

 Mohamed Bashir Hamud

---

## 📃 License

This project is licensed for academic use and learning purposes.

