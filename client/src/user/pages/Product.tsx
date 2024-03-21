import { Row, Col } from "antd/";
import ListMenu from "../components/ListMenu/ListMenu";
const Product = () => {
  return (
    <>
      <div className="directional">
        <Row>
          <Col>
            Trang Chủ &#62; <b>Sản phẩm</b>
          </Col>
        </Row>
      </div>
      <div className="content-product">
        <Row gutter={5}>
          <Col span={5}>
            {" "}
            <ListMenu />
          </Col>
          <Col span={19}>assad</Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
