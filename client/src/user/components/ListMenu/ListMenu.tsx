import React from "react";
import { Checkbox } from "antd";
import "../../components/ListMenu/ListMenu.css";

const ListMenu = () => {
  return (
    <>
      <div className="list-menu">
        <h4>Loại Sách</h4>
        <div className="checkbox-container">
          <Checkbox className="abc" id="sachthieunhi" />
          <label htmlFor="sachthieunhi">Sách Thiếu Nhi asdsad</label>
        </div>
        <h4>Giá Tiền</h4>
        <div className="checkbox-container">
          <Checkbox id="sachthieunhi" />
          <label htmlFor="sachthieunhi">20000 - 50000</label>
        </div>
        <div className="checkbox-container">
          <Checkbox id="sachthieunhi" />
          <label htmlFor="sachthieunhi">20000 - 50000</label>
        </div>
        <div className="checkbox-container">
          <Checkbox id="sachthieunhi" />
          <label htmlFor="sachthieunhi">20000 - 50000</label>
        </div>
      </div>
    </>
  );
};

export default ListMenu;
