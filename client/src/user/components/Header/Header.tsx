import { PhoneOutlined } from "@ant-design/icons";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import logo from "../../../asset/img/logo.png.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
const HeaderTop: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.dataProduct);

  return (
    <>
      <div className="header-top">
        <div className="header-top-phone">
          <span>
            <PhoneOutlined />
          </span>
          <span>Call: 0387653312</span>
        </div>
        <div className="logout-login">
          <Link to="/login">
            <span>Đăng nhập</span>
          </Link>
          <span>/</span>
          <Link to="/login">
            <span>Đăng ký</span>
          </Link>
        </div>
      </div>
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
            <Link to="/cart">
              {" "}
              <ShoppingOutlined shape="square" />
              <p className="count-shopping">{products.length}</p>
              <p>Giỏ hàng</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
