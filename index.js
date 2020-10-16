const http = require("http");
const express = require('express');
const cors = require('cors');

const hostname = "127.0.0.1";
const port = 3333;

const app = express();

const server = http.createServer(app);

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept"
  };

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const rootController = require("./routes/index");

app.use(cors(corsOptions));

app.use('/', rootController);
