# Frontend (React + Vite)

## Project Structure

## Project Structure

```
src/
├── assets/        # Contains static files used in the app (images, icons, fonts)
├── components/    # Contains reusable UI components used across the app (Button, Input, Modal)
├── hooks/         # Contains custom React hooks to extract and reuse logic across components (useAuth, useFetch)
├── layouts/       # Contains layout structures shared between pages (MainLayout, AuthLayout)
├── lib/           # Contains low-level configs and third-party setups (API client, axios instance)
├── pages/         # Contains page-level components mapped to routes (Home, Login, Dashboard)
├── router/        # Contains routing configuration and navigation handling (route definitions, guards)
├── services/      # Contains API calls and external communication logic (authService, userService)
├── styles/        # Contains global styles and shared styling configs (global.css, Tailwind config)
├── utils/         # Contains helper functions for common logic (formatDate, validateInput)
├── App.tsx        # Root component that sets up layout and routing
├── main.tsx       # Entry point that renders the app and loads global styles
```

## Setup

```bash
cd frontend
npm install
```

## Run

```
npm run dev
```

## Notes

- Make sure you have Node.js installed
