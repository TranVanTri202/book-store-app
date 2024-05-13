import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import axios from "axios";
import { showMessage } from "../utils/message";
import { jwtDecode } from "jwt-decode";
import { apiConfig } from "../config/apiConfig";

const ChangePassword = () => {
  const token = localStorage.getItem("token");
  // State để lưu userId và kiểm tra xem đã được set hay chưa
  const [userId, setUserId] = useState("");
  const [isUserIdSet, setIsUserIdSet] = useState(false);
  // Nếu có token và userId chưa được set, thì giải mã token để lấy userId và đánh dấu đã set
  if (token && !isUserIdSet) {
    const decodedToken = jwtDecode(token) as { id: any };
    setUserId(decodedToken.id);
    setIsUserIdSet(true);
  }

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      showMessage("warning", "Mật khẩu mới chưa trùng nhau");
      return null;
    }
    try {
      const response = await axios.put(
        `${apiConfig.User.changePassword}${userId}`,
        {
          currentPassword,
          newPassword,
        }
      );
      showMessage("success", `${response.data.message}`);
      setConfirmPassword("");
      setNewPassword("");
      setCurrentPassword("");
    } catch (error) {
      showMessage("error", `Mật khẩu hiện tại chưa đúng`);
    }
  };

  return (
    <>
      <div className="profile-right">
        <h3>Thay đổi mật khẩu</h3>

        <Row align="middle" style={{ margin: "10px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Mật khẩu hiện tại:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0 20px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Mật khẩu mới:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0 20px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Xác nhận mật khẩu mới:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Button onClick={handleChangePassword} className="btn-update-profile">
            Cập nhật
          </Button>
        </Row>
      </div>
    </>
  );
};
export default ChangePassword;
