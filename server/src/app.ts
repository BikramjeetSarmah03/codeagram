import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";
import errorMiddleware from "./middlewares/error";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ORIGINS,
    credentials: true,
  })
);

app.use(morgan("dev"));
morgan(":method :url :status :res[content-length] - :response-time ms");

app.use("/api/v1", routes);

app.all("*", (req, res) => {
  res.send("🟢Server Working...🔴Route NOT Found");
});

app.use(errorMiddleware);

export default app;
