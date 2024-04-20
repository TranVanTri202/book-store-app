import Dashboard from "../admin/Page/Dashboard";
import ProductManagement from "../admin/Page/ProductManagement";
import BlogPage from "../user/components/BlogPage/BlogPage";
import Cart from "../user/pages/Cart";
import Contact from "../user/pages/Contact";
import Home from "../user/pages/Home";
import Product from "../user/pages/Product";
import SignIn from "../user/pages/SignIn";
import Checkout from "./../user/pages/Checkout";

export const RouteUser = [
  {
    path: "/",
    component: Home,
    role: "user",
  },
  {
    path: "/products",
    component: Product,
    role: "user",
  },
  {
    path: "/contact",
    component: Contact,
    role: "user",
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/login",
    component: SignIn,
    role: "user",
  },
  {
    path: "/cart",
    component: Cart,
    role: "user",
  },
  {
    path: "/checkout",
    component: Checkout,
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
];
