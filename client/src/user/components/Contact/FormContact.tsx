import { SendOutlined } from "@ant-design/icons";
import { Row } from "antd";

const FormContact = () => {
  return (
    <>
      <div className="contact-form">
        <Row>
          <input placeholder="Nhập tên của bạn" type="text" />
        </Row>
        <Row>
          <input placeholder="Nhập email của bạn" type="text" />
        </Row>
        <Row>
          <input placeholder="Nhập số điện thoại của bạn " type="text" />
        </Row>
        <Row>
          <textarea
            placeholder="Viết phản hồi vào đây"
            name=""
            id=""
            cols={50}
            rows={5}
          ></textarea>
        </Row>
        <button>
          Gửi <SendOutlined />
        </button>
      </div>
    </>
  );
};

export default FormContact;
