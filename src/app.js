import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generationController from "./controller/generationController.js";

dotenv.config();

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN;
console.log(allowedOrigin);
const corsOptions = {
  origin: allowedOrigin,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));


app.use(express.raw({ type: "*/*", limit: "10mb" }));
app.use(generationController);

const port = process.env.PORT || 6060;

app.listen(port);
