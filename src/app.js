const express = require('express');
require('dotenv').config();
const generationController = require('./controller/generationController')

const app = express();

app.use(express.json());
app.use(generationController);

const port = process.env.PORT || 5000;

app.listen(port);