# QL - Subscription-Based Model Microservice

This project is a microservice for managing user subscriptions and subscription plans in a SaaS platform. It supports creating, updating, canceling, and retrieving subscriptions, with auto-expiry logic and clean RESTful API design.

---

## 📦 Features

- 🔐 JWT-ready authentication (middleware in place)
- 📋 Subscription plan management (create + list)
- 🧑‍💼 User subscription CRUD (Create, Retrieve, Update, Cancel)
- 📆 Auto-expiry logic based on plan duration
- 🧱 MVC Architecture using Express.js & MongoDB
- ✅ Modular & scalable microservice foundation

---

## 🧑‍💻 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT (middleware ready)
- **Environment Config**: dotenv

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ql-subscription-service.git
cd ql-subscription-service
