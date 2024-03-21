import { NavLink, Link } from "react-router-dom";
import { UnorderedListOutlined, BulbOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
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
  return (
    <>
      <div className={`navbar ${isSticky ? "fixed" : ""}`}>
        <div className="browser">
          <UnorderedListOutlined />
          <span>Các danh mục</span>
        </div>
        <div className="choose">
          <ul>
            <NavLink to="/home" className="nav-link">
              {" "}
              <li>Trang chủ</li>{" "}
            </NavLink>

            <NavLink to="/products" className="nav-link">
              <li>Sản Phẩm</li>
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              <li>Liên Hệ</li>
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              {" "}
              <li>Blog</li>
            </NavLink>

            <li>Page</li>
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
