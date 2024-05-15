const URL = "https://book-voyage.onrender.com";
export const apiConfig = {
  product: {
    getApi: `${URL}/product`,
    detailApi: `${URL}/product/`,
    addApi: `${URL}/product/`,
  },
  blog: {
    getApi: `${URL}/blog`,
  },
  User: {
    getApi: `${URL}/auth/userData`,
    getUserID: `${URL}/auth/getUser/`,
    register: `${URL}/auth/register`,
    login: `${URL}/auth/login`,
    changePassword: `${URL}/auth/change-password/`,
    updateAPI: `${URL}/auth/update/`,
  },
  Oder: {
    addOrders: `${URL}/orders/`,
    detailApi: `${URL}/orders/`,
  },
};
