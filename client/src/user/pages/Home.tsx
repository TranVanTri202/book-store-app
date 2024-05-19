import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Rate, Row } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { useEffect, useState } from "react";
import { ProductType, fetchDataProducts } from "../../Redux/Slice/ProductSlice";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { formatNumber } from "../utils/formatNumber";
import Banner from "../components/Banner/Banner";
import "../../asset/style/home.css";
import { showMessage } from "../utils/message";
import { useNavigate } from "react-router-dom";
import bannerNewbook from "../../asset/img/banner-new-book.png";
const Home = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };

  useEffect(() => {
    dispatch(fetchDataProducts());
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [dispatch]);

  const latestProducts = data // lấy 8 sản phẩm được thêm gần nhất đưa vào danh sách sản phẩm mới
    .filter((product) => product.createdAt)
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.createdAt!);
      const dateB = new Date(b.createdAt!);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 8);

  const shuffleArray = (array: ProductType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Get 12 random products from the data
  const randomProducts = shuffleArray([...data]).slice(0, 12);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: windowWidth < 600 ? 3 : 6,
    slidesToScroll: windowWidth < 600 ? 3 : 6,
  };
  return (
    <>
      <Banner />
      <div className="home outstanding">
        <h2>Sách Nổi Bật</h2>

        <Row>
          {randomProducts.map((product, index) => (
            <Col
              key={index}
              className="card-products"
              xs={{ span: 12 }}
              md={{ span: 4 }}
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
                    onClick={() => navigate(`/detailProduct/${product._id}`)}
                  >
                    {/* Tên sách:{" "} */}
                  </span>
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
      <div className="home new-products">
        <h2>Sách Mới</h2>

        <Row>
          <Col md={{ span: 8 }}>
            <div className="banner-new-products">
              <img src={bannerNewbook} alt="" />
              <div className="text-banner-new-product">
                <h3>Sách Mới Giảm Giá</h3>
                <h1> Lên Đến - 20%</h1>
                <h3>Cho mỗi đơn hàng </h3>
              </div>
            </div>
          </Col>
          <Col md={{ span: 16 }}>
            <Row>
              {latestProducts.map((product, index) => (
                <Col
                  key={index}
                  className="card-products"
                  xs={{ span: 12 }}
                  md={{ span: 6 }}
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
                      onClick={() => navigate(`/detailProduct/${product._id}`)}
                    >
                      <EyeOutlined />
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <div className="home suggest">
        <h2>Gợi Ý Hôm Nay</h2>

        <Slider {...settings}>
          {data.map((product, index) => (
            <div key={index}>
              <Row>
                <Col
                  className="card-products"
                  // xs={{ span: 8 }}
                  // md={{ span: 4 }}
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
    </>
  );
};

export default Home;
