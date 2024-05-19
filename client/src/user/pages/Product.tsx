import "../../asset/style/product.css";

import { Row, Col, Button, Rate, Checkbox, Select } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../Redux/store";
import { ProductType, fetchDataProducts } from "../../Redux/Slice/ProductSlice";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { showMessage } from "../utils/message";
import Directional from "../components/Directional/Directional";
import { formatNumber } from "../utils/formatNumber";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("Mặc định");

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const handleCategoryChange = (e: any) => {
    const { id, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, id] : prev.filter((category) => category !== id)
    );
  };

  const handlePriceRangeChange = (e: any) => {
    const { id, checked } = e.target;
    setSelectedPriceRange((prev) =>
      checked ? [...prev, id] : prev.filter((range) => range !== id)
    );
  };

  const getFilteredProducts = () => {
    let filteredProducts = [...data];

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedPriceRange.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.price;
        return selectedPriceRange.some((range) => {
          if (range === "10-50") return price >= 10000 && price <= 50000;
          if (range === "50-100") return price >= 50000 && price <= 100000;
          if (range === "100-150") return price >= 100000 && price <= 150000;
          if (range === ">150") return price > 150000;
          return false;
        });
      });
    }

    if (sortOrder === "Giá tăng dần") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Giá giảm dần") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  return (
    <>
      <Directional directional="Sản phẩm" />

      <div className="content-product">
        <Row gutter={20}>
          <Col md={{ span: 5 }} xs={{ span: 24 }}>
            <div className="list-menu">
              <h3>Loại Sách</h3>
              <Row>
                <Col
                  md={{ span: 24 }}
                  xs={{ span: 12 }}
                  className="checkbox-container"
                >
                  <Checkbox
                    className="abc"
                    id="Sách Khoa Học Viễn Tưởng"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="Sách Khoa Học Viễn Tưởng">
                    Khoa học viễn tưởng{" "}
                  </label>
                </Col>
                <Col
                  md={{ span: 24 }}
                  xs={{ span: 12 }}
                  className="checkbox-container"
                >
                  <Checkbox
                    className="abc"
                    id="Sách Tâm Lí, Tình Cảm"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="Sách Tâm Lí, Tình Cảm">
                    Tâm Lí, Tình Cảm
                  </label>
                </Col>
                <Col
                  md={{ span: 24 }}
                  xs={{ span: 12 }}
                  className="checkbox-container"
                >
                  <Checkbox
                    className="abc"
                    id="Sách Truyền Cảm Hứng"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="Sách Truyền Cảm Hứng">Truyền Cảm Hứng</label>
                </Col>
                <Col
                  md={{ span: 24 }}
                  xs={{ span: 12 }}
                  className="checkbox-container"
                >
                  <Checkbox
                    className="abc"
                    id="Sách Thiếu Nhi"
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor="Sách Thiếu Nhi">Thiếu Nhi</label>
                </Col>
              </Row>
              <h3>Giá Tiền</h3>

              <div className="checkbox-container">
                <Checkbox id="10-50" onChange={handlePriceRangeChange} />
                <label htmlFor="10-50">10.000 - 50.000</label>
              </div>
              <div className="checkbox-container">
                <Checkbox id="50-100" onChange={handlePriceRangeChange} />
                <label htmlFor="50-100">50.000 - 100.000</label>
              </div>
              <div className="checkbox-container">
                <Checkbox id="100-150" onChange={handlePriceRangeChange} />
                <label htmlFor="100-150">100.000 - 150.000</label>
              </div>
              <div className="checkbox-container">
                <Checkbox id=">150" onChange={handlePriceRangeChange} />
                <label htmlFor=">150">Hơn 150.000</label>
              </div>
            </div>
          </Col>

          {/* list product */}
          <Col md={{ span: 19 }} xs={{ span: 24 }}>
            <Row style={{ margin: "15px 0" }} align="middle">
              <span>Sắp xếp theo :</span>
              <Select
                className="select-option-price"
                defaultValue="Mặc định"
                options={[
                  { value: "Mặc định", label: "Mặc định" },
                  { value: "Giá tăng dần", label: "Giá tăng dần" },
                  { value: "Giá giảm dần", label: "Giá giảm dần" },
                ]}
                onChange={(value) => setSortOrder(value)}
              />
            </Row>
            <Row gutter={16}>
              {getFilteredProducts().map((product, index) => {
                return (
                  <Col
                    className="card-products"
                    key={index}
                    md={{ span: 6 }}
                    xs={{ span: 12 }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={product.image}
                      alt="img-product"
                    />
                    <div className="information-book">
                      <span className="rate-product">
                        <Rate allowHalf disabled defaultValue={5} />
                      </span>
                      <div className="name-book">
                        <span
                          onClick={() =>
                            navigate(`/detailProduct/${product._id}`)
                          }
                        >
                          {/* Tên sách:{" "} */}
                        </span>
                        {product.name}
                      </div>
                      <div className="price">
                        {formatNumber(product.price)}
                        <span className="old-price">
                          {formatNumber(
                            product.price + product.price * (20 / 100)
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="choose-btn-product">
                      <Button onClick={() => handleAddToCart(product)}>
                        <ShoppingOutlined />
                      </Button>
                      <Button
                        onClick={() => {
                          navigate(`/detailProduct/${product._id}`);
                        }}
                      >
                        <EyeOutlined />
                      </Button>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
