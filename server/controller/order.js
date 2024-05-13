import { OrderModel } from "../models/OrderModel.js";
import User from "../models/UserModel.js";

export const createOrder = async (req, res) => {
  try {
    const {
      userId,
      products,
      fullName,
      email,
      phone,
      district,
      ward,
      address,
    } = req.body;

    // Create a new order document
    const newOrder = new OrderModel({
      userId,
      products,
      fullName,
      email,
      phone,
      district,
      ward,
      address,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();
    await User.findByIdAndUpdate(userId, { $push: { orders: savedOrder._id } });
    res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
export const getAllOrders = async (req, res) => {
  try {
    // Sử dụng phương thức find() để lấy tất cả các đơn hàng
    const orders = await OrderModel.find();

    res.status(200).json({ success: true, orders: orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
export const getOrderByID = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findById(id);
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAllOrders = async (req, res) => {
  try {
    // Xóa tất cả các đơn hàng từ cơ sở dữ liệu
    await OrderModel.deleteMany();

    res
      .status(200)
      .json({ success: true, message: "All orders deleted successfully" });
  } catch (error) {
    console.error("Error deleting orders:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
