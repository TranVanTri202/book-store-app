import { Table } from "antd";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  BlogType,
  deleteDataBlog,
  fetchDataBlog,
} from "../../../Redux/Slice/BlogSlice";
import ModalAddBlog from "../Modal/ModalAddBlog";
import ModalEditBlog from "../Modal/ModelEditBlog";
const TableBlog = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.blogs.dataBlog);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);
  const [visibleModalEdit, setVisibleModalEdit] = useState<boolean>(false);
  const [visibleModalAdd, setVisibleModalAdd] = useState<boolean>(false);

  const closeModal = () => {
    setVisibleModalAdd(false);
    setVisibleModalEdit(false);
  };
  const openModal = (cate: string, product: BlogType | null) => {
    cate === "ModalEdit" ? setVisibleModalEdit(true) : setVisibleModalAdd(true);
    setSelectedBlog(product);
  };

  const handleDeleteBlog = async (id: string) => {
    await dispatch(deleteDataBlog(id));
    dispatch(fetchDataBlog());
  };

  useEffect(() => {
    dispatch(fetchDataBlog());
  }, [dispatch]);

  const column = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Nội dung",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img
          src={image}
          alt="Product"
          style={{ width: "50px", height: "auto" }}
        />
      ),
    },
    {
      title: "Chức năng",
      render: (text: string, record: BlogType) => (
        <>
          <button onClick={() => handleDeleteBlog(record._id)}>xoa</button>
          <button onClick={() => openModal("ModalEdit", record)}>Sua</button>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="">
        <button onClick={() => openModal("ModalAdd", null)}>Thêm Blog</button>
        <Table
          rowKey={(record) => record._id}
          dataSource={data}
          columns={column}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <ModalAddBlog visible={visibleModalAdd} onClose={closeModal} />
      <ModalEditBlog
        visible={visibleModalEdit}
        onClose={closeModal}
        blog={selectedBlog}
      />
    </>
  );
};

export default TableBlog;
