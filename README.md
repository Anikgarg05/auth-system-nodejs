# 🔐 Auth System (Node.js + MySQL)

## 🚀 Overview
This is a full-stack authentication system that allows users to sign up and log in securely. It demonstrates how real-world authentication works by connecting frontend, backend, and database.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Security:** bcrypt (password hashing)  

---

## ✨ Features

- User Signup  
- User Login  
- Password hashing using bcrypt 🔐  
- REST API architecture  
- MySQL database integration  
- Environment variables for secure configuration  

---

## 📁 Project Structure

```
auth-project/
│
├── client/              # Frontend (HTML, CSS, JS)
├── server/              # Backend (Node.js)
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic
│   ├── routes/          # API routes
│   └── server.js        # Entry point
│
├── .env                 # Environment variables (NOT uploaded)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <https://github.com/Anikgarg05/auth-system-nodejs.git>
cd auth-project
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file

Create a file named `.env` in root folder and add:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=auth_system
```

---

### 4️⃣ Setup Database

- Create a MySQL database named `auth_system`
- Run your SQL files (`table.sql`, `query.sql`, etc.)

---

### 5️⃣ Run the server

```
node server/server.js
```

---

### 6️⃣ Open frontend

Open `index.html` in browser

---

## 🔗 API Endpoints

| Method | Endpoint  | Description |
|--------|----------|------------|
| POST   | /signup  | Register new user |
| POST   | /login   | Authenticate user |

---

## 🔐 Security

- Passwords are hashed using bcrypt  
- Sensitive data stored in `.env`  
- `.env` is ignored using `.gitignore`  

---

## 📚 Learning Outcomes

- Understanding authentication flow (Frontend → Backend → DB)  
- Using REST APIs in real-world projects  
- Implementing password security  
- Managing environment variables  
- Using Git & GitHub for version control  

---

## 🚀 Future Improvements

- Add JWT Authentication  
- Create Dashboard after login  
- Add Logout functionality  
- Deploy project online  

---

## 📂 GitHub Repository

👉 https://github.com/Anikgarg05/auth-system-nodejs.git

---

## 🙌 Author

- Anik garg  

---
