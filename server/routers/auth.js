// routers/auth.js
import express from "express";
import { login, register, getUser, getUserById } from "../controller/auth.js";

const router = express.Router();

// Route để xử lý đăng nhập
router.post("/login", login);
router.post("/register", register);
router.get("/userData", getUser);
router.get("/getUser/:id", getUserById);
export default router;
