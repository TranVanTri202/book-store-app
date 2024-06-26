import BlogManagement from "../admin/Page/BlogManagements";
import Dashboard from "../admin/Page/Dashboard";
import ProductManagement from "../admin/Page/ProductManagement";
import Blog from "../user/components/Blog/Blog";
import Cart from "../user/pages/Cart";
import Contact from "../user/pages/Contact";
import Home from "../user/pages/Home";
import Product from "../user/pages/Product";
import Profile from "../user/pages/Profile";
import Checkout from "./../user/pages/Checkout";
import DetailProduct from "./../user/pages/DetailProduct";

export const RouteUser = [
  {
    path: "/Home",
    component: Home,
    role: "user",
  },
  {
    path: "/Products",
    component: Product,
    role: "user",
  },
  {
    path: "/Contact",
    component: Contact,
    role: "user",
  },

  {
    path: "/Cart",
    component: Cart,
    role: "user",
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/detailProduct/:productId",
    component: DetailProduct,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/Blogs",
    component: Blog,
  },
];

export const RouteAdmin = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
    role: "admin",
  },
  {
    path: "/admin/products",
    component: ProductManagement,
    role: "admin",
  },
  {
    path: "/admin/blogs",
    component: BlogManagement,
    role: "admin",
  },
];
