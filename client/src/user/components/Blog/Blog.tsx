import "../../components/Blog/Blog.css";
const Blog = () => {
  return (
    <>
      <div className="heading">
        <p className="text-heading"> From Our Blog</p>
      </div>
      <div className="blog-home">
        <div className="blogs">
          <img
            src="https://motcuonsach.com/wp-content/uploads/2021/05/cuon-sach-ca-phe-cung-tony-324x235.jpg"
            alt=""
          />
          <div className="information-blog">
            <div className="date">Ngày 1 tháng 1 năm 2024</div>
            <div className="heading-blog">
              {" "}
              Cà Phê Cùng Tony Review: Như Một Nồi Lẩu Thập Cẩm
            </div>
            <div className="text-blog">
              Cà phê cùng tony à? Nổi tiếng không? Khá nổi tiếng. Được đánh giá
              cao không? Cũng được đánh giá cao. Thế có hữu...
            </div>
            <span className="continue">Tiếp tục</span>
          </div>
        </div>
        <div className="blogs">
          <img
            src="https://motcuonsach.com/wp-content/uploads/2020/10/sach-khieu-vu-voi-ngoi-but-1-324x235.jpg"
            alt=""
          />
          <div className="information-blog">
            <div className="date">Ngày 14 tháng 02 năm 2024</div>
            <div className="heading-blog">
              Khiêu Vũ Với Ngòi Bút Năm 2021: Còn Đáng Để Đọc?
            </div>
            <div className="text-blog">
              Chẳng đáng một xu, một cuốn sách vớ vẩn. Ấy vậy mà mọi người cứ
              tung hô cuốn Khiêu vũ với ngòi bút này...
            </div>
            <span className="continue">Tiếp tục</span>
          </div>
        </div>
        <div className="blogs">
          <img
            src="https://motcuonsach.com/wp-content/uploads/2020/10/sach-inbound-marketing-324x235.jpg"
            alt=""
          />
          <div className="information-blog">
            <div className="date">Ngày 30 tháng 1 năm 2024</div>
            <div className="heading-blog">
              Review Sách Inbound Marketing: Bản Đồ Chống Đi Lạc
            </div>
            <div className="text-blog">
              Ồ, tôi không đùa đâu. Inbound marketing giống như là một ma trận
              vậy. Tôi tin chắc bạn đang đọc bài viết này của...
            </div>
            <span className="continue">Tiếp tục</span>
          </div>
        </div>
        <div className="blogs">
          <img
            src="https://motcuonsach.com/wp-content/uploads/2021/05/cuon-sach-chuyen-con-meo-day-hai-au-bay-324x235.jpg"
            alt=""
          />
          <div className="information-blog">
            <div className="date">Ngày 2 tháng 3 năm 2024 </div>
            <div className="heading-blog">
              Review Sách Chuyện Con Mèo Dạy Hải Âu Bay
            </div>
            <div className="text-blog">
              Chuyện con mèo dạy hải âu bay? Chờ một chút, có gì đó sai sai ở
              đây. Con mèo dạy hải âu bay?
            </div>
            <span className="continue">Tiếp tục</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
