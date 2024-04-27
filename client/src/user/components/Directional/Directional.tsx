import { Col, Row } from "antd";

interface DirectionalProps {
  directional: string;
}
const Directional: React.FC<DirectionalProps> = ({ directional }) => {
  return (
    <>
      <div style={{ margin: "10px 0" }} className="directional">
        <Row>
          <Col>
            <span style={{ color: "grey" }}>Trang Chủ</span> &#62;{" "}
            <b style={{ fontWeight: "600" }}>{directional}</b>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Directional;
