import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Button, Col, Popover, Row } from "antd";
import { DeleteOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { ProductType } from "../../Redux/Slice/ProductSlice";
import { removeFromCart } from "../../Redux/Slice/CartSlice";
import "../../asset/style/cart.css";
import Directional from "../components/Directional/Directional";
import { formatNumber } from "../utils/formatNumber";
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
            <div>Giá tiền </div>
            <div>Số lượng</div>
            <div>Thành tiền</div>
            <div className=""></div>
          </div>
          <div className="body-card-item">
            {products.map((item) => (
              <div className="item-cart">
                <div className="product-body-cart">
                  <div className="img-cart">
                    <img src={item.image} alt="" />
                  </div>

                  <div>
                    <p style={{ marginTop: "30px" }}>{item.name}</p>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    {formatNumber(item.price)}
                  </p>
                </div>
                <div> 1</div>
                <div
                  style={{
                    fontWeight: "500",
                    color: "var(--color-main)",
                    fontSize: "20px",
                  }}
                >
                  {formatNumber(item.price)}
                </div>
                <div>
                  <DeleteOutlined
                    onClick={() => handleRemoveProduct(item._id)}
                    className="btn-delete-item-cart"
                  />
                </div>
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
            src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
            alt=""
          />
        </div>
        <span>Chưa có sản phẩm trong giỏ hàng của bạn.</span> <br />
        <Link to="/products">
          <Button className="btn-back-product">Mua sắm ngay</Button>
        </Link>
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
