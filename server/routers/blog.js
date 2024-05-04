import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "../controller/blog.js";

const router = express.Router();

router.get("/", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
export default router;
