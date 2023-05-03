import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createServer = async () => {
  const resolve = (p: string) => path.resolve(__dirname, p);

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
    const url = req.originalUrl;
    try {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      preloadedState.app = { ...preloadedState.app, entities: data.results.slice(0, 10) };

      let template = await fsp.readFile(resolve('index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const [templateStart, templateEnd] = template.split(`<!--app-html-->`);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { pipe } = await render(url, preloadedState, {
        onShellReady() {
          res.write(templateStart);
          pipe(res);
        },
        onAllReady() {
          const withScriptPreloaded = templateEnd.replace(
            '<!--scriptPreload-->',
            `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState || {}).replace(
              /</g,
              '\\u003c'
            )}</script>`
          );
          res.write(withScriptPreloaded);
          res.end();
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);
        next(error);
      }
    }
  });

  app.listen(8000);
};

createServer();
