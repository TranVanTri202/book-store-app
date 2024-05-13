export const apiConfig = {
  product: {
    getApi: "http://localhost:5000/product",
    detailApi: "http://localhost:5000/product/",
    addApi: "http://localhost:5000/product/",
  },
  blog: {
    getApi: "http://localhost:5000/blog",
  },
  User: {
    getApi: "http://localhost:5000/auth/userData",
    getUserID: "http://localhost:5000/auth/getUser/",
    register: "http://localhost:5000/auth/register",
    login: "http://localhost:5000/auth/login",
    changePassword: "http://localhost:5000/auth/change-password/",
    updateAPI: "http://localhost:5000/auth/update/",
  },
  Oder: {
    addOrders: "http://localhost:5000/orders/",
    detailApi: "http://localhost:5000/orders/",
  },
};
