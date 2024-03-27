import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const ProductModel = mongoose.model("products", schema);
