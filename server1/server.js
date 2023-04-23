import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App1 from '../src/App1';

const app = express();
const port = 3001;

// app.get('', (req, res) => {
//   res.send('Hello World!');
// });

app.use('*', (req, res) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.err(err);
      return res.status(500).send('Some error happened');
    }

    const html = ReactDomServer.renderToString(
      <StaticRouter location={req.url}>
        <App1 />
      </StaticRouter>
    );

    return res.send(data.replace('<div id="root"></div>', `<div id='root'>${html}</div>`));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
