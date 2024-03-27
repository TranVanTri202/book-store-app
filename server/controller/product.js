import { ProductModel } from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500);
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = new ProductModel(newProduct);
    await product.save();
    res.status(200).json(product);
  } catch {}
};

export const updateProduct = async (req, res) => {
  try {
    const updateProduct = req.body;
    const product = await ProductModel.findOneAndUpdate(
      { _id: updateProduct._id },
      updateProduct,
      { new: true }
    );
    res.status(200).json(product);
  } catch {}
};
