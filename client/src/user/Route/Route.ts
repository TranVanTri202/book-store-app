import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const RoutePages = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Product,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
