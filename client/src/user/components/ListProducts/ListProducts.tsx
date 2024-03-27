import { Row, Col, Button } from "antd";
import "../../components/ListProducts/ListProducts.css";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
const ListProducts = () => {
  return (
    <>
      <Row gutter={16}>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              50.000 VND
              <span className="old-price">60.000 đ</span>
            </div>
          </div>
          <div className="choose-btn-product">
            <Button>
              <ShoppingOutlined />
            </Button>
            <Button>
              <EyeOutlined />
            </Button>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
        <Col className="card-products" span={6}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.chanhtuoi.com/uploads/2018/05/nhung-cuon-sach-hay-6.jpg"
            alt=""
          />
          <div className="information-book">
            <div className="author">
              <span>Tác giá: </span>Tran Van Tri
            </div>
            <div className="name-book">
              {" "}
              <span>Tên sách: </span>Dac nhan Tam
            </div>
            <div className="price">
              {" "}
              <span>Giá: </span>50.000 VND
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ListProducts;
