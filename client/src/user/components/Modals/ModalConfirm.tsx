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
        {/* <div className="btn-footer-modal-confirm">
          <button className="btn-cancel-modal">Trở lại</button>
          <button className="btn-ok-modal">OK</button>
        </div> */}
      </Modal>
    </>
  );
};

export default ModalConfirm;
