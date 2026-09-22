# SIET MERN Website

A MERN application for Sri Shakthi Institute of Engineering & Technology.

## Project structure

```text
SIET_WEB/
├── client/                 # React + Vite frontend
│   ├── public/             # Brand, media and template assets
│   └── src/
│       ├── App.jsx         # React application shell
│       ├── main.jsx        # React entry point
│       ├── styles.css      # Site styles
│       └── legacy/site.js  # Existing routes and page renderer
├── server/                 # Node.js + Express API
│   ├── config/             # MySQL connection pool and environment
│   ├── controllers/        # Request handlers
│   ├── middleware/         # API middleware
│   ├── migrations/         # Versioned MySQL schema
│   ├── repositories/       # Parameterized SQL queries
│   └── routes/             # Express routes
├── legacy/template-pages/  # Archived source template pages
└── package.json            # Root development orchestration
```

## Run locally

Requires Node.js 18 or newer. The dependencies are pinned to versions compatible with Node.js 18.

```bash
npm install
npm run install:all
cp .env.example .env
npm run dev
```

The React/Vite client runs on `http://127.0.0.1:5173` and proxies `/api` to the Express API on port `5050`. Port 5050 avoids common macOS system-service conflicts on port 5000. Configure MySQL and run the migration before submitting enquiry forms. The API returns a service-unavailable response rather than reporting a false save when MySQL is unavailable.

## Admission enquiry persistence

The Admission Enquiry form submits to `POST /api/admission-enquiries`. This endpoint requires a live MySQL connection and never reports a successful save when the database is unavailable. SQL is isolated in repository modules and uses `mysql2` prepared statements.

Required environment variable:

```bash
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=siet_app
MYSQL_PASSWORD=change_this_password
MYSQL_DATABASE=siet
MYSQL_CONNECTION_LIMIT=10
```

Optional local settings remain `PORT=5050` and `CLIENT_URL=http://127.0.0.1:5173`.

Create the database and application user using your MySQL administration account, then apply the repository migration:

```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS siet CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
npm run migrate --workspace server
```

Example request:

```bash
curl -X POST http://127.0.0.1:5050/api/admission-enquiries \
  -H 'Content-Type: application/json' \
  -d '{"studentName":"Sanjay","mobileNumber":"+919876543210","email":"student@example.com","course":"B.E","department":"CSE","city":"Coimbatore","source":"Website","remarks":"Interested in admission"}'
```

Run server validation tests with `npm test --workspace server`. Start the complete application with `npm run dev`.

## Production

```bash
npm run build
NODE_ENV=production npm start
```

## Vercel

The repository is configured as an npm workspace. Vercel installs the React,
Vite, Express and MySQL workspace dependencies from the root lockfile, builds
the client, publishes `client/dist`, and exposes the Express app through the
`api/` serverless entry points. Add the `MYSQL_*` variables and `CLIENT_URL` in the Vercel
project environment settings when persistent enquiry submissions are required.

Current institutional facts and outbound links were checked against the official website at https://www.siet.ac.in/ in August 2026. The brand mark is implemented as a replaceable text/SVG lockup because the live origin blocks direct asset retrieval.
# SIET_WEB
