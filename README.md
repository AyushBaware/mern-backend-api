# 🚀 MERN Backend API

A production-ready backend API built using **Node.js, Express, and MongoDB**.  
This project demonstrates real-world backend development concepts including authentication, authorization, validation, file uploads, and security.

---

## 📌 Features

- ✅ REST API architecture
- 🔐 JWT Authentication (Login/Register)
- 👤 Role-Based Authorization (Admin/User)
- 📦 Product Management (CRUD)
- 🛒 Order Management with Relationships
- 🔗 MongoDB Relationships using `populate()`
- 📁 File Uploads using Multer
- ✅ Input Validation using Joi
- 🌐 CORS enabled (Frontend support)
- 🛡️ Security using Helmet
- 🚦 Rate Limiting to prevent abuse
- 📊 Request Logging using Morgan
- 📂 Static File Serving
- ⚙️ Environment Variables support

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT  
- **Validation:** Joi  
- **File Uploads:** Multer  
- **Security:** Helmet, Rate Limit  
- **Logging:** Morgan  

---

## 📁 Project Structure

project-root/
│
├── config/ # Database connection
├── controllers/ # Business logic
├── middlewares/ # Custom middlewares
├── models/ # Mongoose models
├── routes/ # API routes
├── validations/ # Joi validation schemas
├── uploads/ # Uploaded files
├── index.js # Entry point
├── .env # Environment variables


---

## 🔑 API Endpoints

### 👤 User Routes

- POST `/users/register` → Register user  
- POST `/users/login` → Login user  
- GET `/users/profile` → Get user profile (Protected)  

---

### 📦 Product Routes

- GET `/products` → Get all products  
- POST `/products` → Create product (Admin only)  
- DELETE `/products/:id` → Delete product (Admin only)  
- POST `/products/upload` → Upload product image  

---

### 🛒 Order Routes

- POST `/orders` → Create order  
- GET `/orders` → Get all orders (with populate)  

---

## 🔐 Authentication & Authorization

- JWT-based authentication system  
- Protected routes using middleware  
- Role-based access control (Admin/User)  

---

## 📥 File Upload

- Upload images using Multer  
- Files stored in `/uploads` folder  
- Accessible via:  
http://localhost:3000/uploads/filename.png

---

## 🌍 Deployment

This API is deployed on **Render**.

### Live URL:
https://mern-backend-api-dugy.onrender.com
