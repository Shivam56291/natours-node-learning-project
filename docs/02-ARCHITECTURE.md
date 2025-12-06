# Natours Architecture & Implementation

This document provides a deep dive into the technical architecture of the Natours application.

## 🏗 High-Level Architecture

Natours is built using a **Monolithic Architecture** with a clear separation of concerns using the **MVC (Model-View-Controller)** pattern.

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Frontend**: Server-side rendered Pug templates + Client-side JavaScript
- **Bundler**: Parcel

## 📂 Project Structure

```text
/
├── controllers/    # Route Hander Logic (The "C" in MVC)
├── models/        # Database Schemas & Business Logic (The "M" in MVC)
├── public/        # Static assets (CSS, images, bundled JS)
├── routes/        # API and View route definitions
├── utils/         # Helper classes (APIFeatures, AppError, Email)
├── views/         # Pug templates (The "V" in MVC)
├── app.js         # Express app configuration & Middleware
└── server.js      # Server entry point
```

## 🧩 Models (Data Layer)

We use **Mongoose** to model our application data.

### 1. Tour Model (`models/tourModel.js`)

The core entity of the application.

- **Fields**: Name, Price, Summary, Description, Image, Start Dates, Locations (Geospatial).
- **Key Features**:
  - **Virtual Properties**: Duration in weeks.
  - **Middleware**: Slugs for SEO-friendly URLs.
  - **Geospatial Data**: Supports "Tours within X radius" queries.

### 2. User Model (`models/userModel.js`)

Handles authentication and user profiles.

- **Fields**: Name, Email, Photo, Password, PasswordConfirm, Role (user, guide, lead-guide, admin).
- **Key Features**:
  - **Encryption**: Passwords are hashed using `bcrypt` before saving.
  - **Methods**: `correctPassword`, `changedPasswordAfter`, `createPasswordResetToken`.

### 3. Review Model (`models/reviewModel.js`)

Allows users to review tours.

- **Fields**: Review text, Rating, User (ref), Tour (ref).
- **Key Features**:
  - **Static Methods**: `calcAverageRatings` automatically updates the Tour's rating stats when a review is added/updated/deleted.
  - **Indexes**: Prevents duplicate reviews from the same user on one tour.

### 4. Booking Model (`models/bookingModel.js`)

Tracks tour purchases.

- **Fields**: Tour (ref), User (ref), Price, Paid (boolean).
- **Integration**: Created automatically via Stripe Webhooks (in production) or Success URLs (in dev).

## 🎮 Controllers (Logic Layer)

### Authentication (`authController.js`)

- **Signup/Login**: JWT-based authentication. Cookies used for secure transport.
- **Protection**: `protect` middleware ensures only logged-in users access certain routes.
- **Authorization**: `restrictTo('admin', 'guide')` enables Role-Based Access Control (RBAC).

### Factory Handling (`handlerFactory.js`)

To keep code DRY (Don't Repeat Yourself), we use a factory pattern for standard CRUD operations:

- `deleteOne`, `updateOne`, `createOne`, `getOne`, `getAll`.
  Specific controllers (like `tourController`) reuse these generic handlers.

### View Controller (`viewsController.js`)

Handles rendering of `.pug` templates.

- **getOverview**: Renders all tours.
- **getTour**: Renders a single tour detail page.
- **getLoginForm**, **getAccount**, **getMyTours**: User-specific pages.

## 🔌 API Features

The `APIFeatures` class (`utils/apiFeatures.js`) powers our robust query capabilities:

- **Filtering**: `?price[gt]=500`
- **Sorting**: `?sort=price`
- **Field Limiting**: `?fields=name,price`
- **Pagination**: `?page=2&limit=10`

---

_Documentation generated for Natours_
