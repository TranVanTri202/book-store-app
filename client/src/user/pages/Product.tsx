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
import ModelDetail from "../components/Modal/ModalDetail";
import { formatNumber } from "../utils/formatNumber";
import ListMenu from "../config/ListMenuConfig";

const Product = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  const [selectedFilters, setSelectedFilters] = useState<any>({
    sachthieunhi: false,
    sachtamlitinhcam: false,
    sachvientuong: false,
    sachcamhung: false,
    "20to50": false,
    "50to100": false,
    "100to200": false,
  });

  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCancelModal = () => {
    setOpenModal(false);
  };

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
    // Nếu không có loại sách nào được chọn, trả về true cho tất cả các sản phẩm
    if (!isAnyCategorySelected) {
      return true;
    }
    // Lọc theo loại sách
    const isProductCategorySelected = Object.entries(selectedFilters).some(
      ([key, value]) => {
        return value && product.category === ListMenu.category[key];
      }
    );

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
          <Col span={5}>
            <div className="list-menu">
              <h3>Loại Sách</h3>
              {Object.entries(ListMenu.category).map(([key, value], index) => (
                <div className="checkbox-container" key={index}>
                  <Checkbox
                    className="abc"
                    id={key}
                    onChange={() => handleCheckboxChange(key)}
                  />
                  <label htmlFor={key}>{value} </label>
                </div>
              ))}
              <h3>Giá Tiền</h3>
              {Object.entries(ListMenu.price).map(([key, value], index) => (
                <div className="checkbox-container" key={index}>
                  <Checkbox id={key} />
                  <label htmlFor={key}>{value}</label>
                </div>
              ))}
            </div>
          </Col>

          {/* list product */}
          <Col span={19}>
            <Row gutter={16}>
              {filterProducts.map((product, index) => {
                return (
                  <Col className="card-products" span={6} key={index}>
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
                        {" "}
                        <span>Tên sách: </span>
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
                          setSelectedProduct(product);
                          setOpenModal(true);
                        }}
                      >
                        <EyeOutlined />
                      </Button>
                    </div>
                  </Col>
                );
              })}
            </Row>
            {selectedProduct && (
              <ModelDetail
                isModalOpen={openModal}
                handleCancel={handleCancelModal}
                product={selectedProduct}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
