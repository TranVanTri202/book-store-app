import { Button, Input, Row } from "antd";
import Directional from "../components/Directional/Directional";
import "../../asset/style/checkout.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { formatNumber } from "../utils/formatNumber";

const Checkout = () => {
  const data = useSelector((state: RootState) => state.cart.dataProduct);

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
        {data.map((item) => (
          <div className="item-cart">
            <div className="product-body-cart">
              <div className="img-cart">
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
              </div>
            </div>
            <div>1</div>
            <div style={{ color: "#c92127", border: "none" }}>
              <p>{formatNumber(item.price)}</p>
            </div>
          </div>
        ))}
      </div>
      <Row
        style={{
          backgroundColor: "#FFF",
          padding: "15px 0",
          marginTop: "15px",
        }}
      >
        <Button className="btn-submit-checkout">Xác nhận thanh toán</Button>
      </Row>
    </>
  );
};

export default Checkout;
