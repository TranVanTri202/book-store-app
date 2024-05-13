import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteUser, RouteAdmin } from "./Routes/Route";
import LayoutUser from "./Layouts/LayoutUser";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import ScrollToTop from "react-scroll-to-top";
import Page404 from "./user/pages/Page404";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Routes for User */}
        {RouteUser.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<LayoutUser>{<item.component />}</LayoutUser>}
          />
        ))}
        {/* Routes for Admin */}
        {RouteAdmin.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<LayoutAdmin>{<item.component />}</LayoutAdmin>}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
