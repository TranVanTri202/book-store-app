import BlogPage from "../components/BlogPage/BlogPage";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SignIn from "../pages/SignIn";

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
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/login",
    component: SignIn,
  },
];
