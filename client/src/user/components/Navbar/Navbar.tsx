import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UnorderedListOutlined, BulbOutlined } from "@ant-design/icons";
import "../Navbar/Navbar.css";

const Navbar = () => {
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
          <UnorderedListOutlined />
          <span>Các danh mục</span>
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
            <NavLink onClick={scrollToTop} to="/blog" className="nav-link">
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>
        <div className="notify">
          <BulbOutlined />
          <span>Sale tất cả 30%</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
