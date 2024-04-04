import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteUser, RouteAdmin } from "./Routes/Route";
import LayoutUser from "./Routes/LayoutUser";
import LayoutAdmin from "./Routes/LayoutAdmin";
import ScrollToTop from "react-scroll-to-top";

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
      </Routes>
    </Router>
  );
}

export default App;
