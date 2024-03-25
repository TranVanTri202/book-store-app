import { Row, Col } from "antd/";
import ListMenu from "../components/ListMenu/ListMenu";
import ListProducts from "../components/ListProducts/ListProducts";
const Product = () => {
  return (
    <>
      <div style={{ margin: "10px 0" }} className="directional">
        <Row style={{ backgroundColor: "#E7E7E7", padding: "10px" }}>
          <Col>
            <span style={{ color: "grey" }}>Trang Chủ</span> &#62;{" "}
            <b style={{ fontWeight: "600" }}>Sản phẩm</b>
          </Col>
        </Row>
      </div>
      <div className="content-product">
        <Row gutter={5}>
          <Col span={5}>
            {" "}
            <ListMenu />
          </Col>
          <Col span={19}>
            <ListProducts />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
