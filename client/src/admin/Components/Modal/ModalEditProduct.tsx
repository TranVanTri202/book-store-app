import { Col, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import {
  ProductType,
  addDataProduct,
  updateDataProduct,
} from "../../../Redux/Slice/ProductSlice";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  product: ProductType | null;
}
const ModalEditProduct: React.FC<ModalProps> = ({
  visible,
  onClose,
  product,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [editedProduct, setEditedProduct] = useState<ProductType | null>(null); // State để lưu thông tin sản phẩm đã chỉnh sửa

  useEffect(() => {
    setEditedProduct(product);
  }, [product, dispatch]);

  const handleChangeInput = (prev: string, value: string | number) => {
    setEditedProduct({ ...editedProduct!, [prev]: value });
  };

  const handleEditProduct = async () => {
    await dispatch(updateDataProduct(editedProduct!));
    onClose();
  };

  return (
    <>
      <Modal
        title="Cập nhật sản phẩm"
        open={visible}
        onCancel={onClose}
        footer={null}
      >
        <Row>
          <Col span={10}>
            {" "}
            <label htmlFor="">Tên sách</label>{" "}
            <input
              value={editedProduct?.name || ""}
              type="text"
              onChange={(e) => handleChangeInput("name", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Tên tác giả</label>{" "}
            <input
              value={editedProduct?.author || ""}
              type="text"
              onChange={(e) => handleChangeInput("author", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Giá</label>{" "}
            <input
              value={editedProduct?.price || ""}
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
              value={editedProduct?.category || ""}
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
              <option value="Sách Truyền Cảm Hứng">Sách Truyền Cảm Hứng</option>
            </select>
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Ảnh</label>{" "}
            <input
              value={editedProduct?.image || ""}
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
          value={editedProduct?.description || ""}
          onChange={(e) => handleChangeInput("description", e.target.value)}
        ></textarea>
        <button onClick={handleEditProduct}>Cập nhật sản phẩm</button>
        <button onClick={onClose}>Hủy</button>
      </Modal>
    </>
  );
};

export default ModalEditProduct;
