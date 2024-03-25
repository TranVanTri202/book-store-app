import "../Banner/Banner.css";
import {
  CarOutlined,
  ReloadOutlined,
  CustomerServiceOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner1">
          <img
            src="https://prestashop17.joommasters.com/molla/themes/jms_molla/assets/images/demos/demo-20/banners/banner-1.jpg"
            alt=""
          />
          <div className="typing-effect">
            <span>C</span>
            <span>h</span>
            <span>à</span>
            <span>o</span>
            <span>m</span>
            <span>ừ</span>
            <span>n</span>
            <span>g </span>
            <br />
            <span>b</span>
            <span>ạ</span>
            <span>n</span>
            <span></span>
            <span>đ</span>
            <span>ế</span>
            <span>n </span>
            <span></span>
            <span>v</span>
            <span>ớ</span>
            <span>i </span>
            <br />
            <span>TVT </span>
            <span>S</span>
            <span>h</span>
            <span>o</span>
            <span>p</span>
          </div>
        </div>
        <div className="banner2">
          <img
            src="https://wordsrated.com/wp-content/uploads/2022/02/Number-of-Books-Published-Per-Year.jpg"
            alt=""
          />
        </div>
        <div className="banner3">
          <img
            src="https://content.api.news/v3/images/bin/8791f511b22d3b0abb8b52c575bff083?width=2048"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvP0KyAJwW21kOUB1xEb816xw1QbLhv6kNA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="utilities">
        <div className="payment box-utilities">
          <div className="icon-payment icon">
            <CarOutlined />
          </div>
          <div className="content-payment">
            <h4>Thanh toán và giao hàng</h4>
            <p>Miễn phí ship cho đơn hàng hơn 500.000VND</p>
          </div>
        </div>
        <div className="return box-utilities">
          <div className="icon-return icon">
            <ReloadOutlined />
          </div>
          <div className="content-return">
            <h4>Trả đổi hàng</h4>
            <p>Đảm bảo được hoàn toàn miễn phí</p>
          </div>
        </div>
        <div className="support box-utilities">
          <div className="icon-support icon">
            <CustomerServiceOutlined />
          </div>
          <div className="content-suppor">
            <h4>Hổ trợ chất lượng</h4>
            <p>Luôn có đội ngủ hỗ trợ trực tuyến 24/7</p>
          </div>
        </div>
        <div className="payment box-utilities">
          <div className="icon-payment icon">
            <UserAddOutlined />
          </div>
          <div className="content-payment">
            <h4>Đăng kí thành viên</h4>
            <p>Giảm 10% cho các thành viên lâu năm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
