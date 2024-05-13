import {
  BellOutlined,
  LogoutOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "../NavTop/Navtop.css";

const NavTop = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/home";
  };
  return (
    <>
      <div className="nav-top">
        <div className="search"></div>
        <div className="icon-right-nav">
          <span>
            <BellOutlined />
          </span>
          <span>
            <MessageOutlined />
          </span>
          <span onClick={handleLogout}>
            <LogoutOutlined />
          </span>
        </div>
      </div>
    </>
  );
};

export default NavTop;
