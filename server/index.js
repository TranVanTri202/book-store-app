import express from "express";
import product from "./routers/product.js";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
const URI =
  "mongodb+srv://admin:admin111@bookstore.0mupkt4.mongodb.net/?retryWrites=true&w=majority&appName=bookstore";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use("/product", product);
mongoose
  .connect(URI)
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("connect fail ", err);
  });

app.listen(5000, () => {
  console.log("Server is running");
});
