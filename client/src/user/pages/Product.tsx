import { Row, Col } from "antd/";
import ListProducts from "../components/ListProducts/ListProducts";
import { Checkbox } from "antd";
import "../../asset/style/product.css";
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
        <Row gutter={20}>
          <Col span={5}>
            <div className="list-menu">
              <h3>Loại Sách</h3>
              <div className="checkbox-container">
                <Checkbox className="abc" id="sachthieunhi" />
                <label htmlFor="sachthieunhi">Sách Thiếu Nhi </label>
              </div>
              <div className="checkbox-container">
                <Checkbox className="abc" id="sachtamlitinhcam" />
                <label htmlFor="sachtamlitinhcam">Sách Tâm Lí, Tình Cảm</label>
              </div>
              <div className="checkbox-container">
                <Checkbox className="abc" id="sachvientuong" />
                <label htmlFor="sachvientuong">Sách Văn Học Viễn Tưởng </label>
              </div>
              <div className="checkbox-container">
                <Checkbox className="abc" id="sachcamhung" />
                <label htmlFor="sachcamhung">Sách Truyền Cảm Hứng</label>
              </div>

              <h3>Giá Tiền</h3>
              <div className="checkbox-container">
                <Checkbox id="20to50" />
                <label htmlFor="20to50">20.000đ - 50.000đ</label>
              </div>
              <div className="checkbox-container">
                <Checkbox id="50to100" />
                <label htmlFor="50to100">50.000đ - 100.000đ</label>
              </div>
              <div className="checkbox-container">
                <Checkbox id="100to200" />
                <label htmlFor="100to200">100.000đ - 200.000đ</label>
              </div>
            </div>
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
