import { Table } from "antd";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ProductType,
  deleteDataProduct,
  fetchDataProducts,
} from "../../../Redux/Slice/ProductSlice";
import ModalAddProduct from "../Modal/ModalAddProduct";
import { useState } from "react";
const TableProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);

  const [visible, setVisible] = useState<boolean>(false);
  const closeModal = () => {
    setVisible(false);
  };
  const openModal = () => {
    setVisible(true);
  };

  const handleDeleteProduct = async (id: string) => {
    await dispatch(deleteDataProduct(id));
    dispatch(fetchDataProducts());
  };

  const formatPrice = (price: number) => {
    // Định dạng giá thành '50.000đ'
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  const column = [
    {
      title: "Tên sách",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên tác giả",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Giá sách",
      dataIndex: "price",
      key: "price",
      render: (price: number) => formatPrice(price),
    },

    {
      title: "Thể loại",
      dataIndex: "category",
      key: "category",
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
      render: (text: string, record: ProductType) => (
        <>
          <button onClick={() => handleDeleteProduct(record._id)}>xoa</button>
          <button onClick={openModal}>Sua</button>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="">
        <button onClick={openModal}>Thêm sản phẩm</button>
        <Table
          rowKey={(record) => record._id}
          dataSource={data}
          columns={column}
        />
      </div>
      <ModalAddProduct visible={visible} onClose={closeModal} />
    </>
  );
};

export default TableProducts;
