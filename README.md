# ARVO Group Full-Stack Web Application

Professional multi-service business web application for ARVO Group.

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB with Mongoose

## Project Structure

```text
frontend/
  src/
  public/
backend/
  src/
```

## Setup

1. Install frontend dependencies:

```bash
cd frontend
npm install
npm run dev
```

2. Install backend dependencies:

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

3. Update `backend/.env`:

```text
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/arvo-group
```

The frontend runs on `http://localhost:5173`.
The backend runs on `http://localhost:5000`.

## Features

- Home page with hero, services, testimonials, gallery, and WhatsApp button
- Service detail pages with request buttons
- Property listings with price and location filters
- Inquiry form stored in MongoDB
- Admin dashboard for inquiries and property listings
- Courier tracking mock status
- Responsive modern UI
