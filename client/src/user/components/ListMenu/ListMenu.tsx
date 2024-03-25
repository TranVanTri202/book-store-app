import React from "react";
import { Checkbox } from "antd";
import "../../components/ListMenu/ListMenu.css";

const ListMenu = () => {
  return (
    <>
      <div className="list-menu">
        <h3>Loại Sách</h3>
        <div className="checkbox-container">
          <Checkbox className="abc" id="sachthieunhi" />
          <label htmlFor="sachthieunhi">Sách Thiếu Nhi </label>
        </div>
        <div className="checkbox-container">
          <Checkbox className="abc" id="sachtamlitinhcam" />
          <label htmlFor="sachtamlitinhcam">Sách Tâm Lí, Tình Cảm</label>
        </div>
        <div className="checkbox-container">
          <Checkbox className="abc" id="sachvientuong" />
          <label htmlFor="sachvientuong">Sách Văn Học Viễn Tưởng </label>
        </div>
        <div className="checkbox-container">
          <Checkbox className="abc" id="sachcamhung" />
          <label htmlFor="sachcamhung">Sách Truyền Cảm Hứng</label>
        </div>

        <h3>Giá Tiền</h3>
        <div className="checkbox-container">
          <Checkbox id="20to50" />
          <label htmlFor="20to50">20.000đ - 50.000đ</label>
        </div>
        <div className="checkbox-container">
          <Checkbox id="50to100" />
          <label htmlFor="50to100">50.000đ - 100.000đ</label>
        </div>
        <div className="checkbox-container">
          <Checkbox id="100to200" />
          <label htmlFor="100to200">100.000đ - 200.000đ</label>
        </div>
      </div>
    </>
  );
};

export default ListMenu;
