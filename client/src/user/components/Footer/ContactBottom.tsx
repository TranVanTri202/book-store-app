import { MailOutlined } from "@ant-design/icons";
import "./ContactBottom.css";
const ContactBottom = () => {
  return (
    <>
      <div className="footer">
        <div className="information-footer">
          <div className="address">
            <div className="icon-address"></div>
            <div className="text-address">
              <p>Địa chỉ</p>
              <span>20/4 Đường Nguyễn Kim Cương ấp 2a Củ Chi</span>
            </div>
          </div>
          <div className="phone">
            <div className="icon-phone"></div>
            <div className="text-phone">
              <p>Số điện thoại</p>
              <span>0387653312</span>
            </div>
          </div>
          <div className="mail">
            <div className="icon-mail"></div>
            <div className="text-mail"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBottom;
