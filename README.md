********** YOU TUBE CLONE ********************

A full-stack **YouTube Clone** built with the **MERN stack** (MongoDB, Express, React, Node.js). This project allows users to browse, upload, and watch videos just like on the original YouTube platform.


## 🛠️ Tech Stack

### Frontend
- React.js + Vite
- Axios for API calls
- CSS (Fully Responsive)
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for Authentication
- Multer for file upload (if used)
- CORS, dotenv, express-validator

### Deployment
- Vercel (Frontend)
- Render.com (Backend)


### ✅ User Side
- 🔍 Browse videos by category
- 📺 Watch video player
- 🔐 Sign Up / Login with JWT
- 🔗 Persistent authentication via localStorage
- 🔎 Search functionality
- 💬 Comment system 

### ✅ Creator Side
- 📤 Upload videos with title, description, thumbnail, and video URL
- 📝 Manage their uploaded videos
- 📊 View video details on their own channel

How to Run :

## Setup Backend:

run below commands to setup Backend :

cd backend
npm install


## setup .env in backend:

PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret

## Run Backend:

npm start

##  Setup Frontend:

cd Frontend
npm install

## setup .env in backend:

VITE_API_BASE_URL=/api

## Run frontend:

npm run dev

## Learnings

Deep understanding of MERN stack integration

JWT-based auth and protected routes

Responsive UI design 

Deployment using Vercel and Render
