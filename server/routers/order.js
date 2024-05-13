import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderByID,
  deleteAllOrders,
} from "../controller/order.js";
const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderByID);
router.delete("/orders", deleteAllOrders);
export default router;
