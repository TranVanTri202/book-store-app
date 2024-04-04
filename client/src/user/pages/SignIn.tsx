import { Col, Row } from "antd";
import "../components/SignIn/SignIn.css";

const SignIn = () => {
  return (
    <>
      <div style={{ margin: "10px 0" }} className="directional">
        <Row style={{ backgroundColor: "#E7E7E7", padding: "10px" }}>
          <Col>
            <span style={{ color: "grey" }}>Trang Chủ</span> &#62;{" "}
            <b style={{ fontWeight: "600" }}>Đăng nhập/ Đăng ký</b>
          </Col>
        </Row>
      </div>
      <div className="form-login">
        <div className="heading-form-login">
          <span>Đăng nhập</span>
          <span>Đăng ký</span>
        </div>
        <div className="form-email">
          <label htmlFor="">Email</label> <br />
          <input type="email" placeholder="Nhập email của bạn" />
        </div>
        <div className="form-password">
          <label htmlFor="">Mật khẩu </label> <br />
          <input type="text" placeholder="Nhập mật khẩu" />
        </div>
        <p className="forgot-pass">Quên mật khẩu ?</p>
        <button className="btn-login">Đăng nhập</button>
      </div>
    </>
  );
};

export default SignIn;
