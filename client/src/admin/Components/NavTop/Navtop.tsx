import { BellOutlined, MessageOutlined } from "@ant-design/icons";

import "../NavTop/Navtop.css";
import avatar from "../../../asset/img/avatar.png";
const NavTop = () => {
  return (
    <>
      <div className="nav-top">
        <div className="search"></div>
        <div className="icon-right-nav">
          <span>
            {" "}
            <BellOutlined />
          </span>
          <span>
            {" "}
            <MessageOutlined />
          </span>
          <span>
            <img src={avatar} width={25} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default NavTop;
