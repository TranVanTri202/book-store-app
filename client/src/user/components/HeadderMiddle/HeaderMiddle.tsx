import {
  HeartOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import logo from "../../../asset/img/logo.png.png";
import "../HeadderMiddle/HeaderMiddle.css";
const HeaderMiddle = () => {
  return (
    <>
      <div className="header-middle">
        <div className="logo">
          <img src={logo} alt="" width={150} />
        </div>
        <div className="search">
          <div className="input-search">
            <input placeholder="Tìm kiếm sản phẩm" />
          </div>
          <div className="icon-search icon">
            <SearchOutlined />
          </div>
        </div>
        <div className="icon-group">
          <div className="icon-person icon">
            <UserOutlined />
            <p>Tài khoản</p>
          </div>
          <div className="icon-like icon">
            <HeartOutlined />
            <p>Yêu thích</p>
          </div>
          <div className="icon-cart icon">
            <ShoppingOutlined />
            <p>Giỏ hàng</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMiddle;
