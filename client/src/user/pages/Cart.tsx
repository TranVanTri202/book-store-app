import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Button, Col, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import { removeFromCart } from "../../Redux/Slice/CartSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleRemoveProduct = (productId: string) => {
    //xóa sản phẩm khỏi giỏ hàng
    dispatch(removeFromCart(productId));
  };

  const handleIncrease = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index: number) => {
    const newQuantities = [...quantities];
    // Kiểm tra nếu quantity > 1 thì mới giảm
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  useEffect(() => {
    // Tính tổng giá trị của tất cả các sản phẩm trong giỏ hàng
    const newTotalPrice = products.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [products, quantities]);

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
            {products.map((item, index) => (
              <div className="item-cart">
                <div className="product-body-cart">
                  <div className="img-cart">
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>
                <div>
                  <p>{formatNumber(item.price)}</p>
                </div>
                <div>
                  <button onClick={() => handleDecrease(index)}>-</button>
                  {quantities[index]}
                  <button onClick={() => handleIncrease(index)}>+</button>{" "}
                </div>
                <div>{formatNumber(item.price * quantities[index])}</div>
                <div>
                  <DeleteOutlined
                    onClick={() => handleRemoveProduct(item._id)}
                    className="btn-delete-item-cart"
                  />
                </div>
              </div>
            ))}
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
