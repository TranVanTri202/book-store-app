import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Directional from "../components/Directional/Directional";
import { ProductType, fetchDataProducts } from "../../Redux/Slice/ProductSlice";
import "../../asset/style/detailproduct.css";
import { Button, Col, Rate, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import Slider from "react-slick";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { addToCart } from "../../Redux/Slice/CartSlice";
import { formatNumber } from "../utils/formatNumber";
import { showMessage } from "../utils/message";
import { apiConfig } from "../config/apiConfig";

const DetailProduct = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState<ProductType>();

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${apiConfig.product.detailApi}${productId}`
        );
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: windowWidth < 600 ? 3 : 6,
    slidesToScroll: windowWidth < 600 ? 3 : 6,
  };
  return (
    <>
      <Directional
        directional={`Chi tiết sản phẩm > Sách ${productDetail?.name}`}
      />
      <Row className="detail-product">
        <Col md={{ span: 9 }} xs={{ span: 24 }}>
          <img className="img-detail" src={productDetail?.image} alt="" />
        </Col>
        <Col
          className="information-detail-product"
          md={{ span: 15 }}
          xs={{ span: 24 }}
        >
          <div>
            <h3>{productDetail?.name} </h3>
            <p>
              Thể loại: <span>{productDetail?.category}</span>{" "}
            </p>
            <p>
              Tên tác giả: <span>{productDetail?.author}</span>
            </p>
            <p>Chính sách đổi trả: Đổi trả sản phẩm trong 30 ngày</p>
            <p>Nội dung: {productDetail?.description}</p>
            <span className="rate-product">
              <Rate allowHalf disabled defaultValue={5} />
            </span>
            {productDetail && <h2>{formatNumber(productDetail.price)}</h2>}
          </div>
          <Button
            onClick={() => handleAddToCart(productDetail!)}
            className="btn-add-product-detail"
          >
            Thêm vào giỏ hàng
          </Button>
        </Col>
      </Row>
      <div className="suggest suggest-detail">
        <h2>CÓ THỂ BẠN ĐANG TÌM</h2>

        <Slider {...settings}>
          {data.map((product, index) => {
            if (product.category === (productDetail?.category || "")) {
              return (
                <div key={index}>
                  <Row>
                    <Col className="card-products">
                      <img
                        style={{ width: "100%" }}
                        src={product.image}
                        alt="img-product"
                        onClick={() =>
                          navigate(`/detailProduct/${product._id}`)
                        }
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
                          onClick={() =>
                            navigate(`/detailProduct/${product._id}`)
                          }
                        >
                          <EyeOutlined />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </div>
    </>
  );
};

export default DetailProduct;
