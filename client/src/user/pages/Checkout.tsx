import { Col, Row } from "antd";

const Checkout = () => {
  return <>
    <Row gutter={2}>
        <Col span={11}>
            <div className="form-infor-user">
                <h3>Thông tin đặt hàng</h3>
                
            </div>
        </Col>
        <Col span={11}>
            <div className="form checkout">

            </div>
        </Col>
    </Row>
  </>;
};

export default Checkout;
