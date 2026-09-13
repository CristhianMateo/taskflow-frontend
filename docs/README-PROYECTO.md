# TaskFlow — Frontend

{{REEMPLAZAR: descripción breve del proyecto — 2-3 líneas}}

## Stack

- React {{REEMPLAZAR: versión}} + Vite
- React Router
- axios

## Cómo correrlo localmente

```bash
{{REEMPLAZAR: pasos exactos — npm install, cp .env.example .env con la URL local del backend, npm run dev}}
```

## Build de producción

```bash
npm run build
```

`npm run build` genera `dist/` con los archivos estáticos ya optimizados. En este proyecto no se sube a mano: el workflow `.github/workflows/deploy-pages.yml` corre ese mismo comando en cada push a `main` y publica el resultado en GitHub Pages, en `https://{{REEMPLAZAR: usuario}}.github.io/taskflow-frontend/` (o en el dominio propio configurado en Settings → Pages).
