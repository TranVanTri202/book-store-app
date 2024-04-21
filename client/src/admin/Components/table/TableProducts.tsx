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
import ModalEditProduct from "../Modal/ModalEditProduct";
const TableProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.products.dataProduct);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [visibleModalEdit, setVisibleModalEdit] = useState<boolean>(false);
  const [visibleModalAdd, setVisibleModalAdd] = useState<boolean>(false);

  const closeModal = () => {
    setVisibleModalAdd(false);
    setVisibleModalEdit(false);
  };
  const openModal = (cate: string, product: ProductType | null) => {
    cate === "ModalEdit" ? setVisibleModalEdit(true) : setVisibleModalAdd(true);
    setSelectedProduct(product);
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
          <button onClick={() => openModal("ModalEdit", record)}>Sua</button>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="">
        <button onClick={() => openModal("ModalAdd", null)}>
          Thêm sản phẩm
        </button>
        <Table
          rowKey={(record) => record._id}
          dataSource={data}
          columns={column}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <ModalAddProduct visible={visibleModalAdd} onClose={closeModal} />
      <ModalEditProduct
        visible={visibleModalEdit}
        onClose={closeModal}
        product={selectedProduct}
      />
    </>
  );
};

export default TableProducts;
