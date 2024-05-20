import {
  MailOutlined,
  WhatsAppOutlined,
  HomeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  SendOutlined,
} from "@ant-design/icons";
import "./ContactBottom.css";
import { Row, Col } from "antd";
import logo from "../../../asset/img/Logo2.png";
const ContactBottom = () => {
  return (
    <>
      <div className="footer">
        <Row justify="space-between" className="footer-info" gutter={16}>
          <Col span={8}>
            <Row align="middle">
              <Col span={2} className="icon-footer">
                {" "}
                <HomeOutlined />
              </Col>
              <Col>
                <h2>Địa chỉ</h2>
                <p>20 Đường Bầu Trâm xã Trung An H.Củ Chi</p>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row align="middle">
              <Col span={2} className="icon-footer">
                {" "}
                <MailOutlined />
              </Col>
              <Col>
                <h2>Email</h2>
                <p>tranvantri@gmail.com</p>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row align="middle">
              <Col span={2} className="icon-footer">
                {" "}
                <WhatsAppOutlined />
              </Col>
              <Col>
                <h2>Số điện thoại</h2>
                <p>hotline:038765312</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row gutter={20}>
          <Col span={8}>
            <img src={logo} alt="" width={150} />
            <p style={{ margin: "10px 0" }}>
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
              eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
              ipsum dolor sit amet.
            </p>

            <h2>Follow Us</h2>
            <span className="icon-network icon-tiktok">
              <TikTokOutlined />
            </span>
            <span className="icon-network icon-insta">
              {" "}
              <InstagramOutlined />
            </span>
            <span className="icon-network icon-facebook">
              <FacebookOutlined />
            </span>
          </Col>
          <Col span={8}>
            <h2 className="footer-widget-heading">Userful Links</h2>
            <ul>
              <li>
                {" "}
                <span>Trang Chủ</span>
              </li>
              <li>
                <span>Sản Phẩm</span>
              </li>
              <li>
                <span>Liên Hệ</span>
              </li>
              <li>
                <span>Blog</span>
              </li>
            </ul>
          </Col>
          <Col span={8} className="input-send-footer">
            <h2 className="footer-widget-heading">Subscribe</h2>
            <p>
              Đừng bỏ lỡ việc đăng ký các nguồn cấp dữ liệu mới của chúng tôi,
              vui lòng điền vào biểu mẫu bên dưới.
            </p>
            {/* <input type="email" placeholder="Email address" /> */}
            <button>
              <SendOutlined />
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactBottom;
