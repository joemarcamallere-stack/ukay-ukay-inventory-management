# NestJS Backend for IMS Restaurant

This backend is made for the existing React app in `../reactjsfrontend`.

## What exists now

- The current frontend is React + Vite.
- There is no existing NestJS backend in this workspace before this folder.
- Login is currently frontend-only and saves `userRole` / `userEmail` in `localStorage`.
- App data like inventory, purchase orders, goods received, POS orders, recipes, transfers, and users are mostly stored in browser `localStorage`.

## Backend features included

- `POST /auth/login` for admin/staff login.
- JWT access token response for React.
- `GET /auth/me` protected user profile endpoint.
- `GET /users` protected users list.
- `GET /inventory/products`, `POST /inventory/products`, `PATCH /inventory/products/:id`, `DELETE /inventory/products/:id`.
- PostgreSQL connection using TypeORM.
- Demo users auto-created on startup:
  - `admin@cocoders.com` / `admin123`
  - `staff@cocoders.com` / `staff123`

## Setup

1. Create PostgreSQL database:

```sql
CREATE DATABASE ims_restaurant;
```

2. Install backend dependencies:

```bash
cd nestjsbackend
npm install
```

3. Copy env file:

```bash
copy .env.example .env
```

4. Edit `.env` if your PostgreSQL username/password is different.

5. Run backend:

```bash
npm run start:dev
```

Backend runs at:

```text
http://localhost:3000
```

React frontend should use:

```text
VITE_API_URL=http://localhost:3000
```

## Login response shape

```json
{
  "accessToken": "...",
  "user": {
    "id": "uuid",
    "email": "admin@cocoders.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

## Notes for final project

For production or defense-ready code, turn off `synchronize: true` and use migrations. For now, `synchronize: true` helps you start faster because TypeORM creates the tables automatically.
