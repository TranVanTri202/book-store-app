/* eslint-disable jsx-a11y/iframe-has-title */
import { Col, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "../../asset/style/contact.css";
import Directional from "../components/Directional/Directional";
const Contact = () => {
  return (
    <>
      <Directional directional="Liên hệ" />
      <Row style={{ margin: "15px 0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4150499198927!2d106.62725477486977!3d10.856002857721226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529deaaaaaaab%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1711245106277!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Row>
      <Row gutter={12}>
        <Col span={12} className="contact-left-img">
          <h1>
            Hãy gửi cho chúng tôi mọi
            <br /> thắc mắc của bạn!
          </h1>
          <p>
            Mọi thắc mắc sẽ được đội ngủ chúng tôi phản hồi một cách nhanh chóng
          </p>
          <img
            src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"
            alt=""
            height={350}
          />
        </Col>
        <Col span={12}>
          <div className="contact-form">
            <Row>
              <input placeholder="Nhập tên của bạn" type="text" />
            </Row>
            <Row>
              <input placeholder="Nhập email của bạn" type="text" />
            </Row>
            <Row>
              <input placeholder="Nhập số điện thoại của bạn " type="text" />
            </Row>
            <Row>
              <textarea
                placeholder="Viết phản hồi vào đây"
                name=""
                id=""
                cols={50}
                rows={5}
              ></textarea>
            </Row>
            <button>
              Gửi <SendOutlined />
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
