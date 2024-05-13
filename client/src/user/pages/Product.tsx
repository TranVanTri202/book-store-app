import "../../asset/style/product.css";

import { Row, Col, Button, Rate, Checkbox } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../Redux/store";
import { ProductType, fetchDataProducts } from "../../Redux/Slice/ProductSlice";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { showMessage } from "../utils/message";
import Directional from "../components/Directional/Directional";
import { formatNumber } from "../utils/formatNumber";
import listMenu from "../config/listMenuConfig";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const [selectedFilters, setSelectedFilters] = useState<any>({
    sachthieunhi: false,
    sachtamlitinhcam: false,
    sachvientuong: false,
    sachcamhung: false,
    "20to50": false,
    "50to100": false,
    "100to200": false,
  });

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedFilters({
      ...selectedFilters,
      [id]: !selectedFilters[id],
    });
  };

  const filterProducts = data.filter((product) => {
    const isAnyCategorySelected = Object.values(selectedFilters).some(
      (filter) => filter
    );

    const isProductCategorySelected = Object.entries(selectedFilters).some(
      ([key, value]) => {
        return value && product.category === listMenu.category[key];
      }
    );

    // Lọc theo giá nếu checkbox giá được chọn
    if (
      selectedFilters["20to50"] &&
      product.price < 20000 &&
      product.price > 50000
    ) {
      return false;
    }
    if (
      selectedFilters["50to100"] &&
      product.price < 50000 &&
      product.price > 100000
    ) {
      return false;
    }
    if (
      selectedFilters["100to200"] &&
      product.price < 100000 &&
      product.price > 200000
    ) {
      return false;
    }

    // Nếu không có loại sách nào được chọn, trả về true cho tất cả các sản phẩm
    if (!isAnyCategorySelected) {
      return true;
    }

    return isProductCategorySelected;
  });

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);
  return (
    <>
      <Directional directional="Sản phẩm" />

      <div className="content-product">
        <Row gutter={20}>
          <Col md={{ span: 5 }} xs={{ span: 24 }}>
            <div className="list-menu">
              <h3>Loại Sách</h3>
              <Row>
                {Object.entries(listMenu.category).map(
                  ([key, value], index) => (
                    <Col
                      md={{ span: 24 }}
                      xs={{ span: 12 }}
                      className="checkbox-container"
                      key={index}
                    >
                      <Checkbox
                        className="abc"
                        id={key}
                        onChange={() => handleCheckboxChange(key)}
                      />
                      <label htmlFor={key}>{value} </label>
                    </Col>
                  )
                )}
              </Row>
              <h3>Giá Tiền</h3>
              {Object.entries(listMenu.price).map(([key, value], index) => (
                <div className="checkbox-container" key={index}>
                  <Checkbox id={key} />
                  <label htmlFor={key}>{value}</label>
                </div>
              ))}
            </div>
          </Col>

          {/* list product */}
          <Col md={{ span: 19 }} xs={{ span: 24 }}>
            <Row gutter={16}>
              {filterProducts.map((product, index) => {
                return (
                  <Col className="card-products page-product" key={index}>
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
                          Tên sách:{" "}
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
