import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generationController from "./controller/generationController.js";

dotenv.config();

const app = express();

const allowedOrigins = [process.env.ALLOWED_ORIGIN, "https://testdd.ai"];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));


app.use(express.raw({ type: "*/*", limit: "10mb" }));
app.use(generationController);

const port = process.env.PORT || 6060;

app.listen(port);
