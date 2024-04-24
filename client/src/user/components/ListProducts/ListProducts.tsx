import { Row, Col, Button, Rate } from "antd";
import "../../components/ListProducts/ListProducts.css";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import {
  ProductType,
  fetchDataProducts,
} from "../../../Redux/Slice/ProductSlice";
import { addToCart } from "../../../Redux/Slice/CartSlice";
import { formatNumber } from "../../utils/formatNumber";
import ModelDetail from "../Modal/ModalDetail";
import { showMessage } from "../../utils/message";
const ListProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCancelModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };
  return (
    <>
      <Row gutter={16}>
        {data.map((product) => {
          return (
            <>
              <Col className="card-products" span={6}>
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
                      {formatNumber(product.price + product.price * (20 / 100))}
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
            </>
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
    </>
  );
};

export default ListProducts;
