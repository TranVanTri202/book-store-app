import { Button, Input, Row } from "antd";
import Directional from "../components/Directional/Directional";
import "../../asset/style/checkout.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { formatNumber } from "../utils/formatNumber";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

const Checkout = () => {
  const data = useSelector((state: RootState) => state.cart.dataProduct);

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
  }>(() => calculateQuantities(data));

  useEffect(() => {
    setProductQuantities(calculateQuantities(data));
  }, [data]);

  const totalPrice = useMemo(() => {
    return Object.keys(productQuantities).reduce((acc, productId) => {
      const quantity = productQuantities[productId];
      const product = data.find((p) => p._id === productId);
      if (product) {
        return acc + product.price * quantity;
      }
      return acc;
    }, 0);
  }, [data, productQuantities]);

  return (
    <>
      <Directional directional="Thanh toán" />

      <div className="address">
        <h3>Địa chỉ giao hàng</h3>
        <div className="information-address">
          <div className=" infor-checkout">
            <label htmlFor="">Họ và tên người nhận:</label>
            <Input className="input-infor-checkout" />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Email:</label>
            <Input className="input-infor-checkout" />
          </div>
          <div className="infor-checkout">
            <label htmlFor="">Số điện thoại:</label>
            <Input className="input-infor-checkout" />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Quận/Huyện:</label>
            <Input className="input-infor-checkout" />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Phường/Xã:</label>
            <Input className="input-infor-checkout" />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Địa chỉ nhận hàng</label>
            <Input className="input-infor-checkout" />
          </div>
        </div>
      </div>
      <div className="Transport">
        <h3>Phương thức thanh toán</h3>
        <p>Quý khách vui lòng thanh toán sau khi nhận hàng</p>
      </div>

      <div className="oder">
        <h3>Kiểm tra lại đơn hàng</h3>
        {Object.keys(productQuantities).map((productId, index) => {
          const quantity = productQuantities[productId];
          const product = data.find((p) => p._id === productId);
          if (!product) return null;
          return (
            <div key={index} className="item-cart">
              <div className="product-body-cart">
                <div className="img-cart">
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <p>{product.name}</p>
                </div>
              </div>
              <div>{quantity}</div>
              <div style={{ color: "#c92127", border: "none" }}>
                <p>{formatNumber(product.price * quantity)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Row className="footer-checkout total">
        <h3>
          Tổng tiền : <span>{formatNumber(totalPrice)}</span>
        </h3>
      </Row>
      <Row className="footer-checkout">
        <Button className="btn-submit-checkout">Xác nhận thanh toán</Button>
      </Row>
    </>
  );
};

export default Checkout;
