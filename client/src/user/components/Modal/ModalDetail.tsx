import { Button, Col, Modal, Rate, Row } from "antd";
import { ProductType } from "../../../Redux/Slice/ProductSlice";
import "../Modal/Modal.css";
import { formatNumber } from "../../utils/formatNumber";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Slice/CartSlice";
import { showMessage } from "../../utils/message";

interface ModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  product: ProductType;
}
const ModelDetail: React.FC<ModalProps> = ({
  isModalOpen,
  handleCancel,
  product,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    showMessage("success", "Thêm vào giỏ hàng thành công");
  };

  return (
    <>
      <Modal
        className="modal-detail"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Row>
          <Col span={10} style={{ position: "relative" }}>
            <img src={product.image} alt="" />
          </Col>
          <Col
            style={{ backgroundColor: "#f8f8f8", padding: "15px" }}
            span={14}
          >
            <h2>Sách {product.name}</h2>
            <p>
              <Rate allowHalf disabled defaultValue={5} />
            </p>
            <h1>{formatNumber(product.price)}</h1>
            <p>Thể loại: {product.category}</p>
            <p>{product.description}</p>

            <Button
              onClick={() => handleAddToCart(product)}
              className="btn-buy-detail"
            >
              Mua
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModelDetail;
