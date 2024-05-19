import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import "../../components/Blog/Blog.css";
import { useEffect } from "react";
import { fetchDataBlog } from "../../../Redux/Slice/BlogSlice";
import { Col, Row } from "antd";
import Directional from "../Directional/Directional";
const Blog = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.blogs.dataBlog);

  useEffect(() => {
    dispatch(fetchDataBlog());
  }, [dispatch]);
  return (
    <>
      <Directional directional="Tin Tức" />
      <div className="blog-home">
        <Row gutter={16}>
          {data.map((blog, index) => {
            return (
              <Col
                key={index}
                xs={{ span: 24 }}
                md={{ span: 8 }}
                className="blogs"
              >
                <img src={blog.image} alt="" />
                <div className="heading-blog">{blog.title}</div>
                <div className="information-blog">
                  <div className="date">Ngày 1 tháng 1 năm 2024</div>
                  <div className="text-blog">{blog.description}</div>
                  <span className="continue">Tiếp tục</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Blog;
