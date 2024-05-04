import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import "../../components/Blog/Blog.css";
import { useEffect } from "react";
import { fetchDataBlog } from "../../../Redux/Slice/BlogSlice";
const Blog = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.blogs.dataBlog);

  useEffect(() => {
    dispatch(fetchDataBlog());
  }, [dispatch]);
  return (
    <>
      <div className="heading">
        <h2 style={{ textAlign: "center", margin: "15px 0" }}>
          Tin tức về chúng tôi
        </h2>
      </div>
      <div className="blog-home">
        {data.map((blog) => {
          return (
            <div className="blogs">
              <img src={blog.image} alt="" />
              <div className="information-blog">
                <div className="date">Ngày 1 tháng 1 năm 2024</div>
                <div className="heading-blog">{blog.title}</div>
                <div className="text-blog">{blog.description}</div>
                <span className="continue">Tiếp tục</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
