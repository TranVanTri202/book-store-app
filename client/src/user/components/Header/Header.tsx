// import { useEffect } from "react";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";

// import { PhoneOutlined } from "@ant-design/icons";
// import {
//   HeartOutlined,
//   UserOutlined,
//   SearchOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";
// import logo from "../../../asset/img/logo.png.png";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../Redux/store";
// import ModalLogin from "../Modals/ModalLogin";
// import { useState } from "react";
// import ModalRegister from "../Modals/ModalRegister";
// import { jwtDecode } from "jwt-decode";
// import { showMessage } from "../../utils/message";
// import ModalConfirm from "../Modals/ModalConfirm";
// import HeaderTop from './Header';
// const HeaderTop: React.FC = () => {
// const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const [openConfirm, setOpenConfirm] = useState(false);

//   const handleCloseconfirm = () => {
//     setOpenConfirm(!openConfirm);
//   };
//   const [userName, setUserName] = useState("");
//   const userNameVisible = userName.split("@")[0];

//   const [isUserNameSet, setIsUserNameSet] = useState(false); // Thêm biến boolean để kiểm tra

//   if (token && !isUserNameSet) {
//     // Kiểm tra nếu userName chưa được set
//     const decodedToken = jwtDecode(token) as { username: string };
//     setUserName(decodedToken.username);
//     setIsUserNameSet(true); // Đánh dấu là userName đã được set
//   }

//   const products = useSelector((state: RootState) => state.cart.dataProduct);
//   const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
//   const [openModalRegister, setOpenModalRegister] = useState<boolean>(false);

//   const handleOpenModalLogin = () => {
//     setOpenModalLogin(!openModalLogin);
//   };
//   const handleOpenModalRegister = () => {
//     setOpenModalRegister(!openModalRegister);
//   };

//   const handleLogout = () => {
//     showMessage("success", "Đăng xuất thành công");
//     localStorage.removeItem("token");
//     setUserName(""); // Cập nhật userName thành giá trị rỗng
//     setIsUserNameSet(false);
//     navigate("/"); // Cập nhật isUserNameSet thành false
//   };

//   const hanleProfile = () => {
//     if (token) {
//       navigate("/profile");
//     } else {
//       setOpenConfirm(!openConfirm);
//     }
//   };
//   useEffect(() => {});
//   return (
//     <>
//       <div className="header-top">
//         {/* <div className="header-top-phone">
//           <span>
//             <PhoneOutlined />
//           </span>
//           <span>Call: 0387653312</span>
//         </div>
//         <div className="logout-login">
//           {token ? (
//             <>
//               <span
//                 style={{
//                   fontSize: "14px",
//                   color: "var(--color-main)",
//                   fontWeight: "500",
//                   textDecoration: "underline",
//                 }}
//               >
//                 {userNameVisible}
//               </span>

//               <span>/</span>

//               <span onClick={handleLogout}>Đăng xuất</span>
//             </>
//           ) : (
//             <>
//               <span onClick={handleOpenModalLogin}>Đăng nhập</span>

//               <span>/</span>

//               <span onClick={handleOpenModalRegister}>Đăng ký</span>
//             </>
//           )}
//         </div> */}
//       </div>
//       <div className="header-middle">
//         <div className="logo">
//           <img src={logo} alt="" width={150} />
//         </div>
//         <div className="search">
//           <div className="input-search">
//             <input placeholder="Tìm kiếm sản phẩm" />
//           </div>
//           <div className="icon-search icon">
//             <SearchOutlined />
//           </div>
//         </div>
//         <div className="icon-group">
//           <div className="icon-person icon" onClick={hanleProfile}>
//             <UserOutlined />
//             <p>Tài khoản</p>
//           </div>
//           <div className="icon-like icon">
//             <HeartOutlined />
//             <p>Yêu thích</p>
//           </div>
//           <Link to="/cart">
//             <div className="icon-cart icon">
//               {" "}
//               <ShoppingOutlined shape="square" />
//               <p className="count-shopping">{products.length}</p>
//               <p>Giỏ hàng</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <ModalLogin open={openModalLogin} onClose={handleOpenModalLogin} />
//       <ModalRegister
//         open={openModalRegister}
//         onClose={handleOpenModalRegister}
//       />
//       <ModalConfirm open={openConfirm} onClose={handleCloseconfirm} />
//     </>
//   );
// };

// export default HeaderTop;

const HeaderTop = () => {
  return <></>;
};

export default HeaderTop;
