# SIET MERN Website

A modern MERN rebuild for Sri Shakthi Institute of Engineering & Technology.

## Run locally

Requires Node.js 18 or newer. The dependencies are pinned to versions compatible with Node.js 18.

```bash
npm install
cp .env.example .env
npm run dev
```

The React/Vite client runs on `http://127.0.0.1:5173` and proxies `/api` to the Express API on port `5050`. Port 5050 avoids common macOS system-service conflicts on port 5000. Add `MONGODB_URI` to persist admission enquiries. Without MongoDB, the UI remains fully usable and the API clearly returns demo-mode status.

If MongoDB is not installed locally, leave `MONGODB_URI` blank in `.env`. The site will still run; only enquiry persistence will remain in demo mode.

## Production

```bash
npm run build
npm start
```

Current institutional facts and outbound links were checked against the official website at https://www.siet.ac.in/ in August 2026. The brand mark is implemented as a replaceable text/SVG lockup because the live origin blocks direct asset retrieval.
