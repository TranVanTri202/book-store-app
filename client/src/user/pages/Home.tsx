import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Rate, Row } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { useEffect } from "react";
import { ProductType, fetchDataProducts } from "../../Redux/Slice/ProductSlice";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { formatNumber } from "../utils/formatNumber";
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import "../../asset/style/home.css";
import { showMessage } from "../utils/message";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const latestProducts = data // lấy 8 sản phẩm được thêm gần nhất đưa vào danh sách sản phẩm mới
    .filter((product) => product.createdAt)
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.createdAt!);
      const dateB = new Date(b.createdAt!);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 12);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <>
      <Banner />
      <div className="home new-products">
        <h2>Sản phẩm mới</h2>

        <Row>
          {latestProducts.map((product, index) => (
            <Col key={index} className="card-products" span={4}>
              <img
                style={{ width: "100%" }}
                src={product.image}
                alt="img-product"
                onClick={() => navigate(`/detailProduct/${product._id}`)}
              />
              <div className="information-book">
                <span className="rate-product">
                  <Rate allowHalf disabled defaultValue={5} />
                </span>
                <div className="name-book">
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
                  onClick={() => navigate(`/detailProduct/${product._id}`)}
                >
                  <EyeOutlined />
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="home suggest">
        <h2>Gợi ý hôm nay</h2>

        <Slider {...settings}>
          {data.map((product, index) => (
            <div key={index}>
              <Row>
                <Col className="card-products">
                  <img
                    style={{ width: "100%" }}
                    src={product.image}
                    alt="img-product"
                    onClick={() => navigate(`/detailProduct/${product._id}`)}
                  />
                  <div className="information-book">
                    <span className="rate-product">
                      <Rate allowHalf disabled defaultValue={5} />
                    </span>
                    <div className="name-book">
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
                      onClick={() => navigate(`/detailProduct/${product._id}`)}
                    >
                      <EyeOutlined />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </div>
      <Blog />
    </>
  );
};

export default Home;
