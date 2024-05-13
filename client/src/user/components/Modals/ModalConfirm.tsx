import { Modal } from "antd";

interface ModalConfirmProps {
  open: boolean;
  onClose: () => void;
}
const ModalConfirm: React.FC<ModalConfirmProps> = ({ open, onClose }) => {
  return (
    <>
      <Modal title="Lỗi" open={open} onOk={onClose} onCancel={onClose}>
        <p>Xin vui lòng đăng nhập!!! </p>
      </Modal>
    </>
  );
};

export default ModalConfirm;
