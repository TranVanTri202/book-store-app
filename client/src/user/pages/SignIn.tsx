import { Input } from "antd";
import "../components/SignIn/SignIn.css";

const SignIn = () => {
  return (
    <>
      <div className="form-login">
        <h2>Đăng nhập</h2>
        <div className="">
          <label htmlFor="">Số điện thoại</label> <br />
          <Input />
        </div>
        <div className="">
          <label htmlFor="">Số điện thoại</label> <br />
          <input type="number" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
