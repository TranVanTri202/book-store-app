import { Row, Col } from "antd";
import "../../components/ListProducts/ListProducts.css";
import { useEffect } from "react";
import { useState } from "react";
const ListProducts = () => {
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 500); // Delay time in milliseconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Row gutter={16}>
        {showProducts && (
          <>
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
          </>
        )}
      </Row>
    </>
  );
};

export default ListProducts;
