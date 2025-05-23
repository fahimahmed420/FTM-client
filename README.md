# FreelanceConnect - Freelance Task Marketplace

🔗 **Live Site**: [https://beautiful-tartufo-17dc98.netlify.app/](https://beautiful-tartufo-17dc98.netlify.app/)

## 🚀 Project Overview

**FreelanceConnect** is a dynamic platform that bridges the gap between clients and freelancers. Whether you need small tasks completed or you're seeking freelance opportunities, this site enables smooth task posting, bidding, and profile management—all within a secure and responsive environment.

---

## 🔥 Key Features

- 🔐 **Authentication**: Secure login/signup via email-password and Google OAuth using Firebase Authentication.
- 📋 **Task Management**: Users can add, update, and delete their own tasks.
- 🛠️ **Bidding System**: Freelancers can place bids on tasks and view bid counts.
- 📅 **Featured Tasks**: Shows latest tasks sorted by upcoming deadlines (MongoDB limit + sort).
- 🎨 **Responsive UI**: Optimized for mobile, tablet, and desktop views.
- 🌙 **Dark/Light Theme Toggle**: Users can switch between dark and light modes.
- 🎞️ **Lottie Animations**: Enhanced UX with modern Lottie animations.
- 🧭 **Protected Routes**: Private pages for adding, editing, and viewing tasks are secured via auth guard.
- 🔄 **Persistent Routing**: Reloading on any route doesn't break navigation (Vite + React Router).

---

## 📁 Folder Structure


---

## 🌐 Tech Stack

### 🔧 Frontend
- React
- Tailwind CSS + DaisyUI
- React Router DOM
- Firebase Authentication
- SweetAlert2
- Lottie for animations

### 🧩 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv for environment configs
- CORS & JSON middleware

---

## 📦 Setup Instructions

### ✅ Client

```bash
cd client
npm install
npm run dev
