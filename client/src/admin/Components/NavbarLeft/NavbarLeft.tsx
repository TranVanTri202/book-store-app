import { BankOutlined, ProductOutlined } from "@ant-design/icons";
import logo from "../../../asset/img/logo.png.png";
import "../NavbarLeft/NavbarLeft.css";
import { NavLink } from "react-router-dom";
const NavbarLeft = () => {
  return (
    <>
      <div className="navbar-left">
        <div className="img-logo-admin">
          <img src={logo} width={150} alt="" />
        </div>
        <div className="sidebar">
          <ul>
            <NavLink to="/admin/dashboard" className="nav-link-sidebar">
              <li>
                <span>
                  <BankOutlined />
                </span>
                Dashboard
              </li>
            </NavLink>
            <NavLink to="/admin/products" className="nav-link-sidebar">
              <li>
                <span>
                  <ProductOutlined />
                </span>
                Quản lí sản phẩm
              </li>
            </NavLink>
            <NavLink to="/admin/blogs" className="nav-link-sidebar">
              <li>
                <span>
                  <BankOutlined />
                </span>
                Quản lí Blog
              </li>
            </NavLink>
            <NavLink to="/admin/c" className="nav-link-sidebar">
              <li>
                <span>
                  <BankOutlined />
                </span>
                Quản lí đơn hàng
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarLeft;
