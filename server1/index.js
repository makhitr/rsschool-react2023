// require('ignore-styles') //

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
  ignore: [/[node-modules]/],
  presets: ['@babel/presets-env', '@babel/preset-react'],
});

// import babel_register from '@babel/register';
// babel_register({
//   ignore: [/[node-modules]/],
//   presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
// });

import './server.js';
