import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Modal, Row } from "antd";
import "../Modals/Modal.css";
import axios from "axios";
import { showMessage } from "../../utils/message";
import ModalRegister from "./ModalRegister";
import { apiConfig } from "../../config/apiConfig";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ModalLogin: React.FC<ModalProps> = ({ open, onClose }) => {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const handleCloseRegister = () => {
    setOpenModalRegister(!openModalRegister);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    axios
      .post(apiConfig.User.login, {
        username,
        password,
      })
      .then((response) => {
        // Xử lý phản hồi từ server khi đăng nhập thành công

        showMessage("success", "Đăng nhập thành công");
        localStorage.setItem("token", response.data.token);
        const decodedToken = jwtDecode(response.data.token) as { role: string };
        if (decodedToken.role === "admin") {
          window.location.href = "/admin/dashboard";
        }
        onClose();
      })
      .catch((error) => {
        // Xử lý lỗi khi đăng nhập thất bại
        showMessage("error", `${error.response.data.message}`);
        console.error(error);
      });
  };

  return (
    <>
      <Modal open={open} onCancel={onClose} footer={null}>
        <div className="form-auth">
          <h3>Đăng nhập</h3>
          <h2>Chào Mừng Bạn</h2>
          <Input
            placeholder="Email đăng nhập"
            prefix={<UserOutlined />}
            size="large"
            className="input-form-auth"
            value={username}
            onChange={handleUsernameChange}
          />
          <Input
            placeholder="Mật khẩu"
            prefix={<KeyOutlined />}
            type="password"
            size="large"
            className="input-form-auth"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyEnter}
          />
          <p>
            <Checkbox /> Nhớ mật khẩu
          </p>
          <Row justify="center">
            <Button className="btn-login" onClick={handleLogin}>
              Đăng nhập
            </Button>
          </Row>
          <div className="footer-modal">
            Bạn chưa có tài khoản ?{" "}
            <span onClick={() => setOpenModalRegister(true)}>Đăng ký ngay</span>
          </div>
        </div>
      </Modal>
      <ModalRegister open={openModalRegister} onClose={handleCloseRegister} />
    </>
  );
};

export default ModalLogin;
