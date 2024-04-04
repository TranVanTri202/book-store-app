import { Col, Row } from "antd";
import NavbarLeft from "../admin/Components/NavbarLeft/NavbarLeft";
import NavTop from "../admin/Components/NavTop/Navtop";

interface layoutProps {
  children: any;
}

const LayoutAdmin: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Row>
        <Col span={4}>
          <NavbarLeft />
        </Col>
        <Col span={20} className="content-admin">
          <NavTop />
          <div style={{ padding: "0 20px" }}>{children}</div>
        </Col>
      </Row>
    </>
  );
};

export default LayoutAdmin;
