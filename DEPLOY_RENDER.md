# Deploy on Render (Backend + Frontend)

This repo is a monorepo:
- Backend (FastAPI): `backend/`
- Frontend (Vite + React): `frontend/`

The two **must** be deployed as separate services on Render:
- **Backend**: Render *Web Service* (Python)
- **Frontend**: Render *Static Site*

> Important: Vite environment variables (like `VITE_API_BASE`) are baked in **at build time**. Set them in Render **before** you redeploy the frontend.

---

## Backend (FastAPI) – Render Web Service

### Create service
- Render Dashboard → **New** → **Web Service**
- Connect your GitHub repo
- Environment: **Python**

### Settings
- **Build Command**

```bash
pip install -r backend/requirements.txt
```

- **Start Command**

```bash
uvicorn backend.app.main:app --host 0.0.0.0 --port $PORT
```

### Environment variables (Backend)
Render Dashboard → Backend → **Environment**
- **`PYTHONUNBUFFERED`** = `1`
- **`MODEL_PATH`** = `backend/traffic_sign_model.onnx`

### Verify backend
After deploy:
- `GET /` should return a JSON message
- `GET /health` should return `{ "status": "ok" }`
- Optional: `GET /model-info` should show `"exists": true`

---

## Frontend (Vite + React) – Render Static Site

### Create service
- Render Dashboard → **New** → **Static Site**
- Connect your GitHub repo

### Settings
- **Build Command**

```bash
cd frontend && npm ci && npm run build
```

- **Publish Directory**: `frontend/dist`

### Environment variables (Frontend)
Render Dashboard → Frontend → **Environment**
- **`VITE_API_BASE`** = `https://<your-backend-service>.onrender.com`

Example:
- `VITE_API_BASE=https://drive-detect-backend.onrender.com`

### SPA routing (fix `/app` on refresh)
Because this app uses React Router `BrowserRouter`, you must configure a rewrite so deep links work:
- Render Dashboard → Static Site → **Redirects/Rewrites**
- Add a rule:
  - **Source**: `/*`
  - **Destination**: `/index.html`
  - **Action**: **Rewrite**

Render docs: see [Static Site Redirects and Rewrites](https://render.com/docs/redirects-rewrites).

---

## Common gotchas

- **Predictions call the wrong host**: if `VITE_API_BASE` is missing at build time, the frontend may try `POST /predict` on the frontend domain. Set `VITE_API_BASE` and redeploy.
- **Model not found on Render**: check backend logs and `GET /model-info`. If needed, set `MODEL_PATH` to the correct absolute path shown in logs.

