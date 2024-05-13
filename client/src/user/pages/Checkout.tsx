import { Button, Input, Row } from "antd";
import Directional from "../components/Directional/Directional";
import "../../asset/style/checkout.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { formatNumber } from "../utils/formatNumber";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { showMessage } from "../utils/message";
import axios from "axios";
import ModalConfirm from "../components/Modals/ModalConfirm";

const Checkout = () => {
  // Lấy token từ local storage
  const token = localStorage.getItem("token");

  // State để lưu userId và kiểm tra xem đã được set hay chưa
  const [userId, setUserId] = useState("");
  const [isUserIdSet, setIsUserIdSet] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleCloseconfirm = () => {
    setOpenConfirm(!openConfirm);
  };
  // Nếu có token và userId chưa được set, thì giải mã token để lấy userId và đánh dấu đã set
  if (token && !isUserIdSet) {
    const decodedToken = jwtDecode(token) as { id: any };
    setUserId(decodedToken.id);
    setIsUserIdSet(true);
  }

  // State để lưu thông tin địa chỉ giao hàng
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    district: "",
    ward: "",
    address: "",
  });

  // Lấy danh sách sản phẩm từ Redux store
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

  // State để lưu số lượng sản phẩm duy nhất trong giỏ hàng
  const [productQuantities, setProductQuantities] = useState<{
    [key: string]: number;
  }>(() => calculateQuantities(data));

  // Khi danh sách sản phẩm thay đổi, cập nhật lại số lượng sản phẩm duy nhất
  useEffect(() => {
    setProductQuantities(calculateQuantities(data));
  }, [data]);

  // Tính tổng giá trị đơn hàng
  const totalPrice = Object.keys(productQuantities).reduce((acc, productId) => {
    const quantity = productQuantities[productId];
    const product = data.find((p) => p._id === productId);
    return product ? acc + product.price * quantity : acc;
  }, 0);

  // Xử lý khi người dùng xác nhận thanh toán
  const handleCheckout = () => {
    if (!token) {
      setOpenConfirm(!openConfirm);
    }
    // Tạo dữ liệu đơn hàng từ thông tin người dùng và sản phẩm trong giỏ hàng
    const orderData = {
      userId,
      products: data.map((product) => ({
        productId: product._id,
        quantity: productQuantities[product._id],
      })),
      ...deliveryInfo, // Thêm thông tin địa chỉ giao hàng vào đây
    };

    // Gửi yêu cầu tạo đơn hàng đến server
    axios
      .post("http://localhost:5000/orders/", orderData)
      .then((response) => {
        console.log("Order created successfully:", response.data);
        showMessage("success", "Đặt hàng thành công");
      })
      .catch((error) => {
        console.error("Error creating order:", error);
        showMessage("error", "Đặt hàng thất bại");
      });
  };

  return (
    <>
      <Directional directional="Thanh toán" />

      {/* Phần hiển thị thông tin địa chỉ và đơn hàng */}
      <div className="address">
        <h3>Địa chỉ giao hàng</h3>
        <div className="information-address">
          <div className=" infor-checkout">
            <label htmlFor="">Họ và tên người nhận:</label>
            <Input
              className="input-infor-checkout"
              value={deliveryInfo.fullName}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })
              }
            />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Email:</label>
            <Input
              className="input-infor-checkout"
              value={deliveryInfo.email}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, email: e.target.value })
              }
            />
          </div>
          <div className="infor-checkout">
            <label htmlFor="">Số điện thoại:</label>
            <Input
              className="input-infor-checkout"
              value={deliveryInfo.phone}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })
              }
            />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Quận/Huyện:</label>
            <Input
              className="input-infor-checkout"
              value={deliveryInfo.district}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, district: e.target.value })
              }
            />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Phường/Xã:</label>
            <Input
              className="input-infor-checkout"
              value={deliveryInfo.ward}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, ward: e.target.value })
              }
            />
          </div>
          <div className=" infor-checkout">
            <label htmlFor="">Địa chỉ nhận hàng</label>
            <Input
              className="input-infor-checkout"
              value={deliveryInfo.address}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
              }
            />
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

      {/* Button để xác nhận thanh toán */}
      <Row className="footer-checkout">
        <Button className="btn-submit-checkout" onClick={handleCheckout}>
          Xác nhận thanh toán
        </Button>
      </Row>
      <ModalConfirm open={openConfirm} onClose={handleCloseconfirm} />
    </>
  );
};

export default Checkout;
