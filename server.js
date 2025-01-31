const corsAnywhere = require('cors-anywhere');
const express = require('express');

const app = express();
const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'accept-encoding'],
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
