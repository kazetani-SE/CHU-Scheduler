# Project Structure Guide

This document describes the folder structure and responsibilities in this project.

---

## Root Structure
```
src/
├── assets/
├── components/
├── hooks/
├── layouts/
├── lib/
├── pages/
├── router/
├── services/
├── styles/
├── utils/
├── App.tsx
└── main.tsx
```

---

## Folder Responsibilities

### assets/
Stores static files such as images, icons, and fonts.

---

### components/
Contains reusable UI components used across the app.  
These are small building blocks like buttons, inputs, and cards.

---

### hooks/
Stores custom React hooks.  
Used to reuse logic (not UI) across multiple components.

---

### layouts/
Defines common page layouts.  
Used to wrap pages with shared structure (e.g., header, sidebar).

---

### pages/
Contains main screens of the application.  
Each file represents a page (e.g., Home, Login).

---

### router/
Handles routing logic.  
Defines how pages are connected and navigated.

---

### services/
Handles API calls and external data fetching.  
Used to communicate with backend services.

---

### styles/
Contains global styles and shared CSS.

---

### utils/
Stores helper functions.  
Used for small reusable logic like formatting or validation.

---

## Core Files

### main.tsx
Entry point of the application.  
Responsible for rendering the app.

---

### App.tsx
Main component of the app.  
Usually contains the router and global layout.

---

## Notes

- Each folder has a single clear purpose.
- Avoid putting unrelated logic into the wrong folder.
- Only create new folders when necessary.