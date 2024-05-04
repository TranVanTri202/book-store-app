import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import "../../asset/style/home.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { useEffect } from "react";
import { ProductType, fetchDataProducts } from "../../Redux/Slice/ProductSlice";
import { Button, Col, Rate, Row } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { formatNumber } from "../utils/formatNumber";
const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const latestProducts = data // lấy 8 sản phẩm được thêm gần nhất
    .filter((product) => product.createdAt)
    .slice() // Tạo bản sao của mảng
    .sort((a, b) => {
      const dateA = new Date(a.createdAt!);
      const dateB = new Date(b.createdAt!);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 8);

  return (
    <>
      <Banner />
      <div className="new-products">
        <h2>Sản phẩm mới </h2>
        <Row gutter={16}>
          {latestProducts.map((product) => {
            return (
              <Col className="card-products">
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
                  <Button>
                    <EyeOutlined />
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="img-banner-sale">
        <img
          src="https://niche-18.woovinafree.com/wp-content/uploads/2018/10/banner-1.jpg"
          alt=""
        />
      </div>
      <Blog />
    </>
  );
};

export default Home;
