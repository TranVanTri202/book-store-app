import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Button, Col, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../Redux/Slice/CartSlice";
import "../../asset/style/cart.css";
import Directional from "../components/Directional/Directional";
import { formatNumber } from "../utils/formatNumber";
const Cart = () => {
  const products: ProductType[] = useSelector(
    (state: RootState) => state.cart.dataProduct
  );

  return (
    <>
      {products.length === 0 ? (
        emptyCart()
      ) : (
        <CartProduct products={products} />
      )}
    </>
  );
};

const CartProduct: React.FC<{ products: ProductType[] }> = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Tính số lượng sản phẩm duy nhất trong giỏ hàng
  const calculateQuantities = (products: ProductType[]) => {
    const productQuantities: { [key: string]: number } = {};
    products.forEach((product) => {
      productQuantities[product._id] =
        (productQuantities[product._id] || 0) + 1;
    });
    return productQuantities;
  };

  const [productQuantities, setProductQuantities] = useState<{
    [key: string]: number;
  }>(() => calculateQuantities(products));

  useEffect(() => {
    setProductQuantities(calculateQuantities(products));
  }, [products]);

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrease = (productId: string) => {
    dispatch(addToCart(products.find((product) => product._id === productId)!));
  };

  const handleDecrease = (productId: string) => {
    const quantity = productQuantities[productId];
    if (quantity > 1) {
      dispatch(decreaseQuantity(productId)); // Gọi hàm dispatch để gửi action decreaseQuantity đến Redux store
      const newQuantities = { ...productQuantities };
      newQuantities[productId] -= 1;
      setProductQuantities(newQuantities);
    }
  };

  const totalPrice = useMemo(() => {
    return Object.keys(productQuantities).reduce((acc, productId) => {
      const quantity = productQuantities[productId];
      const product = products.find((p) => p._id === productId);
      if (product) {
        return acc + product.price * quantity;
      }
      return acc;
    }, 0);
  }, [products, productQuantities]);

  return (
    <>
      <Directional directional="Giỏ hàng" />
      <Row gutter={2} justify="space-between">
        <Col span={14}>
          <Row className="header-card-item">
            <Col span={11}>Sản phẩm</Col>
            <Col span={4}>Giá tiền</Col>
            <Col span={4}>Số lượng</Col>
            <Col span={4}>Thành tiền</Col>
            <Col span={1}></Col>
          </Row>
          <div className="body-card-item">
            {Object.keys(productQuantities).map((productId) => {
              const quantity = productQuantities[productId];
              const product = products.find((p) => p._id === productId);
              if (!product) return null;
              return (
                <div className="item-cart" key={product._id}>
                  <div className="product-body-cart">
                    <div className="img-cart">
                      <img src={product.image} alt="" />
                    </div>
                    <div>
                      <p>{product.name}</p>
                    </div>
                  </div>
                  <div>
                    <p>{formatNumber(product.price)}</p>
                  </div>
                  <div>
                    <button onClick={() => handleDecrease(product._id)}>
                      -
                    </button>
                    {quantity}
                    <button onClick={() => handleIncrease(product._id)}>
                      +
                    </button>{" "}
                  </div>
                  <div>{formatNumber(product.price * quantity)}</div>
                  <div>
                    <DeleteOutlined
                      onClick={() => handleRemoveProduct(product._id)}
                      className="btn-delete-item-cart"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
        <Col span={8}>
          <div className="cart-total-right">
            <div>
              <span>Thành tiền</span>
              <span>{formatNumber(totalPrice)}</span>
            </div>
            <div>
              <span>Tổng số tiền (bao gồm VAT)</span>
              <span>{formatNumber(totalPrice)}</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/checkout")}
                className="btn-buy-total-right"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

// khi không có giỏ gì trong giỏ hàng
const emptyCart = () => {
  return (
    <>
      <div className="emptyCart">
        <div className="">
          <img
            src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
            alt=""
          />
        </div>
        <span>Chưa có sản phẩm trong giỏ hàng của bạn.</span> <br />
        <Link to="/products">
          <Button className="btn-back-product">Mua sắm ngay</Button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
