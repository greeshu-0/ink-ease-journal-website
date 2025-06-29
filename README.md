# 🖋️ Ink & Ease — Your Personal Mental Wellness Journal

Ink & Ease is a soothing, mindful journaling web app built to help users express thoughts, track emotions, and explore healing activities. It’s a personal mental health companion designed with self-care and creativity in mind.

## 🌟 Features

- 📝 Write and save personal journal entries
- 🌙 Mood tagging with emojis
- 🎨 Add Creative Therapy activities like drawing, music, nature walks & more
- 📂 Filter entries by category (e.g., Self Love, Gratitude, Reflections)
- 🔍 Search entries by keyword or mood
- 📅 Auto-sort entries by date
- 🔐 Secure login/signup system with email-based user identification
- ☁️ All journal entries are private and stored in PostgreSQL, linked to logged-in users

---

## 🖼️ Screenshots

### 🏠 Homepage  
![image](https://github.com/user-attachments/assets/c5cf8d32-9ac4-4d4e-aaee-e203b5e9564f)

### 📓 Journal Entry  
![image](https://github.com/user-attachments/assets/3b0696b1-f2eb-44c7-80a9-dee3d66c7949)

### 🔒 Login Page
![image](https://github.com/user-attachments/assets/7b1d3012-07b4-4c95-9c85-c6ca2fe3e987)

### 😄 Mood Tracker
![image](https://github.com/user-attachments/assets/c8ff5ac8-316a-498a-ada4-db7d0712d8cc)


---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (via pg module)
- **Authentication:**  bcrypt

---

## 📂 Project Structure

```txt
ink-and-ease/
├── frontend/ # React + Tailwind UI
│ ├── src/
| │ ├── assets/
| │ ├── components/
| │ ├── pages/
| │ ├── routes/
| │ └──App.jsx, Main.jsx, ...
│ ├── index.html
│ └── ...
├── backend/ # Node + Express + PostgreSQL API
│ ├── routes/
│ ├── server.js
│ └── ...
```

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js & npm
- PostgreSQL

---

### 🛠️ Setup Instructions

#### Frontend

1. Navigate to the `frontend/` directory
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

#### Backend

1. Navigate to the `backend/` directory
2. Install dependencies with `npm install`
3. Set up the `.env` file with the following:

```env
PORT=5000
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=inkandease
DB_PASS=your_postgres_password
DB_PORT=5432
```

4. Start the server with `node server.js` or `npm start`

---

## 📄 SQL Schema
The PostgreSQL database schema used for this project is defined in:

📁 `backend/schema.sql`

---


## 👩‍💻 Made by

[Greeshma Jagarapu](https://github.com/greeshu-0)

