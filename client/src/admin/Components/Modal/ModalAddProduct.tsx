import { Col, Modal, Row } from "antd";
import { useState } from "react";
import { ProductType, addDataProduct } from "../../../Redux/Slice/ProductSlice";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}
const ModalAddProduct: React.FC<ModalProps> = ({ visible, onClose }) => {
  const dispatch: AppDispatch = useDispatch();
  const [productInfo, setProductInfo] = useState<ProductType>({
    name: "",
    author: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const handleChangeInput = (prev: string, value: string | number) => {
    setProductInfo({ ...productInfo, [prev]: value });
  };

  const handleAddProduct = async () => {
    await dispatch(addDataProduct(productInfo));
    setProductInfo({
      name: "",
      author: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    });
    onClose();
  };

  return (
    <>
      <Modal
        title="Thêm sản phẩm"
        open={visible}
        onCancel={onClose}
        footer={null}
      >
        <Row>
          <Col span={10}>
            {" "}
            <label htmlFor="">Tên sách</label>
            <input
              type="text"
              value={productInfo.name}
              onChange={(e) => handleChangeInput("name", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Tên tác giả</label>{" "}
            <input
              value={productInfo.author}
              type="text"
              onChange={(e) => handleChangeInput("author", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Giá</label>{" "}
            <input
              value={productInfo.price}
              type="number"
              onChange={(e) => handleChangeInput("price", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Loại sách</label>{" "}
            <select
              name=""
              id=""
              value={productInfo.category}
              onChange={(e) => handleChangeInput("category", e.target.value)}
            >
              <option value="Chưa chọn thể loại">--Chọn thể loại--</option>
              <option value="Sách Thiếu Nhi">Sách Thiếu Nhi</option>
              <option value="Sách Khoa Học Viễn Tưởng">
                Sách Khoa Học Viễn Tưởng
              </option>
              <option value="Sách Tâm Lí, Tình Cảm">
                Sách Tâm Lí, Tình Cảm
              </option>
              <option value="Sách Truyển Cảm Hứng">Sách Truyển Cảm Hứng</option>
            </select>
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Ảnh</label>{" "}
            <input
              value={productInfo.image}
              onChange={(e) => handleChangeInput("image", e.target.value)}
              type="text"
            />
          </Col>{" "}
        </Row>
        <label htmlFor="">Miêu tả</label>{" "}
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          value={productInfo.description}
          onChange={(e) => handleChangeInput("description", e.target.value)}
        ></textarea>
        <button onClick={handleAddProduct}>Thêm</button>
        <button onClick={onClose}>Hủy</button>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
