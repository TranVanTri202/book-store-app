import { CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import { Col, Popover, Row } from "antd";

const BlogPage = () => {
  return (
    <>
      <div style={{ margin: "10px 0" }} className="directional">
        <Row style={{ backgroundColor: "#E7E7E7", padding: "10px" }}>
          <Col>
            <span style={{ color: "grey" }}>Trang Chủ</span> &#62;{" "}
            <b style={{ fontWeight: "600" }}>Blog</b>
          </Col>
        </Row>
      </div>
      <Row className="blog-page" gutter={[0, 25]}>
        <Col xs={{ span: 12 }} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <div className="text-container">
              <p className="text-blog">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione perspiciatis quibusdam iste aspernatur. Vero nam ex
                repellendus delectus expedita facere?Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ratione perspiciatis quibusdam
                iste aspernatur. Vero nam ex repellendus delectus expedita
                facere? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ratione perspiciatis quibusdam iste aspernatur. Vero nam
                ex repellendus delectus expedita facere?Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Ratione perspiciatis
                quibusdam iste aspernatur. Vero nam ex repellendus delectus
                expedita facere?
              </p>
            </div>
            <p>....</p>

            <span className="date">
              {" "}
              <CalendarOutlined />
              Ngày 1 tháng 1 năm 2024
              <Popover content={<>Xem thêm</>}>
                <EyeOutlined
                  style={{ marginLeft: "15px", cursor: "pointer" }}
                />
              </Popover>
            </span>
          </div>
        </Col>
        <Col span={12} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ratione perspiciatis quibusdam iste aspernatur.
              Vero nam ex repellendus delectus expedita facere?
            </p>
            <span className="date">Ngày 1 tháng 1 năm 2024</span>
          </div>
        </Col>
        <Col span={12} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ratione perspiciatis quibusdam iste aspernatur.
              Vero nam ex repellendus delectus expedita facere?
            </p>
            <span className="date">Ngày 1 tháng 1 năm 2024</span>
          </div>
        </Col>
        <Col span={12} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ratione perspiciatis quibusdam iste aspernatur.
              Vero nam ex repellendus delectus expedita facere?
            </p>
            <span className="date">Ngày 1 tháng 1 năm 2024</span>
          </div>
        </Col>
        <Col span={12} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ratione perspiciatis quibusdam iste aspernatur.
              Vero nam ex repellendus delectus expedita facere?
            </p>
            <span className="date">Ngày 1 tháng 1 năm 2024</span>
          </div>
        </Col>
        <Col span={12} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ratione perspiciatis quibusdam iste aspernatur.
              Vero nam ex repellendus delectus expedita facere?
            </p>
            <span className="date">Ngày 1 tháng 1 năm 2024</span>
          </div>
        </Col>
        <Col span={12} className="card-blog">
          <img
            src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
            alt=""
          />

          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ratione perspiciatis quibusdam iste aspernatur.
              Vero nam ex repellendus delectus expedita facere?
            </p>
            <span className="date">Ngày 1 tháng 1 năm 2024</span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BlogPage;
