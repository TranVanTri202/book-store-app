import { Col, Row } from "antd";

interface DirectionalProps {
  directional: string;
}
const Directional: React.FC<DirectionalProps> = ({ directional }) => {
  return (
    <>
      <div style={{ margin: "15px 0" }} className="directional">
        <Row>
          <Col>
            <span>Trang Chủ</span> &#62;{" "}
            <b style={{ fontWeight: "600", color: "var(--color-main)" }}>
              {directional}
            </b>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Directional;
