import express from "express";
import product from "./routers/product.js";
import blog from "./routers/blog.js";
import auth from "./routers/auth.js";
import order from "./routers/order.js"; // Sửa lỗi chính tả từ 'oder' thành 'order'
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use("/auth", auth);
app.use("/product", product);
app.use("/blog", blog);
app.use("/orders", order);

mongoose
  .connect(URI)
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("connect fail ", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
