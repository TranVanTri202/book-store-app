import express from "express";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../controller/product.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.post("/update", updateProduct);
export default router;
