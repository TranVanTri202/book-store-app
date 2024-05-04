import { Col, Modal, Row } from "antd";
import { useEffect, useState } from "react";

import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { BlogType, updateDataBlog } from "../../../Redux/Slice/BlogSlice";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  blog: BlogType | null;
}
const ModalEditBlog: React.FC<ModalProps> = ({ visible, onClose, blog }) => {
  const dispatch: AppDispatch = useDispatch();
  const [editedBlog, setEditedBlog] = useState<BlogType | null>(null); // State để lưu thông tin sản phẩm đã chỉnh sửa

  useEffect(() => {
    setEditedBlog(blog);
  }, [blog, dispatch]);

  const handleChangeInput = (prev: string, value: string | number) => {
    setEditedBlog({ ...editedBlog!, [prev]: value });
  };

  const handleEditProduct = async () => {
    await dispatch(updateDataBlog(editedBlog!));
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
            <label htmlFor="">Tiêu đề </label>{" "}
            <input
              value={editedBlog?.title || ""}
              type="text"
              onChange={(e) => handleChangeInput("name", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Ảnh</label>{" "}
            <input
              value={editedBlog?.image || ""}
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
          value={editedBlog?.description || ""}
          onChange={(e) => handleChangeInput("description", e.target.value)}
        ></textarea>
        <button onClick={handleEditProduct}>Cập nhật sản phẩm</button>
        <button onClick={onClose}>Hủy</button>
      </Modal>
    </>
  );
};

export default ModalEditBlog;
