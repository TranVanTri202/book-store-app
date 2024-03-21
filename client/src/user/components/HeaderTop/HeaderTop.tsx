import { PhoneOutlined } from "@ant-design/icons";
import "../HeaderTop/HeaderTop.css";
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
        <span>Sign in</span>
        <span>/</span>
        <span>Sing up</span>
      </div>
    </div>
  );
};

export default HeaderTop;
