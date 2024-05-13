import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Tham chiếu đến schema của người dùng
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products", // Tham chiếu đến schema của sản phẩm
          // required: true,
        },
        quantity: {
          type: Number,
          // required: true,
        },
      },
    ],
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    district: {
      type: String,
    },
    ward: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model("Order", orderSchema);
