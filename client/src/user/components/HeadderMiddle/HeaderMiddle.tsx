import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import "../HeadderMiddle/HeaderMiddle.css";
const HeaderMiddle = () => {
  return (
    <>
      <div className="header-middle">
        <div className="logo">
          <img
            src="https://prestashop17.joommasters.com/molla/themes/jms_molla/assets/images/logos/logo-20.png"
            alt=""
          />
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
            <ShoppingCartOutlined />
            <p>Giỏ hàng</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMiddle;
