import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controller/product.js";

const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
