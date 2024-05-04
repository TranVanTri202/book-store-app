import { Col, Modal, Row } from "antd";
import { useState } from "react";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { BlogType, addDataBlog } from "../../../Redux/Slice/BlogSlice";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}
const ModalAddBlog: React.FC<ModalProps> = ({ visible, onClose }) => {
  const dispatch: AppDispatch = useDispatch();
  const [blogInfor, setBlogInfor] = useState<BlogType>({
    title: "",
    description: "",
    image: "",
  });

  const handleChangeInput = (prev: string, value: string | number) => {
    setBlogInfor({ ...blogInfor, [prev]: value });
  };

  const handleAddBlog = async () => {
    await dispatch(addDataBlog(blogInfor));
    setBlogInfor({
      title: "",
      description: "",
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
            <label htmlFor="">Tiêu đề</label>{" "}
            <input
              type="text"
              value={blogInfor.title}
              onChange={(e) => handleChangeInput("title", e.target.value)}
            />
          </Col>
          <Col span={10}>
            {" "}
            <label htmlFor="">Ảnh</label>{" "}
            <input
              value={blogInfor.image}
              onChange={(e) => handleChangeInput("image", e.target.value)}
              type="text"
            />
          </Col>{" "}
        </Row>
        <label htmlFor="">Nội dung</label>{" "}
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          value={blogInfor.description}
          onChange={(e) => handleChangeInput("description", e.target.value)}
        ></textarea>
        <button onClick={handleAddBlog}>Thêm</button>
        <button onClick={onClose}>Hủy</button>
      </Modal>
    </>
  );
};

export default ModalAddBlog;
