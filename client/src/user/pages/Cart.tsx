import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Button, Col, Popover, Row } from "antd";
import { CloseOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import { removeFromCart } from "../../Redux/Slice/CartSlice";
import "../../asset/style/cart.css";
import Directional from "../components/Directional/Directional";
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
      <Directional directional="Giỏ hàng" />
      <Row gutter={2} justify="space-between">
        <Col span={14}>
          <div className="header-card-item">
            <div className="product-header-cart">Sản phẩm</div>
            <div>Số lượng</div>
            <div>Thành tiền</div>
            <div className=""></div>
          </div>
          <div className="body-card-item">
            {products.map((item) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                  backgroundColor: "#f7f7f7",
                  borderBottom: "1px solid gray",
                }}
                className="item-cart"
              >
                <div className="product-body-cart">
                  <div className="img-cart">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="name--price-cart">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div> 1</div>
                <div>{item.price}</div>
                <div> Xoas</div>
              </div>
            ))}
          </div>
        </Col>
        <Col span={8}>
          <div className="cartTotal" style={{ backgroundColor: "#f7f7f7" }}>
            <h2>Card Total</h2>
          </div>
          <Row>
            <Col span={12}>Sub total</Col>
            <Col span={12}>gia tien</Col>
          </Row>
          <Row>
            <Col>Sub total</Col>
            <Col>gia tien</Col>
          </Row>
          <Row>
            <Col>Sub total</Col>
            <Col>gia tien</Col>
          </Row>
        </Col>
      </Row>
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
