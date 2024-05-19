import { Button, Col, Input, Row } from "antd";
import Directional from "../components/Directional/Directional";
import "../../asset/style/profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { formatNumber } from "../utils/formatNumber";
import { formatDate } from "../utils/formatDay";
import ChangePassword from "./ChangePassword";
import { emptyCart } from "./Cart";
import { apiConfig } from "../config/apiConfig";
import { showMessage } from "../utils/message";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // State để lưu userId và kiểm tra xem đã được set hay chưa
  const [userId, setUserId] = useState("");
  const [isUserIdSet, setIsUserIdSet] = useState(false);
  // Nếu có token và userId chưa được set, thì giải mã token để lấy userId và đánh dấu đã set
  if (token && !isUserIdSet) {
    const decodedToken = jwtDecode(token) as { id: any };
    setUserId(decodedToken.id);
    setIsUserIdSet(true);
  }
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    showMessage("success", "Đăng xuất thành công");
    localStorage.removeItem("token");
    navigate("/"); // Cập nhật isUserNameSet thành false
  };
  const [chooseProfile, setChooseProfile] = useState<string>(
    "profile-information"
  );
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${apiConfig.User.getUserID}${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);
  return (
    <>
      <Directional directional="Hồ sơ cá nhân" />
      <Row className="detail-profile">
        <Col md={{ span: 5 }} xs={{ span: 24 }}>
          <div className="profile-choose">
            <img
              src="https://pasrc.princeton.edu/sites/g/files/toruqf431/files/styles/freeform_750w/public/2021-03/blank-profile-picture-973460_1280.jpg?itok=QzRqRVu8"
              alt=""
            />
            <h3 onClick={() => setChooseProfile("profile-information")}>
              Hồ sơ của tôi
            </h3>
            <h3 onClick={() => setChooseProfile("profile-orders")}>
              Đơn hàng{" "}
            </h3>
            <h3 onClick={() => setChooseProfile("profile-changePassword")}>
              {" "}
              Thay đổi mật khẩu
            </h3>
            <h3 onClick={handleLogout}> Đăng xuất</h3>
          </div>
        </Col>
        <Col md={{ span: 19 }} xs={{ span: 24 }}>
          {chooseProfile === "profile-information" && <MyProfile />}
          {chooseProfile === "profile-orders" && <MyOrders user={user} />}
          {chooseProfile === "profile-changePassword" && <ChangePassword />}
        </Col>
      </Row>
    </>
  );
};

const MyProfile = () => {
  return (
    <>
      <div className="profile-right">
        <h3>Cập nhật hồ sơ cá nhân</h3>
        <Row align="middle" style={{ margin: "10px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Email:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Password:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Họ và tên:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Địa chỉ:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Số điện thoại:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input />
          </Col>
        </Row>
        <Row align="middle" style={{ margin: "10px 0 20px 0" }}>
          <Col md={{ span: 3 }} xs={{ span: 6 }}>
            <label>Ngày sinh:</label>
          </Col>
          <Col md={{ span: 15 }} xs={{ span: 18 }}>
            {" "}
            <Input type="date" />
          </Col>
        </Row>
        <Row>
          <Button className="btn-update-profile">Cập nhật</Button>
        </Row>
      </div>
    </>
  );
};

const MyOrders: React.FC<{ user: any }> = ({ user }) => {
  const [ordersWithProducts, setOrdersWithProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrdersWithProducts = async () => {
      try {
        const orders = user.orders;

        const ordersWithProductsPromises = orders.map(
          async (orderId: string) => {
            const response = await axios.get(
              `${apiConfig.Oder.detailApi}${orderId}`
            );
            return response.data;
          }
        );

        const resolvedOrdersWithProducts = await Promise.all(
          ordersWithProductsPromises
        );
        setOrdersWithProducts(resolvedOrdersWithProducts);
      } catch (error) {
        console.error("Error fetching orders with products:", error);
      }
    };

    fetchOrdersWithProducts();
  }, [user]);

  return (
    <>
      {ordersWithProducts.length === 0 ? (
        emptyCart()
      ) : (
        <>
          <Row className="my-order-header">
            <Col span={8} style={{ borderRight: "1px solid grey" }}>
              Tất cả
            </Col>
            <Col span={8} style={{ borderRight: "1px solid grey" }}>
              Đang chờ
            </Col>
            <Col span={8} style={{ borderRight: "1px solid grey" }}>
              Đã nhận
            </Col>
          </Row>

          {ordersWithProducts.map((order: any) => (
            <div className="my-order-detail">
              <p>Ngày đặt hàng: {formatDate(order.createdAt)} </p>
              <h5>Mã đơn hàng: {order._id}</h5>

              <Row style={{ marginBottom: "15px" }}>
                <Col span={16}>Sản phẩm</Col>
                <Col span={4}>Số lượng</Col>
                <Col span={4}>Giá tiền</Col>
              </Row>
              {order.products &&
                order.products.map((product: any) => (
                  <ProductInfo productId={product.productId} />
                ))}
              <Col span={24}>
                {" "}
                <h4 style={{ textAlign: "right" }}>
                  Tổng tiền:
                  <span
                    style={{
                      color: "#C92127",
                      fontSize: "16px",
                      marginLeft: "12px",
                    }}
                  >
                    {formatNumber(order.total)}
                  </span>{" "}
                </h4>
              </Col>
            </div>
          ))}
        </>
      )}
    </>
  );
};

const ProductInfo: React.FC<{ productId: string }> = ({ productId }) => {
  const [productInfo, setProductInfo] = useState<any>(null);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await axios.get(
          `${apiConfig.product.detailApi}${productId}`
        );
        setProductInfo(response.data);
      } catch (error) {
        console.error("Error fetching product info:", error);
      }
    };

    if (productId) {
      fetchProductInfo();
    }
  }, [productId]);

  if (!productInfo) {
    return null; // Hoặc hiển thị một phần tử khác để báo lỗi hoặc loading
  }

  return (
    <Row
      style={{
        borderBottom: "1px solid #e6e2e2",
        alignItems: "center",
      }}
    >
      <Col span={4}>
        <img src={productInfo.image} width={50} alt="" />
      </Col>
      <Col span={12}>
        <span>{productInfo.name}</span>
      </Col>
      <Col span={4}> 1</Col>
      <Col span={4}>
        <h4 style={{ color: "#C92127" }}> {formatNumber(productInfo.price)}</h4>
      </Col>
    </Row>
  );
};

export default Profile;
