import express from "express";
import dotenv from "dotenv";
import connectDB from "./conf/mongoDB.js";
import { notFound, errorManager } from "./middleware/errorMiddleware.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...:-)");
});

app.use("/api/items", itemRoutes);

app.use(notFound);
app.use(errorManager);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is working in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
