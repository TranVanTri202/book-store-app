import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    author: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    rate: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("products", schema);
