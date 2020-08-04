import express from "express";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "😊",
  });
  res.status(200);
});

app.get("/test", (req, res) => {
  res.json({
    message: "This is a test!",
  });
  res.status(200);
});

app.use(notFound);
app.use(errorHandler);

export default app;
