import express from "express";
import product from "./routers/product.js";
import mongoose from "mongoose";

const app = express();
const URI =
  "mongodb+srv://admin:admin147@bookstore.0mupkt4.mongodb.net/?retryWrites=true&w=majority&appName=bookstore";

app.use("/product", product);

mongoose
  .connect(URI)
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("connect fail");
  });

app.listen(5000, () => {
  console.log("Server is running");
});
