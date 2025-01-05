const express = require("express");
const bodyParser = require("body-parser");
const generationController = require("./controller/generationController");

const app = express();

app.use(express.raw({ type: "*/*", limit: "10mb" }));
app.use(generationController);

const port = process.env.PORT || 6000;

app.listen(port);
