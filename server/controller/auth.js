// controllers/authController.js
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

const secretKey = "yourSecretKey"; // Key bí mật cho JWT

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Tìm người dùng trong cơ sở dữ liệu
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Sai mật khẩu hoặc tên đăng nhập" });
    }

    // Kiểm tra mật khẩu
    if (password !== user.password) {
      return res
        .status(400)
        .json({ message: "Sai mật khẩu hoặc tên đăng nhập" });
    }

    // Tạo JWT token
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
        image: user.image,
        role: user.role,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const register = async (req, res) => {
  const { username, password, image, role } = req.body;

  try {
    // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Tên tài khoản đã tồn tại" });
    }

    // Tạo người dùng mới
    const newUser = new User({ username, password, image, role });
    await newUser.save();

    res.status(201).json({ message: "Đăng ký thành công" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
