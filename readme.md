# Natours | Nature Tours API & Web App 🌲⛰️

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-24%2B-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.x-blue" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-forestgreen" alt="MongoDB">
  <img src="https://img.shields.io/badge/Pug-Templates-brown" alt="Pug">
  <img src="https://img.shields.io/badge/Stripe-Payments-violet" alt="Stripe">
</p>

> **Note:** This is a **Learning Project** demonstrating a complete full-stack workflow, from API design to server-side rendering and payment integration.

**Natours** is a modern application for booking customizable nature tours. It serves as a showcase for advanced Node.js concepts including authentication, security, payments, and data modeling.

---

## ✨ Features at a Glance

### 🔒 Security & Auth

- **JWT Authentication**: Secure stateless authentication using JSON Web Tokens.
- **Login & Signup**: Premium glassmorphism UI for user access.
- **Security**: Rate limiting, brute-force protection, and data sanitization (XSS, NoSQL injection).

### 💳 Payments

- **Stripe Integration**: Secure credit card processing using Stripe Checkout.
- **Dynamic Bookings**: Automatic booking creation upon successful payment confirmation.

### 🗺️ Visualization

- **Interactive Maps**: Leaflet.js integration to show tour locations.
- **Premium UI**: Custom animations (`zoomInSlow`, `slideInUp`), glassmorphism cards, and gradient reveals.

### 🏗️ Backend Architecture

- **MVC Pattern**: Organized structure with Models, Views, and Controllers.
- **API Features**: Advanced filtering, sorting, pagination, and aliasing.
- **Error Handling**: Centralized error controller for global error management.

---

## 📚 Documentation

Detailed documentation is available in the `docs/` folder:

| Doc                                                  | Description                                    |
| :--------------------------------------------------- | :--------------------------------------------- |
| [**🚀 Getting Started**](docs/01-GETTING-STARTED.md) | Setup, Config, and Running the app.            |
| [**🏗️ Architecture**](docs/02-ARCHITECTURE.md)       | Deep dive into Models, MVC, and API structure. |
| [**👨‍💻 Author**](docs/03-AUTHOR.md)                   | About the creator.                             |

---

## 🛠️ Tech Stack

This project implements the following technologies defined in `package.json`:

- **Core**: `Node.js`, `Express`
- **Database**: `MongoDB`, `Mongoose`
- **Frontend**: `Pug`, `Parcel` (Bundler)
- **Payments**: `Stripe`
- **Utils**: `Nodemailer` (Email), `Multer` (File Uploads), `Sharp` (Image Processing)
- **Security**: `Helmet`, `HPP`, `XSS-Clean`, `BcryptJS`

---

## 🚀 Quick Start

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/Shivam56291/natours-node-learning-project.git
    npm install
    ```
2.  **Configure**:
    Create `config.env` (See [Getting Started](docs/01-GETTING-STARTED.md)).
3.  **Run**:
    ```bash
    npm run start:dev
    ```

---

<p align="center">
  <i>Built by <b>Shivam</b>, BCA 5th Sem</i>
</p>

