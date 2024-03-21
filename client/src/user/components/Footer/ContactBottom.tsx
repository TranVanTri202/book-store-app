import {
  MailOutlined,
  WhatsAppOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./ContactBottom.css";
import { Row, Col } from "antd";
const ContactBottom = () => {
  return (
    <>
      <div className="footer">
        <Row justify="space-between">
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
                <WhatsAppOutlined />
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
                <h2>Địa chỉ</h2>
                <p>20 Đường Bầu Trâm xã Trung An H.Củ Chi</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactBottom;
