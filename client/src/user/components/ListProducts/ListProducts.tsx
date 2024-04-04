import { Row, Col, Button, Rate } from "antd";
import "../../components/ListProducts/ListProducts.css";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import {
  ProductType,
  fetchDataProducts,
} from "../../../Redux/Slice/ProductSlice";
import { addToCart } from "../../../Redux/Slice/CartSlice";
const ListProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const formatNumber = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <Row gutter={16}>
        {data.map((product) => {
          return (
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
                <Button>
                  <ShoppingOutlined onClick={() => handleAddToCart(product)} />
                </Button>
                <Button>
                  <EyeOutlined />
                </Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ListProducts;
