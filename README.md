# SIET MERN Website

A MERN application for Sri Shakthi Institute of Engineering & Technology.

## Architecture & Project Structure

The project has been refactored into a scalable, domain-driven structure decoupling state, data, reusable components, and route pages:

```text
SIET_WEB/
├── client/                     # Modern React + Vite Frontend
│   ├── public/                 # Brand assets, PDFs (downloads/ & download/), and icons
│   │   ├── brand/              # Logos, campus imagery, and institutional photography
│   │   └── downloads/          # Official regulatory PDFs and forms (with parity mirror)
│   └── src/
│       ├── App.jsx             # React application mount
│       ├── app.js              # Master SPA router & event orchestrator
│       ├── main.jsx            # Application entry point
│       ├── styles/
│       │   └── variables.css   # Institutional design tokens (palette, spacing, typography)
│       ├── styles.css          # Core CSS stylesheet
│       ├── utils/              # Pure utilities (DOM, router, animations, forms, modals)
│       │   ├── dom.js          # DOM query, titleCase, escapeHtml, slugify, counter
│       │   ├── router.js       # Hash router, query parser, navigateTo, scroll handling
│       │   ├── modalScroll.js  # iOS/Desktop scroll lock & modal trap
│       │   ├── animations.js   # IntersectionObserver & metric counter animator
│       │   └── formSubmit.js   # Shared async AJAX submission & notification toasts
│       ├── data/               # Institutional datasets decoupled from presentation
│       │   ├── navigationData.js    # Header & footer sitemaps, page copy
│       │   ├── programmesData.js    # 14 UG and 7 PG degree programmes
│       │   ├── departmentsData.js   # 21 department curriculum profiles & facilities
│       │   ├── campusData.js        # Campus life, hostel, sports, transport data
│       │   ├── placementData.js     # Tier analytics (₹10 LPA+, ₹6 LPA+, ₹4 LPA+)
│       │   ├── careerData.js        # College, School & Lab career opportunities
│       │   ├── curriculumData.js    # Autonomous R2021 & R2025 curriculum specifications
│       │   ├── accreditationData.js # NAAC, NBA, NIRF, IQAC, ARIIA compliance records
│       │   ├── coeData.js           # Controller of Examinations portal datasets
│       │   └── libraryData.js       # Central library OPAC & digital repositories
│       ├── components/         # Modular, reusable UI components
│       │   ├── common/         # Header, Footer, HudHeader, Modals, SvgIcons
│       │   └── cards/          # Programme cards, department cards
│       ├── sections/           # Large reusable layout sections (PlacementSection, etc.)
│       ├── pages/              # Domain-organized route page controllers
│       │   ├── Home/           # Landing page with hero, stats, recruiter marquee
│       │   ├── About/          # Vision, Mission, Beliefs, Values, Chairman, Principal
│       │   ├── Academics/      # Programmes, Departments, Curriculum, Calendar, Library
│       │   ├── Campus/         # Campus Life, Facilities, Hostel, Transport, Sports, Clubs, NCC
│       │   ├── Admissions/     # Apply Portal, Admission Enquiry, Referral
│       │   ├── Placements/     # Placement Portal, Recruiters, Entrepreneurship E-Cell
│       │   ├── COE/            # Controller of Examinations, Downloads, Regulations
│       │   ├── Accreditation/  # NAAC, NBA, NIRF, IQAC, ARIIA, Governance
│       │   ├── Careers/        # Careers @ SIET, Openings, Application form
│       │   └── Contact/        # Contact directory, Google Map integration, enquiry
│       ├── layouts/            # Layout shells (MainLayout, ApplyLayout)
│       └── legacy/             # Backwards-compatibility re-export facades
├── server/                     # Node.js + Express API
│   ├── config/                 # MySQL pool & environment configuration
│   ├── controllers/            # Enquiry, Admission, News controllers
│   ├── middleware/             # Error handling, CORS, rate limiting
│   ├── migrations/             # Versioned MySQL DDL scripts
│   ├── repositories/           # Parameterized SQL queries
│   └── routes/                 # Express API routes (/api/enquiries, /api/admission-enquiries)
├── scripts/                    # Build, mirror, and test orchestration
│   ├── test_pages.mjs          # Comprehensive test suite validating all 41 pages
│   └── mirror-dist.js          # Dist post-build mirroring script
├── legacy/template-assets/     # Archived unused raw template assets
└── package.json                # Root workspaces orchestration
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
