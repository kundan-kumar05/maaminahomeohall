# 🌿 Maa Mina Homeo Hall — Healthcare Website

A modern, responsive homeopathic clinic website built with **React.js + Express.js**.

## Project Structure

```
MaaMinaHomeo/
├── frontend/          # React + Vite
└── backend/           # Express + Node.js + MongoDB
```

---

## 🚀 Getting Started

### 1. Start the Backend

```bash
cd backend
npm start
```

> Server runs on **http://localhost:5000**
> Make sure MongoDB is running locally (or update `MONGO_URI` in `backend/.env`)

### 2. Start the Frontend

```bash
cd frontend
npm run dev
```

> App opens at **http://localhost:5173**

---

## ⚙️ Environment Variables

### `backend/.env`
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/maaminahomeo
```

### `frontend/.env`
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🏗️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router DOM |
| Animations | Framer Motion |
| Icons | React Icons |
| HTTP Client | Axios |
| Slider | Swiper.js |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |

---

## 📋 Features

- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Loading animation screen
- ✅ Sticky animated navbar with mobile hamburger drawer
- ✅ Hero section with floating doctor card
- ✅ About clinic section with animated visuals
- ✅ Doctor profile cards (Dr. Birju Kumar & Dr. Radha Kumari)
- ✅ 9 Treatment specialty cards
- ✅ Why Choose Us section with staggered animations
- ✅ Testimonials Swiper slider with autoplay
- ✅ Contact section with Google Maps embed
- ✅ Book Appointment modal with form validation
- ✅ Scroll-to-top button
- ✅ SEO-optimized HTML structure

---

## 👨‍⚕️ Doctors

| Doctor | Qualifications | Specializations |
|---|---|---|
| Dr. Birju Kumar | BHMS, Dr. Y.S.H.M & C.H., Darbhanga | Paralysis, Skin Diseases, Arthritis |
| Dr. Radha Kumari | BHMS, NIMS Jaipur | Infant Diseases, Infertility, Impotence |
