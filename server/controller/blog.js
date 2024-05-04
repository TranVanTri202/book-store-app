import { BlogModel } from "../models/BlogModel.js";
export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.find();
    res.status(200).json(blog);
  } catch (err) {
    res.status(500);
  }
};

export const createBlog = async (req, res) => {
  try {
    const newBlog = req.body;
    const blog = new BlogModel(newBlog);
    await blog.save();
    res.status(200).json(blog);
  } catch {}
};

export const updateBlog = async (req, res) => {
  try {
    const updateBlog = req.body;
    const blog = await BlogModel.findOneAndUpdate(
      { _id: updateBlog._id },
      updateBlog,
      { new: true }
    );
    res.status(200).json(blog);
  } catch {}
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.status(200).json({ message: "blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
