const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const generationController = require("./controller/generationController");

const app = express();
app.use(cors());
app.use(express.raw({ type: "*/*", limit: "10mb" }));
app.use(generationController);

const port = process.env.PORT || 6060;

app.listen(port);
