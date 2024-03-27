import { PhoneOutlined } from "@ant-design/icons";
import "../HeaderTop/HeaderTop.css";
import { Link } from "react-router-dom";
const HeaderTop: React.FC = () => {
  return (
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
  );
};

export default HeaderTop;
