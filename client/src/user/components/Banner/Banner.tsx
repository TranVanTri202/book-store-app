import { Col, Row } from "antd";
import "../Banner/Banner.css";
import {
  CarOutlined,
  ReloadOutlined,
  CustomerServiceOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner1">
          <img
            src="https://picnie.com/v1/data/new_8922_230201091403.jpg"
            alt=""
          />
          {/* <div className="typing-effect">
            <span>C</span>
            <span>h</span>
            <span>à</span>
            <span>o</span>
            <span>m</span>
            <span>ừ</span>
            <span>n</span>
            <span>g </span>
            <br />
            <span>b</span>
            <span>ạ</span>
            <span>n</span>
            <span></span>
            <span>đ</span>
            <span>ế</span>
            <span>n </span>
            <span></span>
            <span>v</span>
            <span>ớ</span>
            <span>i </span>
            <br />
            <span>TVT </span>
            <span>S</span>
            <span>h</span>
            <span>o</span>
            <span>p</span>
          </div> */}
        </div>
      </div>
      <Row className="utilities" justify="space-between" gutter={16}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          className="payment box-utilities"
        >
          <img
            src="https://nokshi-2.myshopify.com/cdn/shop/files/banner-1.png?v=1614763780"
            alt=""
          />
        </Col>

        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          className="payment box-utilities"
        >
          <img
            src="https://nokshi-2.myshopify.com/cdn/shop/files/banner-2.png?v=1614763805"
            alt=""
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 8 }}
          className="payment box-utilities"
        >
          <img
            src="https://nokshi-2.myshopify.com/cdn/shop/files/banner-3.png?v=1614763824"
            alt=""
          />
        </Col>
      </Row>
    </>
  );
};

export default Banner;
