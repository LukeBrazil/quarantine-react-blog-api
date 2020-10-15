const http = require("http");
const express = require('express');

const hostname = "127.0.0.1";
const port = 3333;

const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const rootController = require("./routes/index");

app.use('/', rootController);