import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined,
  HomeOutlined,
  ContactsOutlined,
  ShopOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "../Navbar/Navbar.css";
import logo2 from "../../../asset/img/Logo2.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import ModalLogin from "../Modals/ModalLogin";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.cart.dataProduct);
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  const handleProfile = () => {
    if (token) {
      navigate("/profile");
    } else {
      setOpenModalLogin(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModalLogin(!openModalLogin);
  };

  const [isUserNameSet, setIsUserNameSet] = useState(false); // Thêm biến boolean để kiểm tra
  const [userName, setUserName] = useState("");

  if (token && !isUserNameSet) {
    // Kiểm tra nếu userName chưa được set
    const decodedToken = jwtDecode(token) as { username: string };
    setUserName(decodedToken.username);
    setIsUserNameSet(true); // Đánh dấu là userName đã được set
  }

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      //khi lướt xuống thêm class cho navbar thành fixed bên trên
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`navbar ${isSticky ? "fixed" : ""}`}>
        <div className="browser">
          <img src={logo2} alt="" />
        </div>
        <div className="choose">
          <ul>
            <NavLink onClick={scrollToTop} to="/Home" className="nav-link">
              <li>Trang Chủ</li>
            </NavLink>

            <NavLink onClick={scrollToTop} to="/Products" className="nav-link">
              <li>Sản Phẩm</li>
            </NavLink>

            <NavLink onClick={scrollToTop} to="/Contact" className="nav-link">
              <li>Liên Hệ</li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/Blogs" className="nav-link">
              <li>Tin Tức</li>
            </NavLink>
          </ul>
        </div>
        <div className="notify">
          <Link to="/Cart" onClick={scrollToTop}>
            <p className="cart-quantity">
              <span className="number-cart">{products.length}</span>
              <ShoppingOutlined shape="square" className="icon-navbar" />
            </p>
          </Link>
          <HeartOutlined className="icon-navbar" />
          <p className="userLogin" onClick={handleProfile}>
            <UserOutlined
              style={{ color: "var(--color-main)" }}
              className="icon-navbar"
            />
            {userName === "" ? "Đăng nhập" : userName.split("@")[0]}
          </p>
        </div>
      </div>
      <ModalLogin open={openModalLogin} onClose={handleCloseModal} />

      <div className="navbar-bottom">
        <div className="choose-bottom">
          <ul>
            <NavLink onClick={scrollToTop} to="/Home" className="nav-link">
              <li>
                <p>
                  <HomeOutlined />
                </p>
                Trang Chủ
              </li>
            </NavLink>

            <NavLink onClick={scrollToTop} to="/Products" className="nav-link">
              <li>
                <p>
                  <ShopOutlined />
                </p>
                Sản Phẩm
              </li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/Contact" className="nav-link">
              <li>
                <p>
                  <ContactsOutlined />
                </p>
                Liên Hệ
              </li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/Blogs" className="nav-link">
              <li>
                <p>
                  <BookOutlined />
                </p>
                Tin Tức
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
