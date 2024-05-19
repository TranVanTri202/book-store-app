import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "../Navbar/Navbar.css";
import logo from "../../../asset/img/logo.png.png";
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
          <img src={logo} alt="" width={150} />
        </div>
        <div className="choose">
          <ul>
            <NavLink onClick={scrollToTop} to="/home" className="nav-link">
              <li>Trang chủ</li>
            </NavLink>

            <NavLink onClick={scrollToTop} to="/products" className="nav-link">
              <li>Sản Phẩm</li>
            </NavLink>

            <NavLink onClick={scrollToTop} to="/contact" className="nav-link">
              <li>Liên Hệ</li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/Tintuc" className="nav-link">
              <li>Tin tức</li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/blog" className="nav-link">
              <li>Page</li>
            </NavLink>
          </ul>
        </div>
        <div className="notify">
          <Link to="/cart">
            <p className="cart-quantity">
              <span className="number-cart">{products.length}</span>
              <ShoppingOutlined shape="square" />
            </p>
          </Link>
          <HeartOutlined />
          <UserOutlined onClick={handleProfile} />
          <span style={{ fontSize: "0px !important" }}>
            {userName.split("@")[0]}
          </span>
        </div>
      </div>
      <ModalLogin open={openModalLogin} onClose={handleCloseModal} />

      <div className="navbar-bottom">
        <div className="choose-bottom">
          <ul>
            <NavLink onClick={scrollToTop} to="/home" className="nav-link">
              <li>Trang chủ</li>
            </NavLink>

            <NavLink onClick={scrollToTop} to="/products" className="nav-link">
              <li>Sản Phẩm</li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/contact" className="nav-link">
              <li>Liên Hệ</li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/blog" className="nav-link">
              <li>Tin tức</li>
            </NavLink>
            <NavLink onClick={scrollToTop} to="/blog" className="nav-link">
              <li>Page</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
