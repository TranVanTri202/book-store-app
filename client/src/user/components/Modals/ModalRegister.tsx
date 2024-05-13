import React, { useState } from "react";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import "../Modals/Modal.css";
import axios from "axios";
import { showMessage } from "../../utils/message";
import { apiConfig } from "../../config/apiConfig";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ModalRegister: React.FC<ModalProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      showMessage("warning", "Mật khẩu chưa trùng khớp");
      return null;
    }
    axios
      .post(apiConfig.User.register, {
        username,
        password,
      })
      .then((response) => {
        // Xử lý phản hồi từ server khi đăng ký thành công
        showMessage("success", `${response.data.message}`);
        onClose();
      })
      .catch((error) => {
        // Xử lý lỗi khi đăng ký thất bại
        showMessage("error", `${error.response.data.message}`);
      });
  };

  return (
    <>
      <Modal open={open} onCancel={onClose} footer={null}>
        <div className="form-auth">
          <h2>Đăng ký</h2>
          <Input
            placeholder="Email đăng nhập"
            prefix={<UserOutlined />}
            size="large"
            className="input-form-auth"
            value={username}
            onChange={handleUsernameChange}
            type="email"
          />
          <Input
            placeholder="Mật khẩu"
            prefix={<KeyOutlined />}
            type="password"
            size="large"
            className="input-form-auth"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            placeholder="Xác nhận mật khẩu"
            prefix={<KeyOutlined />}
            type="password"
            size="large"
            className="input-form-auth"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <Button className="btn-login" onClick={handleRegister}>
            Đăng ký
          </Button>
          <div className="footer-modal">
            Bạn đã có tài khoản ? <span>Đăng nhập</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalRegister;
