import { Carousel, Col, Row } from "antd";
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <Carousel autoplay>
          <div className="banner1">
            <img
              src="https://picnie.com/v1/data/new_8922_230201091403.jpg"
              alt=""
            />
          </div>
          <div className="banner1">
            <img
              src="https://thaihabooks.com/wp-content/uploads/2022/06/Banner-Thang-6-UP-WEB.jpg"
              alt=""
            />
          </div>
          <div className="banner1">
            <img
              src="https://thaihabooks.com/wp-content/uploads/2018/06/banner-sach-ma_i-thang-6-2018-02-scaled.jpg.webp"
              alt=""
            />
          </div>
        </Carousel>
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
