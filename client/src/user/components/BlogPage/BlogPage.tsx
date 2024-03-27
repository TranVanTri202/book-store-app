import { Col, Row } from "antd";

const BlogPage = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={12} className="card-blog">
          <div className="img-blog">
            <img
              src="https://i1.feedspot.com/200/739653.jpg?t=1600424254"
              alt=""
            />
          </div>
          <div className="content-blog">
            <h2>Riot Blog</h2>
            <p className="text-blog">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              perspiciatis quibusdam iste aspernatur. Vero nam ex repellendus
              delectus expedita facere?
            </p>
          </div>
        </Col>
        <Col span={12}></Col>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default BlogPage;
