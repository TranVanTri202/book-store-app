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
      <div className="blog-home">TESST 123321</div>
    </>
  );
};

export default Blog;
