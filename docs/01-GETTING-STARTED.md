# Getting Started with Natours

Welcome to **Natours**! This is a comprehensive guide to setting up, configuring, and running the internal API and web application.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher) - Runtime environment
- [MongoDB](https://www.mongodb.com/try/download/community) - Local database server (or a cloud Atlas URI)

## 🚀 Installation

1.  **Clone the repository** (if you haven't already):

    ```bash
    git clone https://github.com/Shivam56291/natours-node-learning-project.git
    cd natours-node-learning-project
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## ⚙️ Configuration

The application requires specific environment variables to function.

1.  Create a file named `config.env` in the root directory.
2.  Copy the following template and fill in your details:

```env
NODE_ENV=development
PORT=3000
DATABASE=mongodb://localhost:27017/natours
DATABASE_PASSWORD=your_db_password_if_cloud

# Security (JWT)
JWT_SECRET=your-ultra-secure-and-long-secret-string
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Email (Mailtrap for dev)
EMAIL_USERNAME=your_mailtrap_username
EMAIL_PASSWORD=your_mailtrap_password
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525

# Stripe (Payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret
```

> **Note:** For development, `DATABASE` can be your local MongoDB string like `mongodb://localhost:27017/natours`. If using MongoDB Atlas, replace `<PASSWORD>` in your connection string with your actual password.

## 🏃‍♂️ Running the App

### Development Mode

Runs the server with `nodemon` for hot-reloading.

```bash
npm run start:dev
```

Open your browser and visit: `http://localhost:3000`

### Production Mode

Runs the server in production mode (optimized).

```bash
npm start
```

## 💳 Testing Payments (Stripe)

We use Stripe for payment processing. In **Test Mode**, you can use the following test card credentials to simulate a successful transaction:

| Field           | Value                           |
| :-------------- | :------------------------------ |
| **Card Number** | `4242 4242 4242 4242`           |
| **Expiration**  | Any future date (e.g., `12/26`) |
| **CVC**         | Any 3 digits (e.g., `123`)      |
| **ZIP**         | Any valid ZIP (e.g., `10001`)   |

## 🛠 Script Commands

- `npm start`: Start production server
- `npm run start:dev`: Start development server
- `npm run debug`: Start in debug mode
- `npm run watch:js`: Bundle client-side JS (Parcel)
- `npm run build:js`: Build client-side JS for production

---

**Happy Coding!** 🌍✈️
