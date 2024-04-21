import { Col, Row } from "antd";

const Checkout = () => {
  return (
    <>
      <Row gutter={2}>
        <Col span={11}>
          <div className="form-infor-user">
            <h3>Thông tin, địa chỉ nhận hàng</h3>
          </div>
        </Col>
        <Col span={11}>
          <div className="form checkout">
            <h3>Thông tin sản phẩm đặt hàng</h3>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
