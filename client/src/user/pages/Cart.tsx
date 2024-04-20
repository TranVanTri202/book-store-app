import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Button, Col, Popover, Row } from "antd";
import { CloseOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import { removeFromCart } from "../../Redux/Slice/CartSlice";

const Cart = () => {
  const products: ProductType[] = useSelector(
    (state: RootState) => state.cart.dataProduct
  );

  // Tạo một bản sao của mảng sản phẩm
  const uniqueProducts = getUniqueProducts(products);
  const [localProducts, setLocalProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setLocalProducts(uniqueProducts);
  }, [uniqueProducts]);

  return (
    <>
      <div style={{ margin: "10px 0" }} className="directional">
        <Row style={{ backgroundColor: "#E7E7E7", padding: "10px" }}>
          <Col>
            <span style={{ color: "grey" }}>Trang Chủ</span> &#62;{" "}
            <b style={{ fontWeight: "600" }}>Giỏ hàng</b>
          </Col>
        </Row>
      </div>
      {localProducts.length === 0 ? (
        emptyCart()
      ) : (
        <CartProduct products={localProducts} />
      )}
    </>
  );
};

const CartProduct: React.FC<{ products: ProductType[] }> = ({ products }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeFromCart(productId));
  };
  const calculateQuantityAndTotalPrice = (
    productName: string
  ): [number, number] => {
    let quantity = 1;
    let totalPrice = 1;

    // Tính số lượng và tổng tiền dựa trên tên sản phẩm
    products.forEach((item) => {
      if (item.name === productName) {
        quantity += 1;
        totalPrice += item.price;
      }
    });

    return [quantity, totalPrice];
  };

  return (
    <>
      <div className="cartProducts">
        <Row
          justify="center"
          style={{
            backgroundColor: "rgb(231, 231, 231)",
            padding: "10px",
          }}
        >
          <Col span={1}></Col>
          <Col span={4}>Ảnh</Col>
          <Col span={5}>Sách</Col>
          <Col span={5}>Giá</Col>
          <Col span={4}>Số lượng</Col>
          <Col span={5}>Tổng tiền</Col>
        </Row>
        {products.map((item) => {
          const [quantity, totalPrice] = calculateQuantityAndTotalPrice(
            item.name
          );
          return (
            <>
              <Row key={item._id} align="middle" justify="space-between">
                <Col span={1}>
                  <CloseOutlined />
                </Col>
                <Col span={4}>
                  <img src={item.image} width={100} alt="" />
                </Col>
                <Col span={5}>{item.name}</Col>
                <Col span={5}>{item.price}</Col>
                <Col span={4}>{quantity}</Col>
                <Col span={5}>{totalPrice}</Col>
              </Row>
            </>
          );
        })}
        <Row justify="end">
          <Link to="/checkout">
            <Button>Thanh toán</Button>
          </Link>

          <Link to="/products">
            <Button>Quay lại</Button>
          </Link>
        </Row>
      </div>
    </>
  );
};

const emptyCart = () => {
  return (
    <>
      <div className="emptyCart">
        <div className="">
          <img
            src="https://i.pinimg.com/originals/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.png"
            alt=""
          />
        </div>
        <span>Ôi không!!! Giỏ hàng của bạn đang trống</span> <br />
        <span>Hãy mua hàng tại đâyyy nhé </span>
        <Popover content={<>Đi đến trang mua sắm</>}>
          <Link to="/products">
            {" "}
            <ShoppingOutlined
              shape="square"
              className="icon-back-pageProduct"
            />
          </Link>
        </Popover>
      </div>
    </>
  );
};

// Hàm để trả về một mảng các sản phẩm duy nhất
const getUniqueProducts = (products: ProductType[]): ProductType[] => {
  const uniqueProducts: ProductType[] = [];
  const names = new Set<string>();

  products.forEach((product) => {
    if (!names.has(product.name)) {
      uniqueProducts.push(product);
      names.add(product.name);
    }
  });

  return uniqueProducts;
};

export default Cart;
