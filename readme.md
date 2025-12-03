<div align="center">
  <h1>🌍 Natours API</h1>
  <p><b>A Professional, Production-Ready REST API for Tour Booking Applications</b></p>
  
  <p>
    <img src="https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js" />
    <img src="https://img.shields.io/badge/Express-4.x-blue?style=for-the-badge&logo=express" />
    <img src="https://img.shields.io/badge/MongoDB-6.x-green?style=for-the-badge&logo=mongodb" />
    <img src="https://img.shields.io/badge/Mongoose-ODM-red?style=for-the-badge&logo=mongoose" />
    <img src="https://img.shields.io/badge/JWT-Auth-orange?style=for-the-badge&logo=jsonwebtokens" />
  </p>
</div>

---

## � Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [License](#-license)

---

## 📝 About the Project

**Natours** is a fully featured, RESTful API built with Node.js, Express, and MongoDB. It serves as the backend for a tour booking application, providing comprehensive functionality for managing tours, users, reviews, and bookings.

This project demonstrates **modern backend development practices**, including:

- **MVC Architecture** for clean code organization.
- **Advanced Error Handling** for robust applications.
- **Security Best Practices** (Data Sanitization, Rate Limiting, XSS Protection).
- **Scalable Data Modeling** with Mongoose.

---

## 🚀 Key Features

- **🔐 Authentication & Authorization**:
  - Signup, Login, Logout.
  - Password Reset (via Email), Password Update.
  - Role-based Access Control (User, Guide, Lead-Guide, Admin).
  - JWT (JSON Web Tokens) & Cookie-based Auth.

- **🏔️ Tour Management**:
  - CRUD operations for Tours.
  - Geospatial Queries (Find tours within radius).
  - Advanced Filtering, Sorting, Pagination, and Field Limiting.
  - Aggregation Pipelines (Tour Stats, Monthly Plans).

- **👤 User Management**:
  - Update User Profile (Name, Email, Photo).
  - Admin features to manage all users.

- **⭐ Reviews**:
  - Nested routes for reviews on tours.
  - Create, Read, Update, Delete reviews.

- **🛡️ Security**:
  - **Helmet**: Set security HTTP headers.
  - **Express-Rate-Limit**: Prevent brute-force attacks.
  - **Mongo-Sanitize**: Prevent NoSQL query injection.
  - **XSS-Clean**: Prevent Cross-Site Scripting attacks.
  - **HPP**: Prevent HTTP Parameter Pollution.

---

## � Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas or Local)
- **ODM**: Mongoose
- **Authentication**: JSON Web Token (JWT), Bcrypt.js
- **Email**: Nodemailer (with Mailtrap for dev)
- **Utilities**: Multer (File Uploads), Sharp (Image Processing), Validator

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (Local instance or Atlas connection string)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shivam56291/natours-node-learning-project.git
   cd natours
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Configuration

Create a `config.env` file in the root directory. This file is ignored by Git for security. Add the following variables:

```env
# Environment
NODE_ENV=development
PORT=3000

# Database
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/natours?retryWrites=true&w=majority
DATABASE_PASSWORD=your_database_password

# JWT (JSON Web Token)
JWT_SECRET=your-ultra-secure-and-long-secret-string
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Email (Mailtrap or other SMTP service)
EMAIL_USERNAME=your_mailtrap_username
EMAIL_PASSWORD=your_mailtrap_password
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
```

> **Note**: For `DATABASE`, replace `<PASSWORD>` with your actual database password in the connection string, or use the `DATABASE_PASSWORD` variable variable logic as implemented in `server.js`.

---

## 🏃 Usage

**Start the Development Server** (with Nodemon)

```bash
npm run start:dev
```

**Start the Production Server**

```bash
npm run start:prod
```

**Debug Mode**

```bash
npm run debug
```

The API will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```
natours/
├── controllers/      # Route controllers (logic)
├── models/           # Mongoose models (schema)
├── routes/           # Express routes
├── utils/            # Utility functions (Email, AppError, APIFeatures)
├── public/           # Static assets (images, html)
├── dev-data/         # Development data & import scripts
├── app.js            # Express app setup & middleware
├── server.js         # Server entry point
└── config.env        # Environment variables (not committed)
```

---

## 📝 API Endpoints

### **Authentication**

- `POST /api/v1/users/signup` - Register a new user
- `POST /api/v1/users/login` - Login
- `POST /api/v1/users/forgotPassword` - Request password reset
- `PATCH /api/v1/users/resetPassword/:token` - Reset password

### **Tours**

- `GET /api/v1/tours` - Get all tours
- `POST /api/v1/tours` - Create a tour (Admin/Lead-Guide)
- `GET /api/v1/tours/:id` - Get tour details
- `PATCH /api/v1/tours/:id` - Update tour
- `DELETE /api/v1/tours/:id` - Delete tour
- `GET /api/v1/tours/top-5-cheap` - Top 5 cheap tours
- `GET /api/v1/tours/tour-stats` - Tour statistics
- `GET /api/v1/tours/monthly-plan/:year` - Monthly plan

### **Users**

- `GET /api/v1/users` - Get all users
- `PATCH /api/v1/users/updateMe` - Update profile
- `DELETE /api/v1/users/deleteMe` - Delete account
- `PATCH /api/v1/users/updateMyPassword` - Update password

### **Reviews**

- `GET /api/v1/reviews` - Get all reviews
- `POST /api/v1/reviews` - Create a review

---

## 📄 License

This project is licensed under the **ISC License**.
