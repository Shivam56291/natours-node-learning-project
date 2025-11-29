<h1 align="center">🌍 Natours API — Professional REST API Project</h1>

<p align="center">
  A fully structured, production-ready REST API built with <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.  
  Focused on professional project structure, scalability, and maintainable code.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Node.js-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framework-Express-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tools-Postman-orange?style=for-the-badge" />
</p>

---

## 🚀 Project Highlights

<p align="left">
  - 🔐 <b>Authentication & Authorization</b>: Signup, Login, Password Reset, and Role-based access control (User, Guide, Lead-Guide, Admin).<br>
  - 👤 <b>User Management</b>: Update user details, password management, and administrative user controls.<br>
  - 🏔️ <b>Tour Management</b>: Complete CRUD operations for tours with geospatial data support.<br>
  - 🔍 <b>Advanced API Features</b>: Filtering, Sorting, Pagination, Field Limiting, and Aliasing (e.g., Top 5 Cheap Tours).<br>
  - 📊 <b>Data Aggregation</b>: MongoDB aggregation pipelines for calculating tour statistics and monthly plans.<br>
  - 🛡️ <b>Security</b>: JWT (JSON Web Tokens) for stateless authentication, Password Hashing with bcrypt.<br>
  - 📧 <b>Email Support</b>: Functionality to send welcome emails and password reset tokens.<br>
  - ⚙️ <b>Error Handling</b>: Global error handling mechanism for operational and programming errors.<br>
  - 🏗️ <b>MVC Architecture</b>: Modular and scalable code structure with separate Routers, Controllers, and Models.<br>
</p>

---

## 📝 API Endpoints

### **Authentication**

- `POST /api/v1/users/signup` - Register a new user
- `POST /api/v1/users/login` - Login and receive JWT
- `POST /api/v1/users/forgotPassword` - Request password reset token
- `PATCH /api/v1/users/resetPassword/:token` - Reset password
- `PATCH /api/v1/users/updateMyPassword` - Update logged-in user's password

### **Users**

- `GET /api/v1/users` - Get all users (Admin only)
- `PATCH /api/v1/users/updateMe` - Update current user's profile (name, email)
- `DELETE /api/v1/users/deleteMe` - Deactivate current user (Coming Soon)

### **Tours**

- `GET /api/v1/tours` - Get all tours (with filtering, sorting, pagination)
- `POST /api/v1/tours` - Create a new tour (Admin/Lead-Guide only)
- `GET /api/v1/tours/:id` - Get specific tour details
- `PATCH /api/v1/tours/:id` - Update tour (Admin/Lead-Guide only)
- `DELETE /api/v1/tours/:id` - Delete tour (Admin/Lead-Guide only)
- `GET /api/v1/tours/top-5-cheap` - Alias route for top 5 cheap tours
- `GET /api/v1/tours/tour-stats` - Get tour statistics
- `GET /api/v1/tours/monthly-plan/:year` - Get monthly plan for tours

---

## ⚙️ Tech & Tools

<p align="center">
  <code>Node.js | Express.js | MongoDB | Mongoose | JWT | Bcrypt | Nodemailer | Postman | Nodemon | Morgan | ESLint | Prettier</code>
</p>

<p align="center">
  This project provides a <b>solid foundation</b> for building scalable, maintainable, and professional APIs.
</p>
