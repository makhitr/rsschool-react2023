import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer(isProd = process.env.NODE_ENV === 'production') {
  const resolve = (p) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';

  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const preloadedState = {
      app: {
        entities: [],
        error: null,
        loading: 'idle',
        cardLoading: 'idle',
        value: null,
        selectedCard: null,
        selectedCardId: null,
        formData: [],
        isOpen: false,
      },
    };
    try {
      const url = req.originalUrl;
      let template, render;
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      preloadedState.app = { ...preloadedState.app, entities: data.results.slice(0, 10) };

      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = indexProd;
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const context = {};
      const appHtml = render(url, context, preloadedState);
      if (context.url) {
        return res.redirect(301, context.url);
      }

      const html = template.replace(
        `<!--app-html-->`,
        `${appHtml}
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState || {}).replace(
          /</g,
          '\\u003c'
        )}</script>      
        `
      );
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(8000);
}

createServer();
