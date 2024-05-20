import { Col, Row } from "antd";
import "../Banner/Banner.css";
import bannerImg from "../../../asset/img/banner-main.png";
const Banner = () => {
  return (
    <>
      <div className="banner">
        {/* <div className="banner1">
          <img
            src="https://picnie.com/v1/data/new_8922_230201091403.jpg"
            alt=""
          />
        </div> */}
        <div className="banner-main">
          <div className="banner-text">
            <h1>
              Bạn muốn đọc những <br /> quyển sách hay và được
              <br /> giao tận nhà ?
            </h1>
            <h4>Đừng lo, chúng tôi sẽ giúp bạn !</h4>
          </div>
          <img src={bannerImg} alt="" />
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
