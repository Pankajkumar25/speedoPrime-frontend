# Speedo Prime - Movie Streaming Frontend

A modern movie streaming platform frontend built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Auth:** JWT (cookie-based)
- **HTTP Client:** Axios
- **Forms:** React Hook Form + Zod
- **Notifications:** Sonner

## Features

- User authentication (Login / Signup)
- Dashboard with user management
- Movie browsing (Continue Watching, Latest, Top Movies)
- Upcoming movies banner
- Genre-based movie exploration
- Responsive design (mobile-first)
- 404 page for unknown routes
- Middleware-protected dashboard

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── (auth)/          # Login & Signup pages
│   ├── dashboard/       # Protected dashboard
│   ├── profile/         # User profile
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── not-found.tsx    # 404 page
├── components/
│   ├── common/          # Shared UI components
│   ├── home/            # Homepage components (Navbar, Hero, MovieCard, etc.)
│   ├── login/           # Login form
│   ├── signup/          # Signup form
│   └── table/           # Data table (dashboard)
├── config/
│   ├── axios.ts         # Axios instance with auth interceptor
│   ├── env.ts           # Environment variables
│   └── routes.ts        # Route constants
├── context/
│   └── AuthContext.tsx   # Auth state management
├── data/
│   └── movies.ts        # Movie data
├── hooks/
│   └── useAuth.ts       # Auth hook
├── lib/
│   └── validations.ts   # Zod schemas
├── public/
│   └── image/           # Static images
├── services/
│   ├── auth.service.ts  # Auth API calls
│   └── user.service.ts  # User API calls
├── types/               # TypeScript interfaces
└── utils/               # Helpers (storage, constants, sort, search)
```

## API Endpoints

| Method | Endpoint         | Description      |
|--------|------------------|------------------|
| POST   | `/auth/signup`   | Register user    |
| POST   | `/auth/login`    | Login user       |
| POST   | `/auth/logout`   | Logout user      |
| GET    | `/users`         | List users       |

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```
